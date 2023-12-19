import {Component, Component2} from "./Component";
import Button from "./Button";
import Header from "./Header";
import button from "./Button";

function App() {
  return (
    <div>
      <Header/>
      <h1>Hello world</h1>
      <Component/>
      <Component2/>
      <Button button={'click me pleas'} />
      <Button button={'disabled '} />
      <Button button={'enabled'} />
    </div>
  );
}
export default App;
