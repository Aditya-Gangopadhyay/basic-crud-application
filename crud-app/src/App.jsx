import { useState } from 'react'
import './App.css'
import TextBar from './components/TextBar'


function App() {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);

 const handleSubmit = () =>{

  if(inputText.length > 0){
  const updatedData = [...data, inputText];
  setData(updatedData);
  setInputText('');
}
 }
  return (
    <>
     <input type= "text" onChange={(e)=>setInputText(e.target.value)} />
     <button onClick={handleSubmit}>Add me</button>
     <table>
     { data.map((x) => <tr>{x}</tr>)}
      </table>
    </>
  )
}

export default App
