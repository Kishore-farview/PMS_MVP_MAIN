
import React from 'react'
import LeftSideBar from './component/LeftSideBar'
import Routings from './component/Routings'

const App = () => {
  return (
    <><div className="flex h-screen w-screen overflow-hidden">
      <LeftSideBar />
      <Routings />
      </div>
    </>
  )
}

export default App