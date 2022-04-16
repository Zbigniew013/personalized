import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    const clickedSize = props.sizes.find(element => element.name === currentSize)
    return props.basePrice + clickedSize.additionalPrice
  }, [currentSize, props.basePrice, props.sizes]);


  return (

    <article className={styles.product}>
      <ProductImage  
      title={props.title} name={props.name} currentColor={currentColor}  
      />

      <div>

        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        
        <ProductForm
            title={props.title}
            sizes={props.sizes}
            colors={props.colors}
            currentSize={currentSize}
            setCurrentSize={setCurrentSize}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            getPrice={getPrice}
          />
      </div>
    </article>
  )
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
}

export default Product;