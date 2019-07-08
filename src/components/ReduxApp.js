import React from 'react';
import PropTypes from 'prop-types';
import { startLoadData, loadedData, changeParams } from '../redux/actions';
import { connect } from 'react-redux';
import './ReduxApp.css';

function ReduxApp(props){
  return (<></>);
}

ReduxApp.propTypes = {
  startLoadData: PropTypes.func.isRequired,
  loadedData: PropTypes.func.isRequired,
  changeParams: PropTypes.func.isRequired,
  disableInput: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
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