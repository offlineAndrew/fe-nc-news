import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header";
import Articles from "./components/Articles";

function App() {
 

  return (
    <>
      <Header/>
      <Articles/>
    </>
  );
}

export default App;
