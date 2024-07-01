import { useState } from "react"
import { FindProducts } from "./components/FindProducts"
import { ProductsGrid } from "./components/ProductsGrid";

export const TrackerApp = () => {

  const [price, setPrice] = useState('');

  return (
    <div className="container">
      <h1>TrackerApp</h1>

      <FindProducts onFindProducts={setPrice}/>

      {
        price != '' && (<ProductsGrid maxPrice={price}/>)
      }
    </div>
  )
}
