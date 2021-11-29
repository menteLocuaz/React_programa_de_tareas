//  importo el modulo
import './App.css';
import React,{Component} from 'react';
import {todos } from './todos.json';
// importar comoponenete 
import Formu from './component/Formtask';
// componente de archivo
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    // tomamos los datos y lo convertimos delinput que etra
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
// funcion para  eliminar tareas 
  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }
// el estado del input y su captura de datos 
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    // mapeamos el estado de la matris de todos.json
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center text-black">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger text-black ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body text-black">
              {todo.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                // la funfion de eliminar
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    });

    // retorna el componente 
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand " href="" >
            tareas En Curso
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
 {/* mostrar la matris de todo en un contenedoor  */}
            <div className="col-md-4 text-center">
              <Formu onAddTodo={this.handleAddTodo}></Formu>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
