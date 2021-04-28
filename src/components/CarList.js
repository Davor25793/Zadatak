const CarList = ({carsSort}) => {
  return ( 
    <div className="car-container">
      {carsSort.map(car => (
        <div className="car-item" key={car.id}>
          <img src={car.img} alt=""/>
          <div className="details">
            <h3>Name: {car.model}</h3>
            <h2>Brand: {car.brand}</h2>
            <p>Price: {car.price}</p>
          </div>
        </div>
      ))}
    </div>
   );
}
 
export default CarList;