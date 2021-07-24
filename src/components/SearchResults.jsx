import React from "react";

import "./SearchResults.css";

import Card from "./Card";

const SearchResults = ({ results, addCardToDeck, removeCardFromDeck }) => {
  return (
    <div id="results">
      <h3>Here's what we found: ({results.length}) results):</h3>
      <div className="CardList">
        {results.map((result) => (
          <Card
            key={result.id}
            addCardToDeck={addCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
            {...result}
          />
        ))}
      </div>
    </div>
  );
};

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>
        {title} has happened {count} time(s).
      </h3>
      <button onClick={handleClick}>Do {title} another time.</button>
    </div>
  );
};

export default SearchResults;
