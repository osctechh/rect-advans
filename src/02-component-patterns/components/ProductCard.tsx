import { createContext } from 'react'

import { useProduct } from '../hooks/useProduct';
import {  InitialValues, onChangeArgs, ProdcutCardHandlers, Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: ( argunment: ProdcutCardHandlers)=> JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

  const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
        = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      maxCount,
      product
    }}>
      <div className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy,
          reset

               })
        }
      </div>
    </Provider>
  )
}
export default ProductCard;

