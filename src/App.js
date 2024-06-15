import { useEffect, useState } from "react";
import "./styles.css";
import debouncedQuery from "./util";

// const url =
// `https://api.frontendeval.com/fake/food/${input}`;

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (input) {
      fetchItems();
    }
  }, [input]);

  const fetchItems = async () => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;

    const data = await debouncedQuery(url);
    setData(data);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Debounce API Call</h1>
      <input onChange={inputHandler} />
      {data && data.length > 0 && (
        <div className="data-list">
          {data.map((item, index) => (
            <div key={index} className="item">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
