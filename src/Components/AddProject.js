
import React, {Component} from 'react';
import uuid from 'uuid';

class AddProject extends Component{
    constructor(){
        super();
        this.state={
            forminputs:{}
        }
    }

    static defaultProps={
        categories:[
            'WebDesign','Web Development','Mobile Development'
        ]
    }

    handleSubmit(e){
        if(this.refs.title.value==="")
            alert("Title is invalid");
            else{
                this.setState(
                    {
                        forminputs:{
                            id: uuid.v4(),
                            title:this.refs.title.value,
                            category: this.refs.category.value
                        }
                    }
                ,function(){
                    console.log(this.state);
                    this.props.addProject(this.state.forminputs);  //Reading the forminput in the main Component
                });
            }
            e.preventDefault();
            
    }

    render (){

        let categoriesoption=this.props.categories.map(
            cate=>{
                    return  <option key={cate} value={cate}>{cate}</option>
        });

      

        return (
           

            <div>
                 <h2>
                 Form Component
            </h2>

            <form onSubmit={this.handleSubmit.bind(this)}>
           
                <div>
                    <label>Title</label><br/>
                    <input type="text" ref="title"/>
                </div>

                <div>
                    <label>Category</label><br/>
                    <select ref="category">
                        {categoriesoption}
                    </select>

                </div>
                <input type="submit" value="submit"/>
             </form>
             </div>
        );
    }
}

export default AddProject;