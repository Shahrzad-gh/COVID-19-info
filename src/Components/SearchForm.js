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
    return <div>
    <div className="col-md-10 offset-md-1 mt-5 border border-secondary rounded-lg p-3 bg-light">
        <div className="text-center font-weight-bold pb-3">Search for country ...</div>
        <form className="input-group mb-3" onSubmit={this.onSubmit}>
            <input id="search-text" type="text" className="form-control" placeholder="Search ......" aria-label="Recipient's username"
            onChange= {this.onChange}/>
            <div className="input-group-append">
                <button id="search-btn" className="input-group-text" type="submit"><i className="fa fa-search"></i></button>
            </div>
        </form>
    </div>
</div>
  }
}
const mapStateToProps = (state) => ({
  country: state.country.country,
});
export default connect(mapStateToProps, { searchCountry, fetchCountry })(
  SearchForm
);
