import React from 'react';
import './list.styles.scss'


const List=({countries,find})=>{
let filterd=countries.filter((countrie)=>countrie.name.includes(''))
return <div className="single">
    <div className="header">
    <h2 className='cu'>Country</h2>
    <h2 className='ca'>Capital</h2> 
    <h2 className='re'>Region</h2> 
    <h2 className='sr'>Sub-Region</h2>  
    <h2 className='la'>Latitiude</h2> 
    <h2 className='lo'>Longtiude</h2> 
    </div>
  
     {
         
         filterd.map((countrie,index)=> <div className='list' key={index}>
          
            <span className='name'>{countrie.name}</span>
            <span className='capital'>{countrie.capital}</span>
            <span className='region'>{countrie.region}</span>
            <span className='subregion'>{countrie.subRegion}</span>
            <span className='lat'>{countrie.latitude}</span>
            <span className='long'>{countrie.longrude}</span> </div> 
     )
     }
    {/* {console.log(country)} */}
             
        </div>


} 
export default List;