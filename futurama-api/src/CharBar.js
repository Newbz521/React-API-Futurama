function CharBar(prop) {
  return (
    <div className="screen" key={prop.id}>
      {prop.firstName}
    </div>
  );
}

export default CharBar;
