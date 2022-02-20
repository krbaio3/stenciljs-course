import { Component, h, Host, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'css-side-drawer',
  styleUrl: 'side-drawer.scss',
  shadow: true,
})
export class SideDrawer {
  /**
   * Title from SideDrawer
   * @type {string}
   */
  @Prop({ reflect: true }) public myTitle: string = 'Default Title';
  /**
   * Open SideDrawer
   * @type {boolean}
   */
  @Prop({ reflect: true, mutable: true }) public opened: boolean = false;

  @State() public showContactInfo: boolean = false;

  @Method()
  public async open() {
    this.opened = true;
  }

  private onCloseDrawer() {
    this.opened = false;
  }

  private onContentChange(content: string) {
    console.log(content);
    this.showContactInfo = content === 'contact';
  }

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-info">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>Phone: 123513412</li>
            <li>
              E-Mail: <a href="mailto:codesolutionsgroup@gmail.com">codesolutionsgroup@gmail.com</a>
            </li>
          </ul>
        </div>
      );
    }

    return (
      <Host>
        <div class="backdrop" onClick={this.onCloseDrawer.bind(this)} />
        <aside>
          <header>
            <h1>{this.myTitle}</h1>
            <button onClick={this.onCloseDrawer.bind(this)}>X</button>
          </header>
          <section id="tabs">
            <button class={this.showContactInfo ? '' : 'active'} onClick={this.onContentChange.bind(this, 'nav')}>
              Navigation
            </button>
            <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'contact')}>
              Contact
            </button>
          </section>
          <main>{mainContent}</main>
        </aside>
      </Host>
    );
  }
}
