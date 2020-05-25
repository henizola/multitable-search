import React from 'react';
import './list.styles.scss';
import { SearchContext } from '../../context/context.context';

const List = ({ countries }) => {
	let filterd = countries;
	const filterData = context => {
		filterd = countries.filter(countrie => {
			return countrie.name
				.toLowerCase()
				.includes(context.country.toLowerCase());
		});
		filterd = filterd.filter(countrie => {
			return countrie.region
				.toLowerCase()
				.includes(context.region.toLowerCase());
		});
		filterd = filterd.filter(countrie => {
			return countrie.subRegion
				.toLowerCase()
				.includes(context.subRegion.toLowerCase());
		});
	};

	return (
		<SearchContext.Consumer>
			{context => (
				<div className='single'>
					{filterData(context)}

					<div className='header'>
						<h2 className='cu'>Country</h2>
						<h2 className='ca'>Capital</h2>
						<h2 className='re'>Region</h2>
						<h2 className='sr'>Sub-Region</h2>
						<h2 className='la'>Latitiude</h2>
						<h2 className='lo'>Longtiude</h2>
					</div>

					{filterd.map((countrie, index) => (
						<div className='list' key={index}>
							<span className='name'>{countrie.name}</span>
							<span className='capital'>{countrie.capital}</span>
							<span className='region'>{countrie.region}</span>
							<span className='subregion'>
								{countrie.subRegion}
							</span>
							<span className='lat'>{countrie.latitude}</span>
							<span className='long'>
								{countrie.longrude}
							</span>{' '}
						</div>
					))}
				</div>
			)}
		</SearchContext.Consumer>
	);
};
export default List;
