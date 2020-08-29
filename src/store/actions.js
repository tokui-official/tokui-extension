import * as types from './mutation-types'

export const setRandomList = ({commit}, payload) => {
  commit(types.UPDATE_RANDOM_LIST, payload)
}
export const setUserOption = ({commit}, payload) => {
  commit(types.UPDATE_USER_OPTION, payload)
}
