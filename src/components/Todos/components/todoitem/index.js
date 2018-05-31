import React, {Component} from "react";

export default class ToDoListItem extends Component {
    constructor(props){
      super(props);
      this.state = {
          isEditing: false
        };
    }    
    renderStyledTask() {
        console.log("render", this.props);
      const {task,isComplete} = this.props;
      const style = {
          color: isComplete ? "green":"red",
          cursor: "pointer"
      }
      if(this.state.isEditing){
          return (
            <form onSubmit={this.onSaveClick.bind(this)}>
              <input ref="updatedTask" defaultValue={this.props.task} />
            </form>
          );
      }
      return <span style={style} onClick={this.props.toggleTask.bind(this, task)}>{this.props.task}</span>;
    }

    renderActionsSection (){
          if(this.state.isEditing) {
              return (
                <div>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </div>
              );
          } 

          return (
            <div>
                 <button onClick={this.onEditClick.bind(this)}>Edit</button>
                 <button  onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </div>
          );
    }
    render (){
        console.log("ToDoListItem");
        console.log(this.props);
        return  (
           <li>
               {this.renderStyledTask()}
               {this.renderActionsSection()}
            </li>
        );
    }
    onEditClick(){
        this.setState({isEditing:true});
    }
    onCancelClick(){
        this.setState({isEditing:false});
    }
    onDeleteClick(){
       this.props.deleteTask(this.props.task);
    }
    onSaveClick(event){
        event.preventDefault();
        this.setState({isEditing:false});
        this.props.saveTask(this.props.task, this.refs.updatedTask.value);
    }
}
