import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import LanguageSelect from "./components/LanguageSelect";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="App min-h-screen flex flex-col gap-4 bg-[#BCDDFE]">
      <Header />
      <LanguageSelect />
      <TextArea />
    </div>
  );
}

export default App;
