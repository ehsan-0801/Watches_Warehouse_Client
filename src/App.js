import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Insertwatch from './Components/Operations/Insertwatch/Insertwatch';
import WatchesDetails from './Components/Shared/WatchesDetails/WatchesDetails';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
        <Route path="/blog" element={ <Blog></Blog> }></Route>
        <Route path="/insertwatch" element={
          <RequireAuth>
            <Insertwatch></Insertwatch>
          </RequireAuth> }>
        </Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <WatchesDetails></WatchesDetails>
          </RequireAuth> }>
        </Route>
        <Route path="/manageInventory" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/signup" element={ <Signup></Signup> }></Route>
        <Route path="/signin" element={ <SignIn></SignIn> }></Route>
        <Route path="*" element={ <NotFound></NotFound> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
