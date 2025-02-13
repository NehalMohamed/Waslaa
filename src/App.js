import "./styles/shared.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/signInUp/login/login";
import Register from "./components/signInUp/register/register";
<<<<<<< HEAD
import WelcomeMsg from "./components/signInUp/SignMsgs/WelcomeMsg";
import RegisterationResponse from "./components/signInUp/RegisterationQues/RegisterationResponse";
import RegisterQues from "./components/signInUp/RegisterationQues/RegisterQues";
=======
import Home from "./components/home/home";
>>>>>>> 815589bf7e66f991e39d2c716dd2524688ea0bef
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/Welcome" element={<WelcomeMsg />} />
          <Route path="/Response" element={<RegisterationResponse />} />
          <Route path="/RegisterQues" element={<RegisterQues />} />
=======
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
>>>>>>> 815589bf7e66f991e39d2c716dd2524688ea0bef
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;