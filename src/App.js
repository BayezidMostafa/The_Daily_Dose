import './App.css';
import Profile from './components/Profile/Profile';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <div>
      <div className='main-container'>
        <Tasks></Tasks>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
