import { Fragment } from "react";
import { Meals } from "./pages/Meals/Meals/Meals";
import { Header } from "./template/Header/Header";
function App() {
  return (
    <Fragment>
      <Header />
      <Meals/>
    </Fragment>
  );
}

export default App;
