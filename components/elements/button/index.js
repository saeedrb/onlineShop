import classNames from 'classnames';
import styles from './button.module.css';

const Button = ({value, type, disable = false ,  ...prop}) => {
  const style = classNames({
    [styles['button']]: true,
    [styles['active']]: !disable,
    [styles['disable']]: disable,
    [styles['background-red']]: !prop.exists,
    [styles['background-green']]: prop.exists   
  });
  return (
    <button type={type} className={style} {...prop}>{value}</button>
  )
}

export default Button