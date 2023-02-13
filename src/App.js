import { Fragment } from "react";
import { Meals } from "./pages/Meals/Meals/Meals";
import { Header } from "./template/Header/Header";
import { Cart } from "./pages/Cart/Cart";

import { useState } from "react";
function App() {
  const [isShow, setIsShow]= useState(false);
  
  const showCartHandler = () => {
    setIsShow(true)
  }

  const hideCartHandler = () => {
    setIsShow(false)
  }
  
  return (
    <Fragment>
      {isShow && <Cart  onHideCart={hideCartHandler}/>}
      <Header 
        onShowCart={showCartHandler}
       />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
