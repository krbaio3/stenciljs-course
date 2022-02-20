import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({
  tag: 'css-stock-finder',
  styleUrl: 'stock-finder.scss',
  shadow: true,
})
export class StockFinder {
  private stockNameInput: HTMLInputElement;

  @State() searchResults: { symbol: string; name: string }[] = [];
  @State() loading: boolean = false;
  @Event({ bubbles: true, composed: true }) cssSymbolSelected: EventEmitter<string>;

  private onFindStocks(event: Event) {
    event.preventDefault();
    this.loading = true;
    const stockName = this.stockNameInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(resp => {
        console.log(resp);
        this.searchResults = resp.bestMatches.map(el => ({ symbol: el['1. symbol'], name: el['2. name'] }));
        console.log(this.searchResults);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  private onSelectSymbol(symbol: string) {
    this.cssSymbolSelected.emit(symbol);
  }

  render() {
    let content = (
      <ul>
        {this.searchResults.map(element => (
          <li onClick={this.onSelectSymbol.bind(this, element.symbol)}>
            {' '}
            <strong>{element.symbol}</strong> - {element.name}
          </li>
        ))}
      </ul>
    );
    if (this.loading) {
      content = <css-spinner />;
    }

    return (
      <Host>
        <form onSubmit={this.onFindStocks.bind(this)}>
          <input
            type="text"
            id="stock-symbol"
            placeholder="input"
            ref={el => {
              this.stockNameInput = el;
            }}
          />
          <button type="submit">Find!</button>
        </form>
        {content}
      </Host>
    );
  }
}
