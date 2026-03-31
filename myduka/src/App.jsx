import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Sales from './pages/Sales'
import Layout from './layout/Layout'
import Stock from './pages/Stock'
import Login from './pages/Login'
import { Protected } from './components/Protected'


const App = () => {


  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />

          <Route element={<Protected />} >
              <Route path='/products' element={<Products />} />
              <Route path='/sales' element={<Sales />} />
              <Route path='/stock' element={<Stock />} />
          </Route>

          <Route path='/login' element={<Login />} />


        </Route>
      </Routes>

    </div>
  )
}

export default App
