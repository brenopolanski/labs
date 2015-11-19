var React       = require('react');
var ReactDOM    = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var h = require('./helpers');

/*
	App
 */
var App = React.createClass({
	render: function() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
});

/*
	Header
	<Header />
 */
var Header = React.createClass({
	render: function() {
		return (
			<header className="top">
				<h1>Catch
					<span className="ofThe">
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
				Day</h1>
				<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
		)
	}
});

/*
	Order
	<Order />
 */
var Order = React.createClass({
	render: function() {
		return (
			<p>Order</p>
		)
	}
});

/*
	Inventory
	<Inventory />
 */
var Inventory = React.createClass({
	render: function() {
		return (
			<p>Inventory</p>
		)
	}
});

/*
	StorePicker
	This will let us make <StorePicker />
 */
var StorePicker = React.createClass({
	render: function() {
		return (
			<form className="store-selector">
				<h2>Please Enter a Store</h2>
				<input type="text" ref="storeId" defaultValue={h.getFunName()} required />
				<input type="submit" />
			</form>
		)
	}
});

/*
	Not Found
 */
var NotFound = React.createClass({
	render: function() {
		return <h1>Not Found!</h1>
	}
});

/*
	Routes
 */
var routes = (
	<Router history={createBrowserHistory()}>
		<Route path="/" component={StorePicker} />
		<Route path="/store/:storeId" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
);

// ReactDOM.render(<App />, document.querySelector('#main'));
ReactDOM.render(routes, document.querySelector('#main'));
