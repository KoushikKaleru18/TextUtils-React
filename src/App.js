// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <TextForm heading="Enter your text to Analyse" />
    </>
  );
}

export default App;
