var React = require('react');

/*
	StorePicker
	This will let us make <StorePicker />
 */

var StorePicker = React.createClass({
	render: function() {
		return (
			<form className="store-selector">
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" required />
				<input type="submit" />
			</form>
		)
	}
});

React.render(<StorePicker />, document.querySelector('#main'));