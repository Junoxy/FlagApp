import { Outlet, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import './CountriesLayout.css'

import AllCountries from '../components/AllCountries';
import SearchBar from '../components/SearchBar'
import RegionSelector from '../components/RegionSelector'

const CountriesLayout = () => {
    
    const [region,setRegion] = useState()
    const handleRegionChange = (region) => {
        setRegion(region)
        console.log(region)
    }
    return(
        <div className="countries-layout">
            <div className="filtering-options">
                <SearchBar/>
                <RegionSelector changeRegion={handleRegionChange} />
            </div>
            <AllCountries region={region} />
        </div>
    )
}

export default CountriesLayout;