import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
//import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState(() => {
          return {monsters: users};
        })
    );
  }

  onSearchChange = (event) => { 
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });         
}

  render() {
    // console.log("render from AppJs");
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes( searchField);
    });

    return (
      <div className="App">
        <div className="app-title">
          <h1>Monster Pack</h1>
        </div>

        <SearchBox 
        className = "monsters-search-box"
        placeholder = "search monsters"
        onChangeHandler = {onSearchChange} 
        />
        <CardList monsters = {filteredMonsters} /> 
      </div>
    );
  }
} 


export default App;
