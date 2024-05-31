const Item = (props) => {
  const { name, checked } = props;

  const renderCheckItem = () => {
    return checked && <span>✔</span>;
  };
  return (
    <>
      <li>
        {name}
        {renderCheckItem()}
      </li>
    </>
  );
};

export default Item;
