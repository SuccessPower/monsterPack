
import {useState, useEffect} from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); 
   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

  }, [monsters, searchField]);

  const onSearchChange = (event) => { 
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);      
  }


  

  console.log(filteredMonsters)

  return(
    <div className="App">
      <h1 className="app-title">Monster Pack</h1>

    <SearchBox 
    className = "monsters-search-box"
    placeholder = "search monsters"
    onChangeHandler = {onSearchChange} 
    />
    <CardList monsters = {filteredMonsters} />
  </div>
  )
}

// class App extends Component{
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//       fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//           return {monsters: users};
//         })
//     );
//   }

//   onSearchChange = (event) => { 
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });         
// }

//   render() {
//     // console.log("render from AppJs");
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//         return monster.name.toLocaleLowerCase().includes( searchField);
//     });

//     return (
//       <div className="App">
//         <div className="app-title">
//           <h1>Monster Pack</h1>
//         </div>

//         <SearchBox 
//         className = "monsters-search-box"
//         placeholder = "search monsters"
//         onChangeHandler = {onSearchChange} 
//         />
//         <CardList monsters = {filteredMonsters} /> 
//       </div>
//     );
//   }
// } 


export default App;
