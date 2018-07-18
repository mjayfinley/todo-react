import React, { Component } from 'react';
import {TodoList} from './components/TodoList';
import {CompletedList} from './components/CompletedList';
import './App.css';
import './Styles.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      taskName : '',
      todoList : [],
      completedList : [],
    }
  }



  handleAddTask = (() => {

    let task = { title : this.state.taskName, id : Date.now() }

    this.setState({
      todoList : this.state.todoList.concat(task)
    })
  })


  handleTaskChange = ((e) => {

    this.setState({
      taskName : e.target.value
    })
  })


  handleCompletedTask = ((task) => {

    let tasks = this.state.todoList

    tasks = tasks.filter((taskToRemove) => {
      return taskToRemove.id !== task.id
    })

    this.setState({
      todoList : tasks,
      completedList : this.state.completedList.concat(task)
    })
  })


  render() {
    return (
      <div>
        <input onChange={this.handleTaskChange} type="text" placeholder="enter task"/>
        <button onClick={this.handleAddTask}>Add Task</button>
        <TodoList todoList={this.state.todoList} handleCompletedTask = {this.handleCompletedTask}/>
        <CompletedList completedList = {this.state.completedList}/>
      </div>
    );
  }


}

export default App;
