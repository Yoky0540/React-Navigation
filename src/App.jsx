import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/pages/Home.jsx'
import Member from './components/pages/Member.jsx'
import Product from './components/pages/Product.jsx'
import Admin from './components/pages/Admin.jsx'

function App() {

  return (
    <div>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' Component={Home} exact/>
          <Route path='/member' Component={Member}/>
          <Route path='/product' Component={Product}/>
          <Route path='/admin' Component={Admin}/>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
