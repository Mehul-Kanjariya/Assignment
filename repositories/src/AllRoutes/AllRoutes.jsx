import React from 'react'
import { Route, Routes } from 'react-router-dom'
import All from '../Components/All'
import Css from '../Components/Css'
import Html from '../Components/Html'
import JavaScript from '../Components/JavaScript'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<All/>}/>
            <Route path="/css" element={<Css/>}/>
            <Route path="/html" element={<Html/>}/>
            <Route path="/javascript" element={<JavaScript/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes