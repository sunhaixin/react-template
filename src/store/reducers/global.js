const initState = {
  testText: '测试文案',
}

export default (state = initState, action) => {
  const {
    type,
    testText,
  } = action

  switch (type) {
    case 'CHANGE_TEST_TEXT':
      return Object.assign({}, state, { testText })
    default:
      return state
  }
}
