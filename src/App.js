import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        const newUsers = [
          ...users,
          {
            id: "Aq23q233232",
            name: "Stanislav Milkovski",
            email: "StanislavMilkovski@GooGoo.com"
          }
        ];
        this.setState({
          monsters: newUsers
        });
      })
      .catch(() => {
        const fetchError = new Error("There is something wrong");
        throw fetchError.message;
      });
  }
  filterMonstersHeandler = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    console.log(searchField);
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters..."
          handleChange={e => this.filterMonstersHeandler(e)}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
