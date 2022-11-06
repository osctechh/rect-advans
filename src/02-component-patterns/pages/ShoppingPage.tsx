import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart";

import '../styles/custom-styles.css';


const ShoppingPage = () => {

 const {products, shoppingCart , onProductCountChange } = useShoppingCart();
  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              className="bg-dark text-white"
              product={product}
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle
                className="text-bold" />
              <ProductButtons
                className="custom-buttons " />
            </ProductCard>
          ))
        }
        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, product]) => (

              <ProductCard
                key={key}
                className="bg-dark text-white"
                product={product}
                style={{ width: '100px' }}
                onChange={onProductCountChange}
                value={product.count}
              >
                <ProductImage className="custom-image" />
                <ProductButtons
                  className="custom-buttons "
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
              </ProductCard>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ShoppingPage;