function CharBar(prop) {
  return (
    <div className="screen" onClick={prop.callback} key={prop.id}>
      {prop.firstName}
    </div>
  );
}

export default CharBar;
