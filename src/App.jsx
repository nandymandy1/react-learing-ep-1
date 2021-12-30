import Photos from "./components/Photos";
import FirstComponent from "./components/FirstComponent";
import BasicHOFC from "./components/BasicHigherOrderComponent";

const App = () => (
  <div className="App container">
    <FirstComponent />
    <BasicHOFC>
      <h1>Hello Bund</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
        necessitatibus fugit veniam illum consequatur hic, maxime ad vel aliquid
        harum recusandae, cupiditate sunt esse, earum impedit. Qui ipsa placeat
        inventore.
      </p>
      <img src="https://avatars.githubusercontent.com/u/29309671?v=4" />
    </BasicHOFC>
    <Photos />
  </div>
);

export default App;
