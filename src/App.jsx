import Application from "./components/Application";
import Banner from "./components/Banner";
import Nabvar from "./components/Nabvar";

function App() {
  return (
    <>
     <div className="mx-4">
     <Nabvar/>
     <Banner/>
     <Application/>
     </div>
    </>
  );
}

export default App;
