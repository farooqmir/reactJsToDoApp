import React, {Component} from "react";
import _ from "lodash";
import ToDoListItem from "../todoitem"
export default class ToDoList extends Component {
    renderItems(){
        const props = _.omit(this.props,"todos");
        return _.map(this.props.todos, (todo, index)=> <ToDoListItem key={index} {...todo} {...props} />);
    }

    render (){
        console.dir(this.props);
        return  (
            <div>
                <h1>TODO LIST GOES HERE</h1>
                <ul>
                    {this.renderItems()}
                </ul>
            </div>    
        );
    }

}