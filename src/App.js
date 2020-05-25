import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search/search.component';
import { SearchProvider } from './context/context.context';
import WithSpinner from './components/with-spinner/with-spiner.component';

class App extends React.Component {
	state = {
		countries: [],
		loading: true,
	};
	componentDidMount = async () => {
		const datas = await fetch(
			'https://raw.githubusercontent.com/mledoze/countries/master/countries.json'
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
			console.log(this.state.countries);
			const newCount = [...this.state.countries, country];
			this.setState({ countries: newCount });
			this.setState({ loading: false });
		}
	};
	render() {
		return (
			<div className='App'>
				<h1>Country/Capital Data Multi-Search Service</h1>
				<SearchProvider>
					<Search />
					<WithSpinner
						countries={this.state.countries}
						isLoading={this.state.loading}
					/>
					;
				</SearchProvider>
			</div>
		);
	}
}

export default App;
