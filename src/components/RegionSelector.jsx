
import './RegionSelector.css'


const RegionSelector = ({changeRegion}) => {
    const handleChange = (e) => {
        const selectedRegion = e.target.value
        changeRegion(selectedRegion)
    }
    return(
        <div className="region-selector">
            <label htmlFor="region"></label>
            <select  id="region" onChange={handleChange}>
                <option value="">All</option>
                <option value="Africa">Africa</option>'
                <option value="Americas">America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>'
            </select>
        </div>
    )
}

export default RegionSelector;