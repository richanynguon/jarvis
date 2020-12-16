import React, { useEffect, useState } from "react";
import "./App.css";
import { Widget } from "./components/Widget";
import { WidgetContext } from "./modules/widgetContext";



function App() {
  const [userState, setUserState] = useState({
    onboardingComplete: false,
    onboardingProgress:0,
    projects: {},
  })



  return (
    <WidgetContext.Provider value={{userState, setUserState}}>
      <div className="appcontainer">
        <Widget />
      </div>
    </WidgetContext.Provider>
  );
}

export default App;
