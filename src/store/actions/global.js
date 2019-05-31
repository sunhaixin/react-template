import store from '../index'

const dispatch = store.dispatch

export const changeTestText = testText => {
  dispatch({ type: 'CHANGE_TEST_TEXT', testText })
}
