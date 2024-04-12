import './RegionFilter.css'

const RegionFilter = ({onChange}) => {
    return(
        <div className="region-filter">
            
            <div className="placeholder-text">Region</div>
            <select onChange={onChange}>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        
    )
}

export default RegionFilter;