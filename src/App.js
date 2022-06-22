import React, { useState, useEffect } from "react";
import SearchPanel from "./Components/SearchPanel";

function App() {
  const [state, setState] = useState([]);
  const [value, setValue] = useState("Adi Gallia");
  useEffect(() => {
    const url = `http://localhost:3000/db.json?title=50`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        // const obj = Object.assign({}, json.db)
        setState(json.db);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const setPropsValue = (item) => {
    setValue(item);
  };


  return (
    <div className="App">
      <h1>Testing Fetch API search_request</h1>
      <SearchPanel setPropsValue={setPropsValue} />
      <ul>
        {state.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
