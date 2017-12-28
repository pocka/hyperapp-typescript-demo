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
  change(value: number): State
}

export const actions: ActionsType<State, Actions> = {
  change: count => $state => ({ ...$state, count })
}
