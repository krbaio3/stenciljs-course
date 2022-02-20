import { newSpecPage } from '@stencil/core/testing';
import { StockFinder } from '../stock-finder';

describe('stock-finder', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StockFinder],
      html: `<stock-finder></stock-finder>`,
    });
    expect(page.root).toEqualHtml(`
      <stock-finder>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stock-finder>
    `);
  });
});
