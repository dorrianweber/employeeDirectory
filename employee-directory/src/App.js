import './App.css';
import React from "react";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import ResultList from "./components/ResultList";

class App extends React.Component {
  state = {
    search: "",
    employeeList: [],
    filteredEmployees: []
  };

  componentDidMount() {
    this.searchRandomUser();
  };

  searchRandomUser = () => {
    API.search()
      .then(res => {
        console.log(res);
        this.setState({ employeeList: res.data.results })
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
      return employee.name.first.includes(this.state.search);
    });
    this.setState({
      filteredEmployees: filteredEmployees
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
          />
        </div>

        {/* <ResultList results={this.state.employeeList} */}
        {/* <ResultList results={this.state.filteredEmployees} */}
        <div>
          <ResultList results={toDisplay} />
        </div>
      </>
    );
  };
};

export default App;
