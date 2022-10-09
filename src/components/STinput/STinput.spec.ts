import STinput from './STinput.vue'
import { render, fireEvent, } from '@testing-library/vue'

describe("STinput component testing", () => {
  test('STinput Render', () => {
    const component = render(STinput)

    expect(component).toBeDefined()
  })

  test('STinput Input', async () => {
    const { queryByTestId } = render(STinput)

    const input = queryByTestId('pesquisa')

    expect(input).toBeDefined()
  })
})