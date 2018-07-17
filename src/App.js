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

    let task = { title : this.state.taskName, id : Date.now(), completed : false }

    this.setState({
      ...this.state,
      todoList : this.state.todoList.concat(task)
    })
  })

  handleTaskChange = ((e) => {

    this.setState({
      taskName : e.target.value
    })
  })

  render() {
    return (
      <div>
        <input onChange={this.handleTaskChange} type="text" placeholder="enter task"/>
        <button onClick={this.handleAddTask}>Add Task</button>
        <TodoList todoList = {this.state.todoList} onClick={this.completeTask}/>
        <CompletedList completedList = {this.state.completedList}/>
      </div>
    );
  }

  completeTask = ((e) => {

  })
}

export default App;
