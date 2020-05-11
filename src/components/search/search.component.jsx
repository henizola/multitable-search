import React from 'react'
import './search.styles.scss';


const Search=()=>{
    return  <div className="search">
                <input type="text" placeholder='Filter by Country'/>
                <input type="text"  placeholder='Filter by Capital'/>
                <input type="text"  placeholder='Filter by Region'/>
                <input type="text"   placeholder='Filter by Sub-Region'/>
            </div>
}
export default Search;