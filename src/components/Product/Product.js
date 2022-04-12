import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
    const clickedSize = props.sizes.find(element => element.name === currentSize)
    return props.basePrice + clickedSize.additionalPrice
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('wyslane');

    // console.log('Summary')
    // console.log('==============')
    // console.log('Name: ' + props.title)
    // console.log('Price: ' + getPrice())
    // console.log('Size: ' + currentSize)
    // console.log('Color: ' + currentColor)
  }

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
                <li key={size.name}>
                  <button type="button" onClick={ () => setCurrentSize(size.name)}
                  className={clsx(currentSize === size.name && styles.active)}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color =>
              <li key={color}>
                <button type="button" onClick={ () => setCurrentColor(color)} 
                className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} 
                />
              </li>
            )}
            </ul>
          </div>

          <Button className={styles.button} type='submit' onSubmit={handleSubmit}>
            <span className="fa fa-shopping-cart" />
          </Button>

        </form>
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