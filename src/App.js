import './App.css'
import Subscriber from './components/Subscriber'
import Display from './components/Display'
import Views from './components/Views'
import Comments from './components/Comments'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Comments />
        <Subscriber />
        <Display />
        <Views />
      </div>
    </Provider>
  )
}

export default App
