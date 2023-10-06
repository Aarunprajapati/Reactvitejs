import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword]=useState("");
  const passwordref = useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="<?>@#%&*(){}~!";
    for (let i = 1; i < length-1; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char);
      setPassword(pass)
    }
  },[length,numberAllowed,charAllowed,setPassword]);

  
  const passwordCopyToClip = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-2xl text-center my-3">Password generator</h1>
        <div className="flex  shadow  rounded-lg overflow-hidden mb-4 ">
          <input type="text" 
          className="outline-none w-full py-1 px-3" 
          value={password}
          placeholder="password"
          ref={passwordref}
          readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={passwordCopyToClip}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            className="cursor-pointer"
            value={length}
            min={0}
            max={100}
            onChange={(e)=>setLength(e.target.value)}
             />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked = {numberAllowed}
              onChange={()=>setNumberAllowed((prev)=> !prev)} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked = {numberAllowed}
              onChange={()=>setCharAllowed((prev)=> !prev)} 
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
