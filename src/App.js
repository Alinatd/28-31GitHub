import { useState } from "react";
import { Button1 } from './Components/Button1/Button1';
import { Button2 } from './Components/Button2/Button2';
import { Button3 } from "./Components/Button3/Button3";


function App() {
  const [age, setAge] = useState("")  

  const renderUser = () => {
    switch (age) {
      case "kid":
        return <Button1 />
      case "teen":
        return <Button2 />
      case "adult":
        return <Button3 />
    }
  }
  return (
    <div className="App">
      <div className="btns-group">
         <button className="btnage" onClick={()=> setAge("kid")}>-18</button>
         <button className="btnage" onClick={()=> setAge("teen")}>18-24</button>
         <button className="btnage" onClick={()=> setAge("adult")}>24+</button>
      </div>

      <div className="container">
        {renderUser()}
      </div>
    </div>
  );
}

export default App;