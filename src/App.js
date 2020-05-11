import React from 'react';
import './App.css';
import List from './components/list/list.component';
import Search from './components/search/search.component';

class App extends React.Component {

  constructor(){
    super();

    this.state={
      countries:[]
    }
  }

   componentDidMount= async ()=>{
    const datas= await fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json');
    const count=await datas.json();
  
   for(let i=0;i<250;i++){
        
let country={
       name:count[i].name.official,
       capital:count[i].capital[0],
       region:count[i].region,
       subRegion:count[i].subregion,
       latitude:count[i].latlng[0],
       longrude:count[i].latlng[1]
     }
     const  newCount=[...this.state.countries,country];
     this.setState({countries:newCount});
   } 
     
     
      
   
   }
    
  

  render(){
    const {countries}=this.state;
    return (
    <div className="App">
      <h1>Country/Capital Data Multi-Search Service</h1>
        <Search/>
       <List countries={countries} find={'Aruba'}/>
    </div>
  );
  }
  
}

export default App;
