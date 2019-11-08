export default id => ({ settings: { starred } }) => ({
  starred: starred.includes(id),
});
