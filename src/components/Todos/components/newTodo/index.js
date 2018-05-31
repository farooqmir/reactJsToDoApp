import React, {Component} from "react";

export default class CreateToDo extends Component {
    constructor(props){
      super(props);
      this.state = {error:null};
    }    
    
    renderError (){
        if(!this.state.error)  
            return null;

        return (
           <div style={{color:'red'}}>{this.state.error}</div>
        );
        
    }
    render (){
        return (
           <form onSubmit={this.handleSubmit.bind(this)}>
              <label for="createtd" /> 
              <input ref="createtodo" type="text" placeholder = "create a task here"/>
              <button>Create</button>
              {this.renderError()}
            </form>
        );
    }

    handleSubmit(event) {
        console.log("asasd",this.props.createTask);
        event.preventDefault();
        const validateInput = this.validateInput();

        if(validateInput){
           this.setState({error:validateInput});
           return;
        }
        this.setState({error:null});
        this.props.createTask(this.refs.createtodo.value);
        this.refs.createtodo.value = "";
    }

    validateInput (){
        if(this.refs.createtodo && this.refs.createtodo.value.trim()=="")
        {
            return "Please enter a task.";
        }
        else if(_.find(this.props.todos,(todo)=> todo.task==this.refs.createtodo.value)){
           return "This task already exists!";
        }

        return null;
    }
}
