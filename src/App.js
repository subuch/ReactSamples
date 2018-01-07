import React, { Component } from 'react';
import './App.css';
import Project from './Components/Project'
class App extends Component {
  constructor(){
    super();
    this.state={
        project:[]
    }
}

componentWillMount(){
  this.setState({project:[
        {
          title:'Business Website',
          category: 'Web Design'
      },
      {
        title:'Social App',
          category: 'Mobile Development'
      },
      {
        title:'E-Commerce  Website',
          category: 'Web Development'
      }
  ]});
}

  render() {
    return (
      <div className="App">
          <h1>My App</h1>
          <Project test="HelloWorld" project={this.state.project}/>
      </div>
    );
  }
}

export default App;
