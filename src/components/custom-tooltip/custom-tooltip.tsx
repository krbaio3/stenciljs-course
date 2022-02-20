import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'custom-tooltip',
  styleUrl: 'custom-tooltip.scss',
  shadow: true,
})
export class CustomTooltip {
  @State() tooltipVisible: boolean = false;

  @Prop() public text: string = '';

  private onToggleTooltip() {
    this.tooltipVisible = !this.tooltipVisible;
    console.log('entra', this.tooltipVisible);
  }

  render() {
    let tooltip = null;

    if (this.tooltipVisible) {
      tooltip = <div id="tooltip-text">{this.text}</div>;
    }

    return (
      <Host>
        <slot />
        <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>
          ?
        </span>
        {tooltip}
      </Host>
    );
  }
}
