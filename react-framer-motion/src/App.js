import "./App.css";
import Animate1 from "./components/Animate1";
import Drag from "./components/Drag";
import FramerHook from "./components/FramerHook";
import KeyFrame from "./components/KeyFrame";
import Variants from "./components/Variants";

function App() {

 const downloadEmployeeData = () => {
    fetch(
      "https://staging.gapstack.tk/document-manager/storage/f230faa8-1742-4215-9598-dad0fc40d847/25184fd5c12aef486cba49fc3e39f6b3-Purchase_Order_Bulk_Upload.xls"
    ).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.click();
      });
    });
  };
  return (
    <div className="App">
      <h1 className="main_text">Framer motion</h1>
      <button onClick={downloadEmployeeData} >Download</button>

      <Animate1 />
      {/* <Drag /> */}
      {/* <Variants /> */}
      <KeyFrame />
      <FramerHook />
    </div>
  );
}

export default App;
