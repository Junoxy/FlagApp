import './App.css'
import { Route, createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'

// Layout
import RootLayout from './layouts/RootLayout'
import CountriesLayout from './layouts/CountriesLayout'
// Components
import AllCountries from './components/AllCountries'
import Country from './components/Country'
// Data
import { CountriesLoader } from './components/AllCountries'



const routesFromElements = createRoutesFromElements(
  <Route path='/' element={<RootLayout/>} >
      
      <Route path='/' element={<CountriesLayout /> } loader={CountriesLoader}>
        <Route path='/' element={<AllCountries/>} loader={CountriesLoader} />
        <Route path='country' element={<Country/>} />
      </Route>
      

     
  </Route>
)

const router = createBrowserRouter(routesFromElements)



function App() {

    return (
        
          <div className='app'>
              <RouterProvider router={router}/>
            </div>
        
    )
}

export default App
