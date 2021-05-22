// ✅ todo import react 
// ✅ todo import the API call
// ✅ todo import component styles 
import React from "react";
import API from "../../utils/api.js"
import Search from "../Search"
import "./style.css";

// ✅ todo set up state 
class Table extends React.Component {

  state = {
    search: "",
    sortOrder: "",
    results: []
  }

  // ✅ todo get the Api call of random users
  componentDidMount() {
    API.ApiSearch()
      .then(res => {
        this.setState({ results: res.data.results })
        console.log(this.state.results)
      }).catch(err => console.log(err))
  }

  // ✅ todo handle the search input 
  handleInputChange = event => {

    if (event.target.name === "search") {
      const searchTerm = event.target.value;
      this.setState({
        search: searchTerm
      })
    }
  }

  // ✅ todo Sort by name 
  sortName = () => {
    const sortNames = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortNames.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortNames })
  }

  
  // ✅ todo render the table 
  render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange}
          search={this.state.search} />

        <div>
        <table className="table">
            <thead>
              <tr>
                <th></th>
                <th><a onClick={this.sortName}><i className="fas fa-sort-circle me-3"></i>Name</a></th>
                <th>Email</th>
                <th>City</th>
                <th>Age</th>
              </tr>
            </thead>

            { this.state.results && this.state.results.map(item =>
                item.name.first.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td ><img src={item.picture.thumbnail} className="avatar" alt="employee"/></td>
                      <td >{item.name.first}</td>
                      <td ><a href="mailto:{item.email}">{item.email}</a></td>
                      <td >{item.location.city}</td>
                      <td>{item.dob.age}</td>  
                    </tr>
                  </tbody>
                  :
                    null
              )}
          </table>
        </div>
      </div>
    )
  }
}

export default Table;