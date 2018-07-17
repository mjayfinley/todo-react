import React, {Component} from 'react'


export class TodoList extends Component {


  render() {

    let tasks = this.props.todoList

    let taskName = tasks.map((task) => {

      return (
        <li key={task.id}>
          {task.title}
          <button onClick={this.handleCompleteTask}>Complete Task</button>
        </li>
      )
    })

    return (
      <div id="pendingTasks">
        <h3>Pending Tasks</h3>
        <ul>
          {taskName}
        </ul>
      </div>
    )
  }

}
