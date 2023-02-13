import { Header } from "./template/Header/Header";
import { Fragment } from "react";
import { Meals } from "./Meals/Meals";
import { Cart } from "./Cart/Cart";
import { useState } from "react";
function App() {
  const [isShow, setIsShow] = useState(false);
  const onShowModal = e => {
    setIsShow(true)
  }
  const onClosed = e => {
    setIsShow(false)
  }
  return (
    <Fragment>
      {isShow && <Cart onClosed={onClosed}/>}
      <Header onShow={onShowModal}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
