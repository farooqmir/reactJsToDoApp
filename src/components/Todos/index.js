import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/todolist";
import CreateToDo from "./components/newTodo";
const todos = [
    {
       task:"make a app",
       isComplete: true
    },
    {
        task:"eat good food",
        isComplete: false
    }
];
export default class ToDoFeature extends React.Component{
    constructor (props){
        super(props);
        this.state = {todos};
    }
    render () {
        return (
           <div>
               <h1>TODO APP2</h1>
               <CreateToDo todos = {this.state.todos} createTask={this.createTask.bind(this)}/>
               <ToDoList 
                todos = {this.state.todos} 
                toggleTask = {this.toggleTask.bind(this)}
                saveTask = {this.saveTask.bind(this)}/> 
            </div>
        );
    }
     
    toggleTask (task){
        const foundTask = _.find(this.state.todos,(todo)=> todo.task==task);
        foundTask.isComplete = !foundTask.isComplete;
        this.setState({todos: this.state.todos}); 
    }
    
    createTask(task){  
      this.state.todos.push({task,isComplete:false});
      this.setState({todos:this.state.todos});
    }

    saveTask(oldTask,newTask){ 
        const foundTask = _.find(this.state.todos,(todo)=> todo.task==oldTask);
        foundTask.task = newTask;
        this.setState({todos:this.state.todos});
    }
}
