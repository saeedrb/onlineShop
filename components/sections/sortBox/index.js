import { SelectBox } from '../../elements'
import styles from './sortBox.module.css'

const SortBox = () => {
    let sortOption = ["جدیدترین", "پربازدیدترین", "پرفروشترین", "ارزان ترین", "گرانترین"];
    let productCountToShow = [20, 40, 100];

  return (
    <div className={styles.container}>
        <SelectBox name="sort" id="sort" label="مرتب سازی: " options={sortOption} />
        <SelectBox name="sort" id="sort" label="تعداد:‌ " options={productCountToShow} />
    </div>
  )
}

export default SortBox