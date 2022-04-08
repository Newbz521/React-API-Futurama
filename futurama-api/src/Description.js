const Bios = (props) => {
  return (
    <div className="bios">
      <div className="cardHeader">IDENTIFICATION</div>
      <div className="nameBar">
        Name: {props.firstName}
        <br />
        Last Name: {props.lastName}
      </div>
      <div className="bioBar">
        Species: {props.species}
        <br />
        Planet: {props.homePlanet}
        <br />
        Occupation: {props.occupation}
      </div>
    </div>
  );
};
export default Bios;
