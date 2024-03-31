import { Outlet, useLoaderData } from 'react-router-dom'

// Components
import Navbar from '../components/Navbar'

const AppLayout = () => {
    const countryData = fetchCountryData()
    return (
        <div className="app-layout">
            <Navbar />
            <main>
                
            </main>
        </div>
    )
}

const fetchCountryData = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const resJson = await res.json()
    console.log(resJson)
    return resJson
}

export default AppLayout
