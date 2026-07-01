const ErrorMessage = ({ items }) => {
  return (
    <>{items.length === 0 ? <h3>No item found</h3> : <h3>Items found</h3>}</>
  );
};

export default ErrorMessage;
