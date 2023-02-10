import { useDispatch, useSelector} from 'react-redux'
import './App.css'
import  FormulaView  from './features/formula/formulaView'
import  OutputView  from './features/output/outputView'
import { formulaSet, formulaAdd } from './features/formula/formulaSlice'
import { outputSet,outputAdd } from './features/output/outputSlice'
import { useState } from 'react'

function App() {
  const formula = useSelector(state => state.formula.formula)
  const output = useSelector(state => state.output.output)
  const dispatch = useDispatch();
  const [total,setTotal] = useState("0")
  const operators = ["/","*","+","-"]

  const handleClick = (event) => {

    const value = event.target.value
    const lastFormulaChar = formula.charAt(formula.length -1)
    const firstOutputChar = output.charAt(0)
    const firstFormulaChar = formula.charAt(0)

    switch(value){
      case "0":
        if(formula.includes("=")) {
          dispatch(formulaSet(value))
          dispatch(outputSet(value))
        } else if (operators.includes(lastFormulaChar)){
          if(lastFormulaChar !== "-"){
            dispatch(formulaAdd(value))
            dispatch(outputSet(value))
          }
        } else if (firstOutputChar !== "0" || output.length !== 1){
          dispatch(formulaAdd(value))
          dispatch(outputAdd(value))
        } else {
          dispatch(formulaSet(formula.slice(0,-1) + value))
          dispatch(outputSet(value))
        }
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if(formula.includes("=")) {
          dispatch(formulaSet(value))
          dispatch(outputSet(value))
        } else if (operators.includes(lastFormulaChar)){
          if(lastFormulaChar !== "-"){
            dispatch(outputSet(value))
            dispatch(formulaAdd(value))
          } else {
            dispatch(outputAdd(value))
            dispatch(formulaAdd(value))
          }
        } else if (firstOutputChar === "0" && output.length === 1) {
          dispatch(outputSet(value))
          dispatch(formulaSet(formula.slice(0,-1) + value))
        } else {
          dispatch(outputAdd(value))
          dispatch(formulaAdd(value))
        }
        break;
      case "*":
      case "/":
      case "+":
        if(formula.includes("=")) {
          dispatch(formulaSet(total))
        }
        if(!formula || (formula.length === 1 && firstFormulaChar === "-") ) {
            return
        } else if (operators.includes(lastFormulaChar)){
          let index = 0
          for(let i = formula.length -1 ; i > 0; i--){
              if(operators.includes(formula.charAt(i))){
                index --
              } else {
                return
              }
          }
          dispatch(formulaSet(formula.slice(0,index) + value))
          dispatch(outputSet(value))
        } else {
          dispatch(outputSet(value))
          dispatch(formulaAdd(value))
        }
        break;
      case "-":
        if(formula.includes("=")) {
          dispatch(formulaSet(total))
        }
        if (lastFormulaChar !== "-"){
          dispatch(outputSet(value))
          dispatch(formulaAdd(value))
        }
        break;
      case "AC":
        dispatch(formulaSet(""))
        dispatch(outputSet("0"))
        break;
      case ".":
        if(!output.includes(".")){
          dispatch(outputAdd(value))
          dispatch(formulaAdd(value))
        }
        break;
      case "=":
        setTotal(eval(formula).toString())
        dispatch(outputSet(eval(formula).toString()))
        dispatch(formulaSet(formula + value + eval(formula).toString()))
        break;
    }
  }

  return (
    <div className="app">
      <div>
        <div className="calculator">
        <FormulaView />
        <OutputView />
        <div>
          <button className="jumbo AC" id="clear" value="AC" onClick={handleClick}>AC</button>
          <button id="divide" value="/" onClick={handleClick}>/</button>
          <button id="multiply" value="*" onClick={handleClick}>x</button>
          <button id="seven" value="7" onClick={handleClick}>7</button>
          <button id="eight" value="8" onClick={handleClick}>8</button>
          <button id="nine" value="9" onClick={handleClick}>9</button>
          <button id="subtract" value="-" onClick={handleClick}>-</button>
          <button id="four" value="4" onClick={handleClick}>4</button>
          <button id="five" value="5" onClick={handleClick}>5</button>
          <button id="six" value="6" onClick={handleClick}>6</button>
          <button id="add" value="+" onClick={handleClick}>+</button>
          <button id="one" value="1" onClick={handleClick}>1</button>
          <button id="two" value="2" onClick={handleClick}>2</button>
          <button id="three" value="3" onClick={handleClick}>3</button>
          <button className="jumbo" id="zero" value="0" onClick={handleClick}>0</button>
          <button id="decimal" value="." onClick={handleClick}>.</button>
          <button className="equals" id="equals" value="=" onClick={handleClick}>=</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
