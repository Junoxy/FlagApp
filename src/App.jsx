import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import './App.css'

// layouts
import RootLayout from './layouts/RootLayout'
// pages
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import NotFoundPage from './pages/NotFoundPage'
// components
import Countries from './components/Countries'
// data
import { countryDataLoader } from './pages/HomePage'
import { countryPageLoader } from './pages/CountryPage'

const routesFromElements = createRoutesFromElements(
    <Route path='/' element={<RootLayout/>} >
        <Route path='/' element={<HomePage/>} loader={countryDataLoader}>
            <Route path='/' element={<Countries/>} />
        </Route>
            <Route path='not-found' element={<NotFoundPage/>} />
            <Route path=':country' element={<CountryPage/>} loader={countryPageLoader} /> 
    </Route>
)

const router = createBrowserRouter(routesFromElements)

function App() {
    

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
