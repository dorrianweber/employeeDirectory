import './App.css';
import React from "react";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import ResultList from "./components/ResultList";

class App extends React.Component {
  state = {
    search: "",
    employeeList: [],
    filteredEmployees: [],
    sortedSurname: [],
    maleEmployees: [],
    femaleEmployees: []
  };

  componentDidMount() {
    this.searchUser();
  };

  searchUser = () => {
    API.search()
      .then(res => {
        console.log(res);
        this.setState({
          employeeList: res.data.results,
          filteredEmployees: res.data.results
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value.trim();
    this.setState({
      search: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const filteredEmployees = this.state.employeeList.filter((employee) => {
      return employee.name.last.includes(this.state.search);
    });
    this.setState({
      filteredEmployees: filteredEmployees
    });
  };

  handleSortSurname = event => {
    event.preventDefault();
    console.log(this.state.employeeList);
    const sortedSurname = this.state.employeeList.sort((a, b) => {
      if (a.name.last > b.name.last) {
        return 1;
      } else if (b.name.last > a.name.last) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      sortedSurname: sortedSurname
    });
  };

  handleFilterMale = event => {
    event.preventDefault();
    const maleEmployees = this.state.employeeList.filter((employee) => {
      return employee.gender === "male";
    });
    this.setState({
      filteredEmployees: maleEmployees
    });
  };

  handleFilterFemale = event => {
    event.preventDefault();
    const femaleEmployees = this.state.employeeList.filter((employee) => {
      return employee.gender === "female";
    });
    this.setState({
      filteredEmployees: femaleEmployees
    });
  };

  render() {
    let toDisplay;

    if (this.state.filteredEmployees) {
      toDisplay = this.state.filteredEmployees;
    } else {
      toDisplay = this.state.employeeList;
    }

    return (
      <>
        <div className="App" >
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleSortSurname={this.handleSortSurname}
            handleFilterMale={this.handleFilterMale}
            handleFilterFemale={this.handleFilterFemale}
          />
        </div>

        <div>
          <ResultList results={toDisplay} />
        </div>
      </>
    );
  };
};

export default App;
