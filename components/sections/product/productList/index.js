import styles from './productList.module.css'
import ProductCard from '../productCard'
const ProductList = () => {
  return (
    <div className={styles.container}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default ProductList