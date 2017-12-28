import { ActionsType } from 'hyperapp'

import * as Count from './count'

// State
export interface State {
  count: Count.State
}

export const state: State = {
  count: Count.state
}

// Actions
export interface Actions {
  count: Count.Actions
}

export const actions: ActionsType<State, Actions> = {
  count: Count.actions
}
