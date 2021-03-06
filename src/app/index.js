var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
    render:function () {
        return(
            <div>
                <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
                <p><strong>Cheese smell factor: </strong> {this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price: </strong> {this.props.cheese.price}</p>
            </div>
        );
    }
});

var myCheese = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.5$'};

//put component into html page
ReactDOM.render(<TodoComponent cheese={myCheese} />, document.getElementById('todo-wrapper'));
