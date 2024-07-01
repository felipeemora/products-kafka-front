import PropTypes from 'prop-types';

import { useFetchProducts } from "../hook/useFetchProducts"
import { Products } from './Products';

export const ProductsGrid = ({maxPrice}) => {

  const {products = [], isLoading } = useFetchProducts(maxPrice);

  return (
    <>  
      <p className='mt-4'>Productos con precio menor o igual a: {maxPrice}</p>
      <hr />
      {
        isLoading && (<h2>Loading...</h2>)
      }

      <Products products={products}/>
    </>
  )
}

ProductsGrid.propTypes = {
  maxPrice: PropTypes.string.isRequired
}
