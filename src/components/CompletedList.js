import React, {Component} from 'react'


export class CompletedList extends Component {

  render() {

    let tasks = this.props.completedList

    let taskName = tasks.map((task, index) => {
      return (
        <li key={index}>
          {task.title}
          <button onClick={this.handlePendingTask}>Still Pending Task</button>
        </li>
      )
    })
    return (
      <div id="completedTasks">
        <h3>Completed Tasks</h3>
        <ul>
          {taskName}
        </ul>
      </div>
    )
  }

}
