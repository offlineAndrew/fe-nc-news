import { Header } from "./components/Header";
import {Articles} from "./components/Articles";
import { Routes, Route, Link } from 'react-router-dom';
import {Article} from "./components/Article";


function App() {
 

  return (
    <>
      <Header/>
      <Routes>
      <Route path="/"  element={<Articles />} />
      <Route path="/articles/:article_id" element={<Article/>} />
      </Routes>
      
    </>
  );
}

export default App;
