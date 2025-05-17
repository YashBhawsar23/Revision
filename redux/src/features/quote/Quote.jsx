import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "./quoteSlice";

const Quote = () => {
  const { quote, author, loading, error } = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote()); // Load on first mount
  }, [dispatch]);

  return (
    <div>
      <h2>Random Quote</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <blockquote>
          <p>"{quote}"</p>
          <footer>— {author}</footer>
        </blockquote>
      )}

      <button onClick={() => dispatch(fetchQuote())}>New Quote</button>
    </div>
  );
};

export default Quote;
