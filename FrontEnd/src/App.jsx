import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import AddUser from './components/AddUser.jsx';
import Home from './components/Home.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import ViewProfile from './components/ViewProfile.jsx';

import { toast } from "react-toastify";

toast.onChange((numberOfToastDisplayed, containerId) => {

})

export default function App() {


  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adduser" element={<AddUser />} />

        <  Route path="/updateuser/:id" element={<UpdateUser />} />

        <  Route path="/view/:id" element={<ViewProfile />} />
      






      </Routes>

    </>

  )
}