import STinput from './STinput.vue'
import { render, fireEvent } from '@testing-library/vue'

describe("STinput component testing", () => {
  test('STinput Render', () => {
    const component = render(STinput)

    expect(component).toBeDefined()
  })

  test('STinput Input', async () => {
    const { getByPlaceholderText, getByText } = render(STinput)

    const input = getByPlaceholderText('Estou procurando?')
    const button = getByText('Buscar')

    await fireEvent.update(input, "teste")
    await fireEvent.click(button)

    expect(input).toBeDefined()
  })
})