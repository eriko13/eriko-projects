import logo from './logo.svg';
import './App.css';
import Toast from './components/toast/Toast';
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';

const testList = [
  {
    id: 1,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
    icon: checkIcon
  },
  {
    id: 2,
    title: 'Danger',
    description: 'This is an error toast component',
    backgroundColor: '#d9534f',
    icon: errorIcon
  },
];
function App() {
  return (
    <div className="app">
      <div className='main-header'>
        Hello
      </div>
      <Toast
        toastList={testList}
        position="bottom-right"
      />
      <div className="app-header">
      </div>
    </div>
  );
}
function helloWorld() {
  console.log('Hello world!!')
}
export default App;
