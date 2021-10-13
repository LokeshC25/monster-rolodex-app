import logo from './logo.svg';
import './App.css';
import React from 'react';
import {CardList} from './components/card-list/cardlist-component';
import {SearchComp} from './components/card-list/card/searchcomp';

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }


componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}));
}

 handlechange = (e) => {

  this.setState({searchfield:e.target.value});
}

  render () {

    const { monsters , searchfield} = this.state;

    const filtermonster = monsters.filter((mon) => mon.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()));
    console.log('filter data',filtermonster);
    return (
      <div className='App'>
        <h1 className='head'>Monster Rolodex</h1>
      <SearchComp type='text' placeholder='Search Monsters' handleclick={this.handlechange}/>
      <CardList monster={filtermonster}/>
      </div>
    )
  }

}

export default App;
