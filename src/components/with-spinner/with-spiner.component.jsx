import React from 'react';
import './with-spinner.styles.scss';
import List from '../list/list.component';
const WithSpinner = ({ isLoading, countries }) => {
	console.log('renderd');
	return isLoading ? (
		<div className='spinner-overlay'>
			<div className='spinner-container'></div>
		</div>
	) : (
		<List countries={countries} />
	);
};
export default WithSpinner;
