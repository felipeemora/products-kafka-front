import PropTypes from 'prop-types';

export const Products = ({ products }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Shop</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, key) => {
          return (
            <tr key={key}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.shop}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
}
