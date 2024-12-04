import './App.css';
import React, { useMemo, useReducer, useRef, useState } from 'react';

// import { render } from '@testing-library/react';
import Explorin from './components/Explorin';


function App() {
  // const [expenses, setExpenses] = useState([]);
  // const handleSaveExpense = (expense) => {
  //   setExpenses([...expenses, expense]);
  // };

  // const handleDeleteExpense = (index) => {
  //   const updatedExpenses = [...expenses];
  //   updatedExpenses.splice(index, 1);
  //   setExpenses(updatedExpenses);
  // };
//   function reducer(acc,dispatch){
//     switch(dispatch.type){
//       case "Add":{
//         return acc+dispatch.payload
//       }
//       default:{ return acc}
//     }
//   }
// let [count,dispatch] = useReducer(reducer,[])
// let ref = useRef()
// function handleClick(){
//   dispatch({type:"Add",payload:2})
// }
let [state,setstate] = useState(0)
console.log('rendered')
function handleClick(){
  setstate(value=>value+1)
  console.log('dsdsdsd')
}
console.log("render")
let images = [
  { url: "https://example1.com", ready: true, error: false },
  { url: "https://example2.com", ready: false, error: true },
  { url: "https://example3.com", ready: false, error: true },
  { url: "https://example4.com", ready: false, error: true }
];


  return (
    <>
    {/* <Form /> */}
        <Explorin name="Explorin Academy" count={"4"} images={images} />
    </>

  );
}

export default App;
