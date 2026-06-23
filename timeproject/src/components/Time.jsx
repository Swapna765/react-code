let Time = () => {
  let time = new Date();

  return (
    <div>
      <h2 className="lead">Current Time : {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Time;
