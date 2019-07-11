import React from 'react';
import PropTypes from 'prop-types';

function getNumber(headers, index) {
  const page = +headers['x-pagination-page'];
  const limit = +headers['x-pagination-limit'];
  const pages = +headers['x-pagination-page-count'];
  if(!page || !limit || !pages){
    return '';
  } else {
    return ((page-1)*limit+(index+1));
  }
}

function Table(props){
  const { headers, data, images } = props;
  return (
    <table className="form-table-width main-table">
      <thead>
        <tr>
          <th>Number</th>
          <th>Poster</th>
          <th>Show name</th>
          <th>Watchers</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {data.map((x, i) => {
          return (
            <tr key={x.show.ids.trakt}>
              <td>{getNumber(headers, i)}</td>
              <td><img src={images[i]} alt={`${x.show.title} poster`} /></td>
              <td>{x.show.title}</td>
              <td>{x.watchers}</td>
              <td>{x.show.year}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  headers: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Table;