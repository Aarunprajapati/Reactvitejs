import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div
        className="bg-white d-flex w-full h-screen border-2"
        style={{ backgroundColor: color }}
      >
        <div className="w-full bg-white rounde">
          <div className=" m-2 inline-block">
            <button
              className=" bg-red-600 text-white outline-none rounded-lg px-3 py-3"
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>
          </div>
          <div className=" m-2 inline-block">
            <button className=" bg-green-600 text-white outline-none rounded-lg px-3 py-3"
            onClick={() => {
              setColor("green");
            }}
          >
              Green
            </button>
          </div>
          <div className=" m-2 inline-block">
            <button className=" bg-blue-600 text-white outline-none rounded-lg px-3 py-3"
            onClick={() => {
              setColor("blue");
            }}
          >
              Blue
            </button>
          </div>
          <div className=" m-2 inline-block">
            <button className=" bg-orange-600 text-white outline-none rounded-lg px-3 py-3"
            onClick={() => {
              setColor("orange");
            }}
          >
              orange
            </button>
          </div>
          <div className=" m-2 inline-block">
            <button className=" bg-yellow-600 text-white outline-none rounded-lg px-3 py-3"
            onClick={() => {
              setColor("yellow");
            }}
          >
              yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
