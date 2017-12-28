import { h, View } from 'hyperapp'

import { State, Actions } from './modules'

import Counter from './components/Counter'

const view: View<State, Actions> = (state, actions) => (
  <main>
    <Counter count={state.count.count} onChange={actions.count.change}/>
  </main>
)

export default view
