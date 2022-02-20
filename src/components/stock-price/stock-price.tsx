import { Component, Host, h, State, Element, Prop, Watch, Listen } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'css-stock-price',
  styleUrl: 'stock-price.scss',
  shadow: true,
})
export class StockPrice {
  // eslint-disable-next-line
  @Element() element: HTMLElement;
  @State() fetchedPrice: number;
  @State() stockUserInput: string;
  @State() stockInputValid: boolean = false;
  @State() error: string;
  @State() loading: boolean = false;
  @Prop({ mutable: true, reflect: true }) stockSymbol: string;
  @Watch('stockSymbol')
  stockSymbolChange(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }

  // Private initialStockSymbol: string = '';
  private stockElement: HTMLInputElement;

  private onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    this.stockInputValid = this.stockUserInput.trim() !== '';
  }

  private onFetchStockPrice(event: Event) {
    event.preventDefault();
    this.stockSymbol = this.stockElement.value;
  }

  componentDidLoad() {
    console.log('componentDidLoad');
    if (this.stockSymbol) {
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillLoad() {
    console.log('ComponentWillLoad');
    console.log(this.stockSymbol);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  @Listen('cssSymbolSelected', { target: 'body' })
  onStockSymbolSelected(event: CustomEvent) {
    if (event.detail && event.detail !== this.stockSymbol) {
      // This.fetchStockPrice(event.detail);
      this.stockSymbol = event.detail;
    }
  }

  private fetchStockPrice(stockSymbol: string) {
    this.loading = true;
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Invalid!!');
        }

        return res.json();
      })
      .then(response => {
        if (!response['Global Quote']['05. price']) {
          throw new Error('Invalid Symbol!');
        }

        this.error = null;
        this.fetchedPrice = Number(response['Global Quote']['05. price']);
      })
      .catch(err => {
        this.error = err.message;
        this.fetchedPrice = null;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  render() {
    let dataContent = <p> Please, enter a Symbol</p>;
    if (this.error) {
      dataContent = <p>{this.error}</p>;
    }

    if (this.fetchedPrice) {
      dataContent = <p>Price: ${this.fetchedPrice}</p>;
    }

    if (this.loading) {
      dataContent = <css-spinner />;
    }

    return (
      <Host
        class={{
          error: Boolean(this.error),
        }}
      >
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input
            type="text"
            id="stock-symbol"
            placeholder="input"
            ref={el => {
              this.stockElement = el;
            }}
            value={this.stockUserInput}
            onInput={this.onUserInput.bind(this)}
          />
          <button type="submit" disabled={!this.stockInputValid || this.loading}>
            Fetch
          </button>
        </form>
        <div>{dataContent}</div>
      </Host>
    );
  }
}
