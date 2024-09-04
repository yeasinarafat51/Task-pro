import Application from "./components/Application";
import Banner from "./components/Banner";
import Nabvar from "./components/Nabvar";
import Study from "./components/Study";

function App() {
  return (
    <>
     <div className="mx-4">
     <Nabvar/>
     <Banner/>
     <Application/>
     <Study/>
     </div>
    </>
  );
}

export default App;
