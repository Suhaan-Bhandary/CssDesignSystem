import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home/Home";
import DesignSystem from "./screens/DesignSystem/DesignSystem";

import WebsiteHome from './screens/FullWebsite/Home/Home';
import Destination from "./screens/FullWebsite/Destination/Destination";
import Crew from "./screens/FullWebsite/Crew/Crew";
import Technology from "./screens/FullWebsite/Technology/Technology";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DesignSystem" element={<DesignSystem />} />

        <Route path="/FinalWebsite">
          <Route index element={<WebsiteHome />} />
          <Route path="Home" element={<WebsiteHome />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="Crew" element={<Crew />} />
          <Route path="Technology" element={<Technology />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;