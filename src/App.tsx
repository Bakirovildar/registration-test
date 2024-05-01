import { Provider } from 'react-redux';
import './App.css';
import { SignUp } from './pages/register/SignUp';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SignUp />
      </div>
    </Provider>
  );
}

export default App;
