import './RegionFilter.css'

const RegionFilter = ({onChange}) => {
    return(
        <div className="region-filter">
            
            
            <select className='region-select' onChange={onChange}>
                <option value="" disabled hidden selected> Region</option>
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