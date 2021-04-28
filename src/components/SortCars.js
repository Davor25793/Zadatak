
const SortCars = ({handleSort}) => {
  
  return ( 
    <select defaultValue="Sort" onChange={handleSort}>
      <option value="sort">Sort</option>
      <option value="name">By name (A-z)</option>
      <option value="price">By price (From lowest)</option>
    </select>
   );
}
 
export default SortCars;