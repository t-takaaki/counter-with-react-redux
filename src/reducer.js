// https://redux.js.org/introduction/getting-started#basic-example
// https://medium.com/@toshev/making-a-simple-counter-app-with-redux-with-react-2f21bcb14fad

import types from './actionTypes';
export default function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { count: state.count + 1 }
    case types.DECREMENT:
      return { count: state.count - 1 }
    case types.RESET:
      return { count: 0 }
    default:
      return state
  }
}
