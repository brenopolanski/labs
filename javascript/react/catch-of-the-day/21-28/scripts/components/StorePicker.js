/*
	StorePicker
	This will let us make <StorePicker />
 */

import React from 'react';
import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

class StorePicker extends React.Component {
	
	@autobind
	goToStorage(event) {
		event.preventDefault();
		// get the data from the input
		// transition from <StorePicker /> to <App />
		var storeId = this.refs.storeId.value;
		this.history.pushState(null, '/store/' + storeId);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStorage}>
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
				<input type="submit" />
			</form>
		)
	}
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;