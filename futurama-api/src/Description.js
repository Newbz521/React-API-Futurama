const Bios = (props) => {
  return (
    <div className="bios">
      {props.firstName}
      {props.lastName}
      <br />
      {props.species}
      <br />
      {props.homePlanet}
      <br />
      {props.occupation}
    </div>
  );
};
export default Bios;
