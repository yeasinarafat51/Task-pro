import Application from "./components/Application";
import Banner from "./components/Banner";
import Career from "./components/Career";
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
     <Career/>
     </div>
    </>
  );
}

export default App;
