import React, {Component} from 'react'


export class CompletedList extends Component {

  handlePendingTaskButtonClick = ((task) => {

    this.props.handlePendingTask(task)

  })

  render() {

    let tasks = this.props.completedList

    let taskName = tasks.map((task, index) => {

      return (
        <li key={task.id}>
          {task.title}
          <button onClick={() => this.handlePendingTaskButtonClick(task)}>Complete Task</button>
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
