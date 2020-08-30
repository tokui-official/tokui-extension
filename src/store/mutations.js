import * as types from './mutation-types'

export default {
  [types.UPDATE_RANDOM_LIST] (state, payload) {
    state.random_list = payload
  },
  [types.UPDATE_USER_OPTION] (state, payload) {
    state.user.options = payload
  }
}
