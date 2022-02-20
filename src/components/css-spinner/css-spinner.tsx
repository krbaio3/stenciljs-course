import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'css-spinner',
  styleUrl: 'css-spinner.scss',
  shadow: true,
})
export class CssSpinner {
  render() {
    return (
      <Host>
        <div class="lds-hourglass" />;
      </Host>
    );
  }
}
