import './App.css';
import Todo from './components/Todo.jsx'
import Header from './components/Header.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Header />
      <Todo title ="FInish Frontend Simplified" />
      <Todo title = "Finish Interview Section" />
      <Todo title = "Land 100k JOB" />
      <Modal title = 'Are you sure?' />
    </div>
  );
}

export default App;
