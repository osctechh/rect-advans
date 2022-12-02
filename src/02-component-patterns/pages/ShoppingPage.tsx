import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"

import{products} from '../data/products'
import css from '../styles/styles.module.css'

const product = products[0]
const ShoppingPage = () => {


  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
        
            <ProductCard
              key={product.id}
              product={product}
              initialValues={{
                count:4,
                maxCount:10
              }}
            >

              {
                ( { reset, count, isMaxCountReached, maxCount, increaseBy }) => (

                  <>
                      <ProductImage />
                      <ProductTitle />
                      <ProductButtons />
                  
                  </>
                )
              }
              </ProductCard>
              
    </div>
  )
}

export default ShoppingPage;