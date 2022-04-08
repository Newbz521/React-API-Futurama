const Display = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.images} />
      </div>
    </div>
  );
};
export default Display;
