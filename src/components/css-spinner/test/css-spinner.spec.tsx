import { newSpecPage } from '@stencil/core/testing';
import { CssSpinner } from '../css-spinner';

describe('css-spinner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CssSpinner],
      html: `<css-spinner></css-spinner>`,
    });
    expect(page.root).toEqualHtml(`
      <css-spinner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </css-spinner>
    `);
  });
});
