import {render, fireEvent} from '@testing-library/vue'
import HelloWorld from './HelloWorld.vue'

test('increments value on click', async () => {
  const {getByText} = render(HelloWorld)

  getByText('Times clicked: 0')

  const button = getByText('increment')

  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})