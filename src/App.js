import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import Project from './Components/Project'
import AddProject from './Components/AddProject'

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
          id: uuid.v4(),
          title:'Business Website',
          category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title:'Social App',
          category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title:'E-Commerce  Website',
          category: 'Web Development'
      }
  ]});
}

handleProject(newProjectModel){
  let ProjectModel=this.state.project;
  ProjectModel.push(newProjectModel);
  this.setState({project:ProjectModel})
  console.log(this.state.project);
}
  render() {
    return (
      <div className="App">
        <h1>Reactjs with Node.js</h1>
          <AddProject addProject={this.handleProject.bind(this)}/>
          <Project test="HelloWorld" project={this.state.project}/>
      </div>
    );
  }
}

export default App;
