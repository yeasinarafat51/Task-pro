import Application from "./components/Application";
import Banner from "./components/Banner";
import Career from "./components/Career";
import Education from "./components/Education";
import Glance from "./components/Glance";
import Nabvar from "./components/Nabvar";
import Popular from "./components/Popular";
import Student from "./components/Student";
import Study from "./components/Study";
import Speack from "./components/Speack";
import Faq from "./components/Faq";

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
     <Glance/>
     <Student/>
     <Speack/>
     <Faq/>
     </div>
    </>
  );
}

export default App;
