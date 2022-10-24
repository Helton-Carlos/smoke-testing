import STtable from './STtable.vue';
import { render } from '@testing-library/vue'

describe("STtable component testing", () => {
  test('STtable Render', () => {
    const component = render(STtable)

    expect(component).toBeDefined()
  })

  test.only('STtable Render', () => {
    const component = render(STtable ,{
      props: {
        name: 'Helton',
        phone: '(75) 98866-9858',
        link: 'https://www.linkedin.com/in/helton-brito-856ba516b/',
      }
    })
    
    expect(component.getByText).toBeDefined();
  })
})