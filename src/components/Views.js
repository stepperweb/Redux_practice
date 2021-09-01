import React, { useState } from 'react'
import { connect } from 'react-redux' // 리덕스 연결
import { addView } from '../redux/index'

function Views({ count, addView }) {
  const [number, setNumber] = useState(1)

  return (
    <div>
      <h2>구독자수 : {count}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => addView(number)}>구독하기</button>
    </div>
  )
}

const mapStateToProps = ({ views }) => {
  // 리덕스 연결

  return {
    count: views.count,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   }
// }

const mapDispatchToProps = {
  addView: (number) => addView(number),
}

export default connect(mapStateToProps, mapDispatchToProps)(Views) // 리덕스 연결, 액션 연결
