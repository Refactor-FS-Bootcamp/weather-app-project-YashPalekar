import React from "react";
import Header from "./components/header/header";
import Sider from "./components/sider/sider";
import Content from "./components/content/content"
import "./styles.css";

const App = () => {
   return (
      <>
         <Sider />

         <Header title="My favorite cities" />
         
         <Content />
      </>
   );
}

export default App;