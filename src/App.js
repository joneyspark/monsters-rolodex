import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/card-list/search-box.component';
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
    .catch(error => console.log(error))
  }

  render(){
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <input type="search" placeholder="Search monsters.." 
        onChange={e => this.setState({ searchField: e.target.value }) } /> */}
        <SearchBox 
        placeholder="Search Monster"
        handleChange={e => this.setState({ searchField: e.target.value }) }
         />
        <CardList monster = {filterMonsters}></CardList>
      </div>
    )
  }
}

export default App;
