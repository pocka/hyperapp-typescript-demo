import { h, View } from 'hyperapp'

import { State, Actions } from './modules'

const view: View<State, Actions> = (state, actions) => (
  <main>
    <button onclick={actions.count.decrement}>-</button>
    <div>Count: {state.count.count}</div>
    <button onclick={actions.count.increment}>+</button>
  </main>
)

export default view
