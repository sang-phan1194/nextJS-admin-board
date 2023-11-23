import styles from '@/app/ui/dashboard/products/singleProductPage/singleProductPage.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" fill alt="" />
        </div>
        IP 13 Promax
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="IP 13 Promax" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$ 123" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="1234" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="Pro Max" />
          <label>Caterogy</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
            <option value="other">Others</option>
          </select>
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description..."
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
