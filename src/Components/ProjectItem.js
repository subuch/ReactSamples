import React, {Component} from 'react';

class ProjectItem extends Component{

    render (){
        console.log(this.props);
        
        return (
            <li className="Project">
                  <strong>  {this.props.project.title} </strong> :{this.props.project.category} 
                 
            </li>
        );
    }
}
 //{this.props.project.id}:
export default ProjectItem;