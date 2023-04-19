import "./App.css";
import Header from "./components/Header";
import LanguageSelect from "./components/LanguageSelect";
import TextArea from "./components/TextArea";
import InputArea from "./components/InputArea";

function App() {
  return (
    <div className="App min-h-screen flex flex-col gap-4  bg-[#BCDDFE]">
      <Header />
      <LanguageSelect />
      <TextArea />
      <InputArea />
    </div>
  );
}

export default App;
