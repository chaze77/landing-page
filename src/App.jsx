import "./App.css";
import Benifits from "./components/Benifits/Benifits";
import Career from "./components/Career/Career";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBanner from "./components/MainBanner/MainBanner";
import Questions from "./components/Questions/Questions";
import Students from "./components/Students/Students";

function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <Career />
      <Benifits />
      <Courses />
      <Students />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
