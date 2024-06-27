import { useState } from "react";
import { Header, Content } from "./components";

function App() {
  return (
    <>
      <div className="px-[1rem] max-w-[1100px]  mx-auto">
        <Header />
        <Content />
      </div>
    </>
  );
}

export default App;
