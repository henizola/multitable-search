import React from "react";
import "./App.css";
import List from "./components/list/list.component";
import Search from "./components/search/search.component";
import { SearchProvider } from "./context/context.context";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      name: "",
      region: "",
      subregion: "",
      capital: "",
    };
  }

  componentDidMount = async () => {
    const datas = await fetch(
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
    );
    const count = await datas.json();

    for (let i = 0; i < 250; i++) {
      let country = {
        name: count[i].name.official,
        capital: count[i].capital[0],
        region: count[i].region,
        subRegion: count[i].subregion,
        latitude: count[i].latlng[0].toFixed(2),
        longrude: count[i].latlng[1].toFixed(2),
      };
      const newCount = [...this.state.countries, country];
      this.setState({ countries: newCount });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { ...otherProps } = this.state;
    return (
      <div className="App">
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Search handleChange={this.handleChange} />
        <List {...otherProps} />
      </div>
    );
  }
}

export default App;
