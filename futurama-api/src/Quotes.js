const Quotes = (props) => {
  return (
    <div className="quotes">
      <div className="quoteHeader">QUOTES</div>
      <div className="sayings">{props.sayings}</div>
    </div>
  );
};
export default Quotes;
