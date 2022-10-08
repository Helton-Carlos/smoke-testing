import STnav from './STnav.vue';
import { render } from '@testing-library/vue'

describe("STnav component testing", () => {
  test('STnav Render', () => {
    const component = render(STnav)

    expect(component).toBeDefined()
  })

  test('STnav Title', () => {
    const { getByText } = render(STnav)

    getByText('Smoke testing')
  })

  test('STnav routes', () => {
    const { findByTestId } = render(STnav)

    const route = findByTestId('routes')

    expect(route).toBeDefined()
  })
})