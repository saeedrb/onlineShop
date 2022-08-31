import styles from "./tabs.module.css";
import {useState} from "react";

const Tabs = ({ tabsData }) => {
  const [content, setContent] = useState(tabsData[0].content);
  const handleClick = (contentIndex) => {
    console.log(tabsData[contentIndex].content)
      setContent(tabsData[contentIndex].content);
    }
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabsData.map((tab, counter) => {
          return <span onClick={() => handleClick(counter)}>{tab.title}</span>;
        })}
      </div>
      <div className={styles.content}>
            {content}
      </div>
    </div>
  );
};

export default Tabs;
