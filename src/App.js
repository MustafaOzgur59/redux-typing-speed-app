import "./App.css";
import Header from "./components/Header";
import LanguageSelect from "./components/LanguageSelect";
import TextArea from "./components/TextArea";
import InputArea from "./components/InputArea";
import Result from "./components/Result";

function App() {
  return (
    <div className="App min-h-screen flex flex-col gap-4  bg-[#BCDDFE]">
      <Header />
      <LanguageSelect />
      <TextArea />
      <InputArea />
      <Result />
    </div>
  );
}

export default App;
