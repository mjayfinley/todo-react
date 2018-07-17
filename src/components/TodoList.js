import React, {Component} from 'react'


export class TodoList extends Component {


  handleCompleteTask = ((task, e) => {

    //let completedTask = {title: task.title, id : task.id, completed : true}

    console.log(e.target)
    console.log(task)



  })

  render() {

    let tasks = this.props.todoList

    let taskName = tasks.map((task) => {

      return (
        <li key={task.id}>
          {task.title}
          <button onClick={(event)=>{this.handleCompleteTask(task, event)}}>Complete Task</button>
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
