import {Component, Component2} from "./Component";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";
function App({content}) {
  return (
    <div>
      <Header/>
      <h1>Hello world</h1>
      <Component/>
      <Component2/>
      <Button button={'click me pleas'} />
      <Button button={'disabled '} />
      <Button button={'enabled'} />
        <p>{content}</p>
        <Footer/>
    </div>
  );
}
export default App;
