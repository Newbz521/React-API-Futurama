const Quotes = (props) => {
  return (
    <div className="quotes">
      {props.firstName}
      {props.lastName}
      <br />
      {props.sayings}
      <br />
      {props.species}
      <br />
      {props.homePlanet}
      <br />
      {props.occupation}
    </div>
  );
};
export default Quotes;
