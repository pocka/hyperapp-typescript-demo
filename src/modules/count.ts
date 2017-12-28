import { ActionsType } from 'hyperapp'

// State
export interface State {
  count: number
}

export const state: State = {
  count: 0
}

// Actions
export interface Actions {
  increment(): State
  decrement(): State
}

export const actions: ActionsType<State, Actions> = {
  increment: () => $state => ({ count: $state.count + 1 }),
  decrement: () => $state => ({ count: $state.count - 1 })
}
