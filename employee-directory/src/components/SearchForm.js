import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee by last name"
                    id="search"
                />
                <button onClick={props.handleFormSubmit} className="btn btn-success mt-3">
                    Search
                </button> <br />
                <button onClick={props.handleSortSurname} className="btn btn-warning mt-3">
                    Sort alphabetically by last name
                </button> <br />
                <button onClick={props.handleFilterMale} className="btn btn-primary mt-3">
                    Kings only
                </button>
                <button onClick={props.handleFilterFemale} className="btn btn-danger mt-3">
                    Queens only
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
