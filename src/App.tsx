import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>I ❤️ Parcel!</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>count is {count}</p>
    </section>
  );
}
