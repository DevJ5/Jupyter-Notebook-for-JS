import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  // handleInputChange or onInputChange is common.
  onInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <div className="searchbar">
        <form action="" onSubmit={this.props.onSubmit}>
          <label htmlFor="">Image search</label>
          <input
            type="text"
            className="searchbar__text-input"
            value={this.state.searchValue}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
