import './Todo.css'

function Todo({title, para}){
    function deleteTodo() {

    }
    return (
        <div className="todo">
            <h2> { title } </h2>
            <p> { para } </p>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default Todo;