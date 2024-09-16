import { useState } from "react";
import { HeaderPage } from "../pages/HeaderPage/ui/HeaderPage";
import { MainPage } from "../pages/MainPage/MainPage";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string | null>(null);
  
  return (
    <div className="container">
      <HeaderPage
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setFilterValue={setFilterValue}
      />
      <MainPage searchValue={searchValue} filterValue={filterValue}/>
    </div>
  );
}

export default App;
