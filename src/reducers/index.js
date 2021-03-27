import Question from '../components/question'


const initialState = {
  one: 0,
  two: 0,
  // three: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ONE':
      return Object.assign({}, state, {
        one: state.one + 1
      })
    case 'VOTE_TWO':
      return Object.assign({}, state, {
        two: state.two + 1
      })
    // case 'VOTE_THREE':
    //   return Object.assign({}, state, {
    //     three: state.three + 1
    //   })
    default:
      return state
  }
}