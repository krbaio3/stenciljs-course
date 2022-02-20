import { newSpecPage } from '@stencil/core/testing';
import { StockPrice } from '../stock-price';

describe('stock-price', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StockPrice],
      html: `<stock-price></stock-price>`,
    });
    expect(page.root).toEqualHtml(`
      <stock-price>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stock-price>
    `);
  });
});
