import Search from '@/app/ui/dashboard/search/search';
import styles from '../../ui/dashboard/products/products.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import { fetchProducts } from '@/app/lib/data';

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const { products, totalProducts } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
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
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={prod.img || '/noproduct.jpg'}
                    width={40}
                    height={40}
                    className={styles.image}
                    alt=""
                  />
                  {prod.title}
                </div>
              </td>
              <td>{prod.desc}</td>
              <td>${prod.price}</td>
              <td>{prod.createdAt?.toString().splice(4, 16)}</td>
              <td>{prod.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${prod.id}`}>
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
          ))}
        </tbody>
      </table>
      <Pagination totalCount={totalProducts} />
    </div>
  );
};

export default ProductsPage;
