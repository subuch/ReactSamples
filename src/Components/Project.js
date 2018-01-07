import React, {Component} from 'react';
import ProjectItem from './ProjectItem'

class Project extends Component{
    render (){

        let projItems;
        
            if(this.props.project){
                projItems=this.props.project.map(proj=>{
                    console.log(proj.title);
                    return (
                        <ProjectItem key={proj.title} project={proj} />
                    )
                })
            }

       // console.log(this.props);
        
        return (
            <div className="Project">
                    
                    <h3>Projects  Component</h3>  {this.props.test}
                    {projItems}

            </div>
        );
    }
}

export default Project;