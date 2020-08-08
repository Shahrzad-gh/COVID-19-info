import React, { Component } from "react";
import { searchCountry, fetchCountry } from "../Actions/searchActions";
import { connect } from "react-redux";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchCountry(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchCountry(this.props.country);
  };
  render() {
    return <nav className="nav bg-dark text-light ">
    <div className="col-md-10 offset-md-1 rounded-lg p-3">
        <div className="text-center font-weight-bold pb-3 text-warning">COVID19 Info</div>
        <div className="text-center font-weight-bold pb-3">Search for country ...</div>
        <form className="input-group mb-3" onSubmit={this.onSubmit}>
            <input id="search-text" type="text" className="form-control" placeholder="Search ......" aria-label="Recipient's username"
            onChange= {this.onChange}/>
            <div className="input-group-append">
                <button id="search-btn" className="input-group-text" type="submit"><i className="fa fa-search"></i></button>
            </div>
        </form>
    </div>
</nav>
  }
}
const mapStateToProps = (state) => ({
  country: state.country.country,
});
export default connect(mapStateToProps, { searchCountry, fetchCountry })(
  SearchForm
);
