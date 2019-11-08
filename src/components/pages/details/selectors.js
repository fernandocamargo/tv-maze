export default id => ({ shows: { items } }) =>
  items.find(item => String(item.id) === String(id));
