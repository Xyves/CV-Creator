import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center selection:bg-green-900">
      <h1>Works</h1>
    </div>
  );
}

export default App;
