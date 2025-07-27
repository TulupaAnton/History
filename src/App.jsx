import './App.css'
import './index.css'

import { Askold } from './Components/BlocksOfHistory/Askold/Askold'
import { Arrow } from './Components/Arrow/Arrow'
import { Oleg } from './Components/BlocksOfHistory/Oleg/Oleg'

import { DuoCards } from './Components/BlocksOfHistory/OlgaIgor/Duo'

function App () {
  return (
    <>
      <Askold />
      <Oleg />
      <DuoCards />
    </>
  )
}

export default App
