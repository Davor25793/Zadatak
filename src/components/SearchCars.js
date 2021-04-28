
const SearchCars = ({handleInput}) => {
  
  return (  
     <input onChange={handleInput} type="text" placeholder="Find your brand..."/>
  );
}
 
export default SearchCars;