import React from 'react'
import { connect } from 'react-redux'

function Display(props) {
  return <div>구독자 수 : {props.count}</div>
}

const mapToStateToProps = ({ subscribe }) => {
  return {
    count: subscribe.count,
  }
}

export default connect(mapToStateToProps)(Display)
