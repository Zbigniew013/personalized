import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';

const ProductForm = ({
  title,
  sizes,
  colors,
  currentColor,
  setCurrentColor,
  currentSize,
  setCurrentSize,
  getPrice,
}) => {

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Summary')
    console.log('==============')
    console.log('Name: ' + title)
    console.log('Price: ' + getPrice())
    console.log('Size: ' + currentSize)
    console.log('Color: ' + currentColor)
  }

  return (
    <form  type='submit' onSubmit={handleSubmit}> 
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>

  )
};

export default ProductForm;