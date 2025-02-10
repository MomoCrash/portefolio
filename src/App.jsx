import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return (
      <>

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout/>}>
                      <Route index element={<Home />} />
                      <Route path={"/*"} element={<NotFound />} />
                  </Route>
              </Routes>
          </BrowserRouter>

      </>
  )
}

export default App
