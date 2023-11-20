import Search from '@/app/ui/dashboard/search/search';
import styles from '../../ui/dashboard/products/products.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  width={40}
                  height={40}
                  className={styles.image}
                  alt=""
                />
                Iphone
              </div>
            </td>
            <td>Desc...</td>
            <td>$453</td>
            <td>10.10.23</td>
            <td>35</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.btn} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.btn} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
