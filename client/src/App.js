import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBlog from "./component/AllBlog";
import Blogs from "./component/Blogs";
import Home from "./component/Home";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    
     <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/allblog' element={<AllBlog/>}/>
     </Routes>
     
     </BrowserRouter>

     </>
  );
}

export default App;
