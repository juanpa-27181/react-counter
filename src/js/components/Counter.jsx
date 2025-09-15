import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-3 text-center mt-3">
      <h2>Contador: {count}</h2>
      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          -1
        </button>
        <button className="btn btn-secondary" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
