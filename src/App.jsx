import Application from "./components/Application";
import Banner from "./components/Banner";
import Career from "./components/Career";
import Education from "./components/Education";
import Nabvar from "./components/Nabvar";
import Popular from "./components/Popular";
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
     <Popular/>
     <Education/>
     </div>
    </>
  );
}

export default App;
