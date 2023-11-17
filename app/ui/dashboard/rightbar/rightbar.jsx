import Image from 'next/image';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled } from 'react-icons/md';

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" fill alt="" className={styles.img} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Hello world</span>
          <h3 className={styles.title}>This is a line of text</h3>
          <span className={styles.subtitle}>Take 4 mins to learn</span>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className={styles.btn}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" fill alt="" className={styles.img} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Hello world</span>
          <h3 className={styles.title}>This is a line of text</h3>
          <span className={styles.subtitle}>Take 4 mins to learn</span>
          <p className={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className={styles.btn}>
            <MdPlayCircleFilled />
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
