
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'


function App() {

  return (
    <BrowserRouter basename='/Urban-S'>
    <Toaster position="top-right" richColors expand visibleToasts={3} />
       <Routes>
          <Route path="/" element={<UserLayout/>}>
            <Route index element={<Home/>}></Route>
          </Route>
          
       </Routes>
    </BrowserRouter>
  )
}

export default App
