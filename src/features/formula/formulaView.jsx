import React from 'react'
import { useSelector } from 'react-redux'


const FormulaView = () => {
  const formulaValue = useSelector(state => state.formula.formula)
  return (
    <div className="formulaScreen">{formulaValue}</div>
  )
}

export default FormulaView