import { useState, useEffect } from 'react'
import { Route, RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom'
import './App.css'

// Layouts
import AppLayout from './layouts/AppLayout'

// functions


// Routes
const routesFromElements = createRoutesFromElements(
    <Route path='/' element={<AppLayout/>} >
    </Route>
)

const router = createBrowserRouter(routesFromElements)

function App() {
   
    return (
        <div className="App">
           <RouterProvider router={router}/>
        </div>
    )
}

export default App
