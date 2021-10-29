import "./App.css";
import { useState, useEffect, FunctionComponent } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App: FunctionComponent = () => {
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: "",
  });

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote(): void {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote({
          quoteText: data.data[0].quoteText,
          quoteAuthor: data.data[0].quoteAuthor,
        });
      });
  }

  return (
    <div className="app">
      <Header
        changeQuote={() => {
          getQuote();
        }}
      />
      <MainContent quote={quote} />
    </div>
  );
};

export default App;
