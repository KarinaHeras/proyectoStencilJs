import { newSpecPage } from '@stencil/core/testing';
import { FooTer } from './foo-ter';

describe('foo-ter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FooTer],
      html: `<foo-ter></foo-ter>`,
    });
    expect(page.root).toEqualHtml(`
      <foo-ter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </foo-ter>
    `);
  });
});
