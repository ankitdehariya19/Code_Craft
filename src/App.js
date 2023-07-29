import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { productInputs, userInputs } from "./formSource";
// import Side from "./components/side/side"

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
                <Route path="/users">
                       <Route index element={<List/>}/>
                       <Route path=":userId" element={<Single/>}/>
                       <Route path="new" element={<New input={userInputs} title="Add New User"/>}/>
                </Route>
                <Route path="products">
                       <Route index element={<List/>}/>
                       <Route path=":productId" element={<Single/>}/>
                       <Route path="new" element={<New input={productInputs} title="Add New Product"/>}/>
                </Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
