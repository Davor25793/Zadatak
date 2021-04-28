import {useState} from 'react'
import CarList from './components/CarList'
import SearchCars from './components/SearchCars'
import Pagination from './components/Pagination'
import SortCars from './components/SortCars'
import Navbar from './components/Navbar'


function App() {

  //State
  const [cars, setCars] = useState([
    {id: 12, model: 'Kuga', brand: 'Ford', price: '22 000 €', img: '/images/fordkuga.jpg'},
    {id: 14, model: 'CR-V', brand: 'Honda', price: '38 000 €', img: '/images/hondacrv.jpg'},
    {id: 16, model: 'Ceed', brand: 'Kia', price: '11 000 €', img: '/images/kiaceed.jpg'},
    {id: 2, model: 'Q7', brand: 'Audi', price: '50 000 €', img: '/images/audiq7.jpg'},
    {id: 5, model: '3', brand: 'Mazda', price: '15 000 €', img: '/images/mazda3.jpg'},
    {id: 1, model: 'A4', brand: 'Audi', price: '20 000 €',  img: '/images/audia4.jpg'},
    {id: 6, model: '6', brand: 'Mazda', price: '18 000 €', img: '/images/mazda6.jpg'},
    {id: 3, model: 'i8', brand: 'Bmw', price: '90 000 €', img: '/images/bmwi8.jpg'},
    {id: 8, model: 'C 200 Coupe', brand: 'Mercedes', price: '34 000 €', img: '/images/mercedescoupe.jpg'},
    {id: 9, model: 'RAV4', brand: 'Toyota', price: '40 000 €', img: '/images/toyotarav4.jpg'},
    {id: 10, model: 'Supra', brand: 'Toyota', price: '92 000 €', img: '/images/toyotasupra.jpeg'},
    {id: 11, model: 'Explorer', brand: 'Ford', price: '60 000 €', img: '/images/fordexplorer.jpg'},
    {id: 7, model: 'CLA', brand: 'Mercedes', price: '26 000 €', img: '/images/mercedescla.jpg'},
    {id: 4, model: 'M4', brand: 'Bmw', price: '35 000 €', img: '/images/bmwm4.jpg'},
    {id: 13, model: 'Civic', brand: 'Honda', price: '29 000 €', img: '/images/hondacivic.jpg'},
    {id: 15, model: 'Sportage', brand: 'Kia', price: '12 000 €', img: '/images/kiasportage.jpg'}
  ])
  

  //Use State
  const [searchCar, setSearchCar] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [newCars, setNewCars] = useState([])
  const [sortByPrice, setSortByPrice] = useState([])
  

  //Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const carsSort = cars.slice(indexOfFirstPost, indexOfLastPost).filter(car => car.brand.toLowerCase().includes(searchCar.toLowerCase()))
  
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Handle input (filter by brand)
  const handleInput = (e) => {
    setSearchCar(e.target.value)
  }

  //Sorting
  const handleSort = (e) => {
   if(e.target.value === 'name'){
    const newCars = cars.sort((a, b) => {
      if(a.brand.toLowerCase() < b.brand.toLowerCase()){
        return -1;
      }else if(a.brand.toLowerCase() > b.brand.toLowerCase()) {
        return 1;
      }else {
        return 0
      }
    })
    setNewCars({...cars, newCars})
    console.log(newCars)
   }else if(e.target.value === 'price'){
     const priceCars = cars.sort((a, b) => {
      if(a.price < b.price) {
        return -1
      } else if(a.price > b.price) {
        return 1
      }else{
        return 0
      }
    })
    setSortByPrice({...cars, priceCars})
    console.log(priceCars)
   }
  }


  return (
    <div className="App">
      <Navbar />
      <div className="input-container">
        <SearchCars handleInput={handleInput}/>
        <SortCars handleSort={handleSort}/>
      </div>
      <CarList carsSort={carsSort}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={cars.length} paginate={paginate}/>
    </div>
  );
}

export default App;
