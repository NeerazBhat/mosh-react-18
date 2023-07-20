import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);

  //afterRender
  // useEffect(() => {
  //   if (inputRef.current) inputRef.current.focus();
  // });

  const [category, setCategory] = useState('');

  return (
    <main className="p-3">
      {/* <input ref={inputRef} type="text" className="form-control" /> */}
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="City">City</option>
        <option value="Town">Town</option>
      </select>
      <ProductList category={category}/>
    </main>
  );
}

export default App;
