import React, { Component } from 'react';

const yearOptions = [''];
for(let i=((new Date()).getFullYear()); i>=1800; i--){
  yearOptions.push(`${i}`);
};
const sortOptions = [
  {value:'trending', text:'Trending'}, 
  {value:'popular', text:'Popular'}, 
  {value:'played/weekly', text:'Most played (weekly)'},
  {value:'played/monthly', text:'Most played (monthly)'},
  {value:'played/yearly', text:'Most played (yearly)'},
  {value:'played/all', text:'Most played (all)'},
  {value:'watched/weekly', text:'Most watched (weekly)'},
  {value:'watched/monthly', text:'Most watched (monthly)'},
  {value:'watched/yearly', text:'Most watched (yearly)'},
  {value:'watched/all', text:'Most watched (all)'},
  {value:'collected/weekly', text:'Most collected (weekly)'},
  {value:'collected/monthly', text:'Most collected (monthly)'},
  {value:'collected/yearly', text:'Most collected (yearly)'},
  {value:'collected/all', text:'Most collected (all)'},
  {value:'anticipated', text:'Most anticipated'},
];

class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      query: '',
      year: '',
      sort: 'trending',
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
              {sortOptions.map((x) => (<option key={x.value} value={x.value}>{x.text}</option>))}
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