import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";


function App() {
  const state = useSelector((state)=> state);
  console.log(state, "sg")
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<LoginPage/>} />
          <Route path ="/home" element={<HomePage/>} />
          <Route path="/profile/:userId" element={<ProfilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
