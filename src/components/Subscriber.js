import React from 'react'
import { connect } from 'react-redux' // 리덕스 연결
import { addSubscriber } from '../redux/index'

function Subscriber({ count, addSubscriber }) {
  return (
    <div>
      <h2>구독자수 : {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기</button>
    </div>
  )
}

const mapStateToProps = ({ subscribe }) => {
  // 리덕스 연결

  return {
    count: subscribe.count,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   }
// }

const mapDispatchToProps = {
  addSubscriber,
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscriber) // 리덕스 연결, 액션 연결
