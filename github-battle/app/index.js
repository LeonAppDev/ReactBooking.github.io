var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css')

//state
//lifecycle event
//UI
class App extends React.Component{

  render()
  {
    return (
           <div>
            Hello React Leon!
            </div>)
  }
}

ReactDOM.render(
<App/>,
document.getElementById('app')

)
