import './HomePage.css'
import SearchBar from '../components/SearchBar'
import RegionFilter from '../components/RegionFilter'
import Countries from '../components/Countries'
import { useLoaderData, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'


const HomePage = () => {
    const countryData = useLoaderData()
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRegion, setSelectedRegion] = useState(null)
    const [matchesFound, setMatchesFound] = useState(true)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const filteredCountries = countryData.filter((country) => {
        const matchesSearch = country.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase())

        const matchesRegion = selectedRegion
            ? country.region === selectedRegion
            : true

        return matchesSearch && matchesRegion
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        
    }, [countryData])

    useEffect(() => {
        setMatchesFound(filteredCountries.length > 0)
    }, [filteredCountries])
    useEffect(() => {
        if (!matchesFound) {
            navigate('/not-found')
        }
    }, [matchesFound, navigate])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleRegionFilterChange = (event) => {
        setSelectedRegion(event.target.value)
        console.log(selectedRegion)
    }

    const CountriesFiltered = filteredCountries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
    )
    return (
        <div className="home-page">
            <div className="filtering-options">
                <SearchBar onChange={handleSearchChange} searchQuery={searchQuery} />
                <RegionFilter onChange={handleRegionFilterChange} />
            </div>
            <div className="home-page-content">
                {matchesFound && (
                    <Countries
                        countryData={CountriesFiltered}
                        loading={loading}
                    />
                )}
            </div>
        </div>
    )
}

export const countryDataLoader = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all')
    if (!res.ok) {
        throw Error('Could not find the profiles')
    }
    return res.json()
}

export default HomePage
