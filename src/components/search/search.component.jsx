import React from 'react'
import './search.styles.scss';


const Search=({handleChange})=>{

       const handlech=(event)=>{
            handleChange(event);
        }

    return  <div className="search">
                <input type="text" placeholder='Filter by Country' name='name'onChange={handlech} />
                <input type="text"  placeholder='Filter by Capital' name='capital'onChange={handlech}/>
                <input type="text"  placeholder='Filter by Region' name='region'onChange={handlech} />
                <input type="text"   placeholder='Filter by Sub-Region' name='subregion'onChange={handlech} />
            </div>
}
export default Search;