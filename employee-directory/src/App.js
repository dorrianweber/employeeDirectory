import './App.css';
import React from "react";
import API from "../utils/API";

class App extends React.Component {
  state = {
    search: "",
    employeeList: []
  };

  componentDidMount() {
    this.searchRandomUser();
  };

  searchRandomUser = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App" >

      </div>
    );
  };
};

export default App;
