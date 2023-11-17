import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Next Admin</div>
      <div className={styles.text}>@All right reserved 2023</div>
    </div>
  );
};

export default Footer;
