import { useState } from "react";
import Navbar from "./assets/component/navbar.jsx"; 
import NewsBoard from "./assets/component/newsBoard.jsx";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App;
