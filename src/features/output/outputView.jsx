import React from 'react'
import { useSelector } from 'react-redux'

const OutputView = () => {
  const outputValue = useSelector(state => state.output.output)
  return (
    <div className="outputScreen" id="display">{outputValue}</div>
  )
}

export default OutputView