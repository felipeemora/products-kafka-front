import { useState } from "react"
import PropTypes from 'prop-types';

export const FindProducts = ({onFindProducts}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;
    setInputValue('');
    onFindProducts(newInputValue);
  }

  return (
    <div className="row justify-content-md-center">
      <form onSubmit={ onSubmit } aria-label="form" className="col-6">
        <label className="form-label" htmlFor="maxprice">Máximo precio de productos a buscar</label>
        <input
          id="maxprice"
          type="text"
          placeholder="2"
          value={ inputValue }
          onChange={ onInputChange}
          className="form-control"
          />
      </form>
    </div>
  )
}

FindProducts.propTypes = {
  onFindProducts: PropTypes.func.isRequired
}
