import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { DeckList, SearchBar, SearchResults } from "./components";

import { fetchCards } from "./api";

const App = () => {
  const [results, setResults] = useState([]);
  const [deck, setDeck] = useState([]);
  const addCardToDeck = ({ id, name }) => {
    const nextDeck = [...deck];
    const index = nextDeck.findIndex((card) => card.id === id);
    if (index > -1) {
      nextDeck[index].count += 1;
    } else {
      nextDeck.push({
        id,
        name,
        count: 1,
      });
    }
    setDeck(nextDeck);
  };

  const removeCardFromDeck = ({ id }) => {
    const nextDeck = [...deck];
    const index = nextDeck.findIndex((card) => card.id === id);

    if (index === -1) {
      // don't do anything if we're trying to remove a card not in the deck
      return;
    }

    if (nextDeck[index].count === 1) {
      // remove the card altogether
      nextDeck.splice(index, 1);
    } else {
      // decrement the count
      nextDeck[index].count -= 1;
    }

    setDeck(nextDeck);
  };
  return (
    <div id="app">
      <SearchBar setResults={ setResults } />
      <SearchResults 
        results={ results }
        addCardToDeck={ addCardToDeck }
        removeCardFromDeck={ removeCardFromDeck } />
      <DeckList deck={ deck } />
    </div>
  );
};

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [complexState, setComplexState] = useState({
    foo: 0,
    bar: {
      baz: 0,
    },
  });

  return (
    <>
      <h3> Current count: {count}</h3>
      <h3> User logged in: {currentUser ? "true" : "false"}</h3>
      <h3>
        Complex state: foo - {complexState.foo}, bar.baz: {complexState.bar.baz}
      </h3>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
