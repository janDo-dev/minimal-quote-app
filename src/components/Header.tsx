import { FunctionComponent } from "react";

const Header: FunctionComponent<{ changeQuote(): void }> = (props) => {
  return (
    <header className="app-header">
      <h1 className="app-header__headline">Minimal Quote App</h1>
      <button
        className="btn"
        onClick={() => {
          props.changeQuote();
        }}
      >
        Get Quote
      </button>
    </header>
  );
};

export default Header;
