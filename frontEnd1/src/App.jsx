import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('/api/items')
    .then((res)=>{
        setItems(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])
  

  return (
    <>
      <h1>learning backend </h1>
      <p>items {items.length}</p>
      {
        items.map((item)=>
          (
            <div key={item.id}>
              <h2>{item.id}</h2>
              <h2>{item.name}</h2>
            </div>
            
          )
        )
      }
    </>
  )
}

export default App
