import { FunctionComponent } from "react";

const MainContent: FunctionComponent<{
  quote: {
    quoteText: string;
    quoteAuthor: string;
  };
}> = (props) => {
  return (
    <main className="main-content">
      <blockquote className="quote">
        <p className="quote-text">{props.quote.quoteText}</p>
      </blockquote>
      <p className="quote-author">– {props.quote.quoteAuthor}</p>
    </main>
  );
};

export default MainContent;
