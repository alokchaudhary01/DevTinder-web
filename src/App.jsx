import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Feed from "./components/Feed"
import Connections from './components/Connections';
import ConnectionRequests from "./components/ConnectionRequests";
import Libdas from "./components/Libdas"

function App() {
  return (
    <>
      <Provider store = {appstore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
          <Route path="/feed" element={<Feed />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/connections" element={<Connections/>} />
          <Route path="/requests" element={<ConnectionRequests/>} />
          <Route path="/requ" element={<Libdas/>} />
          
          </Route>
          
        </Routes>
      </BrowserRouter>
    
      </Provider>
    </>
  );
}

export default App;
