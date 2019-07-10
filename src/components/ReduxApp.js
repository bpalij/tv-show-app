import React, { Component } from 'react';
import headersToObj from '../misc/headersToObj';
import PropTypes from 'prop-types';
import { startLoadData, loadedData, changeParams } from '../redux/actions';
import { connect } from 'react-redux';
import './ReduxApp.css';
import Form from './Form';
import Table from './Table';

class ReduxApp extends Component {
  componentDidMount() {
    const { loadedData } = this.props;
    let headers;
    fetch('https://api.trakt.tv/shows/trending',{
      headers:{
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': `${process.env.REACT_APP_TRAKT_CLIENT_ID}`
      }
    })
      .then((res) => {
        if (res.ok) {
          headers = headersToObj(res.headers);
          return res.json();
        } else {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
      })
      .then((data) => {loadedData(data, headers);})
      .catch((e) => {alert(`Error '${e}', try to reload page`)});
  }
  render() {
    const { headers, data } = this.props;
    return (
      <div className="flexbox-center">
        <Form />
        <Table headers={headers} data={data} />
      </div>
    )
  }
}

ReduxApp.propTypes = {
  startLoadData: PropTypes.func.isRequired,
  loadedData: PropTypes.func.isRequired,
  changeParams: PropTypes.func.isRequired,
  disableInput: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.object.isRequired,
  paginator: PropTypes.shape({
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    disableFirst: PropTypes.bool.isRequired,
    disableLast: PropTypes.bool.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => {
  const { disableInput, data, headers, paginator } = state;
  return { disableInput, data, headers, paginator };
}

const mapDispatchToProps = {
  startLoadData,
  loadedData,
  changeParams,  
} 

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);