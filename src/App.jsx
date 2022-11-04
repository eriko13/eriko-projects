import logo from './logo.svg';
import './App.css';
import Toast from './components/toast/Toast';
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';

var testList = [];
function App() {
  return (
    <body className='app'>
      <div className="app">
        <div className='main-header'>
          Hello
        </div>
        <div className='button' onClick={helloWorld}>
          TOAST
        </div>
        <Toast
          toastList={testList}f
          position="bottom-right"
        />
        <div className="app-header">
        </div>
      </div>
    </body>

  );
}
function helloWorld() {

  testList = [
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
  ]
  console.log('Hello world!!')
}
export default App;
