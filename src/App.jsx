import { useState } from 'react'
import Header from './Component/Header'
import Tab from './Component/Tab'
import TableRow from "../src/Component/Table/TableRow"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-400 h-dvh flex justify-center items-center'>
        <div className='h-[90vh] border-1 w-[80vw] rounded'>
      <Header/>
      <Tab/>
      <TableRow/>
        </div>
    </div>
  )
}

export default App
