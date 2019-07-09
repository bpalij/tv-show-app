import React, { Component } from 'react';

const yearOptions = [''];
for(let i=((new Date()).getFullYear()); i>=1800; i--){
  yearOptions.push(`${i}`);
};
const sortOptions = ['Trending', 'Popular', 'Most played', 'Most watched', 'Most collected', 'Most anticipated'];

class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      query: '',
      year: '',
      sort: 'Trending',
    };
  }
  render(){
    const { query, year, sort } = this.state;
    return (
      <form className="form-table-width main-form">
        <div className="form-flex-line">
          <div className="form-item">
            <label htmlFor="query-input">Query</label>
            <input type="text" id="query-input" value={query} onChange={(e) => {this.setState({query: e.target.value})}}/>
          </div>
          <div className="form-item">
            <label htmlFor="year-select">Year</label>
            <select id="year-select" value={year} onChange={(e) => {this.setState({year: e.target.value})}}>
              {yearOptions.map((x)=>(<option value={x} key={x}>{x}</option>))}
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="sort-select">Sort</label>
            <select id="sort-select" value={sort} onChange={(e) => {this.setState({sort: e.target.value})}}>
              {sortOptions.map((x) => (<option key={x} value={x}>{x}</option>))}
            </select>
          </div>
        </div>
        <div className="form-flex-right-button">
          <div className="form-item">
            <button type="button">Change</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form;