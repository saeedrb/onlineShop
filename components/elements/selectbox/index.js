import styles from "./selectBox.module.css";

const SelectBox = ({ name, options, label }) => {
  console.log(options)
  return (
    <label> {label}
      <select name={name} className={styles.select}>
        {options.map(option => {
         return <option value={option}>{option}</option>
        })}
      </select>
    </label>
  );
};

export default SelectBox;
