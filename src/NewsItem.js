import Item from "./componets/day3/Item";

const NewsItem = () => {
  return (
    <>
      <h1>Sally Ride's Packing List</h1>

      <Item name="Space suit" checked={true}></Item>
      <Item name="Helmet with a golden leaf" checked={true}></Item>
      <Item name="Photo of Tam" checked={false}></Item>
    </>
  );
};

export default NewsItem;
