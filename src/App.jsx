import { Route, Routes } from "react-router-dom"
import AlertDetail from "./pages/AlertDetail"
import Overview from "./pages/Overview"
import AlertList from "./pages/AlertList"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Overview/>} />
          <Route path="/alerts" element={<AlertList/>}/>
          <Route path="/alerts/:id" element={<AlertDetail/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App
