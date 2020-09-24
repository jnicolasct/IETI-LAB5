import React from 'react';
import {Task} from './Task';

export class View extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Task key={i} description={todo.description} RName={todo.responsible.name} REmail={todo.email} status={todo.status} dueDate={todo.dueDate}/>
            );
        });

        return (
            <div>
                {todoList}
            </div>
        );


    }

}