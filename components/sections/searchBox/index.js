import styles from './searchBox.module.css'
import {Input, SelectBox, Button} from '../../elements'
const SearchBox = () => {
  let Categories = [];
  return (
    <div className={styles.container}>
      <span className={styles.header}>جستجو در محصولات دسته بندی</span>
      <div className={styles.searchElements}>
        <Input name="word" placeholder="نام محصول" type="text" className={styles.textInput} />
        <SelectBox className={styles.selectBox} name="category" options={Categories} />
        <Button value="جستجو" type="submit"  />
      </div>
    </div>
  );
};

export default SearchBox;
