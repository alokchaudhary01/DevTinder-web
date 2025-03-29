import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";


function App() {
  return (
    <>
      <Provider store = {appstore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
      {/* <NavBar/>
      <h2>hwllo world</h2> */}
      </Provider>
    </>
  );
}

export default App;
