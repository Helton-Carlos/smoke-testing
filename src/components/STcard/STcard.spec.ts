import STcard from './STcard.vue'
import { render } from '@testing-library/vue'

describe('STcard component', () => {
  test('STcard Render', () => {
    const component = render(STcard)

    expect(component).toBeDefined()
  })

  test('STcard Product', () => {
    const { findByText } = render(STcard)

    findByText('Camisa Adidas')
  })

  test('STcard Color', () => {
    const { findByText } = render(STcard)

    findByText('Black')
  })

  test('STcard Preco', () => {
    const { findByText } = render(STcard)

    findByText('$ 77.99')
  })
})