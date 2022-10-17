import React from 'react'
import useCounter from './../../hooks/use-counter'

function Counter(props) {
    let {counter, onClick} = useCounter(props.forward, props.startValue)

  return (
    <div onClick={onClick} style={{fontWeight: 'bold', fontSize: '50px', color: props.color}}>{counter}</div>
  )
}

export default Counter