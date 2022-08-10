import { useState } from 'react'
import './App.css'
import CardUsers from './components/CardUsers'
import users from './json/users.json'
import colors from './utils/colors'

function App() {

 

  const getRandomElement = arr => {
   const indexRandom = Math.floor(Math.random() * arr.length)
   return arr[indexRandom]
  }

  let usersRandom = getRandomElement(users)
  let colorRandom = getRandomElement(colors)

  getRandomElement(users);
  const [randomUser, setRandomUser] = useState(usersRandom)
  const [randomColor, setRandomColor] = useState(colorRandom)
  
  const objStyle = {
    backgroundColor: randomColor
  }
  
  const getRandomAll = () =>{
     usersRandom = getRandomElement(users)
     colorRandom = getRandomElement(colors) 

    setRandomUser(usersRandom)
    setRandomColor(colorRandom)
  }
  return (
    <div className="App" style={objStyle}>
     <CardUsers randomUser={randomUser} 
      randomColors={randomColor}  
      getRandomAll={getRandomAll}/>
    </div>
  )
}

export default App
