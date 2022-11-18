import './App.css';
import Todo from './components/Todo.jsx'
import Header from './components/Header.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <>
    <div>
      <input type="text" onChange={(event) => {
        console.log(event.target.value)
      }}/>
      <button>Add todo</button>
    </div>
      <Header />
      <div className='todo__wrapper'>
      <Todo title ="FInish Frontend Simplified" 
      para = 'hello' />
      <Todo title = "Finish Interview Section" para = 'hello'/>
      <Todo title = "Land 100k JOB" para = 'hello'/>
      </div>
      <Modal title = 'Are you sure?'/>
    </>
  );
}

export default App;
