import { newSpecPage } from '@stencil/core/testing';
import { CustomTooltip } from '../custom-tooltip';

describe('custom-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomTooltip],
      html: `<custom-tooltip></custom-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-tooltip>
    `);
  });
});
