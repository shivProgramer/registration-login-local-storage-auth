
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import ProtectedRoute from './services/ProtectedRoute';
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/' element={<ProtectedRoute/>}>
       <Route path='/' element={<Home/>}/>
       </Route>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
