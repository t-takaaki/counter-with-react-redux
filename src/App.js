import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions';

const mapStateToProps = state => ({ count: state.count });
const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(({increment, decrement, reset, count}) => {
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
})
