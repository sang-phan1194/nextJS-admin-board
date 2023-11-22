import styles from '@/app/ui/dashboard/users/singleUserPage/singleUserPage.module.css';
import Image from 'next/image';

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="" />
        </div>
        Mary Jane
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Mary Jane" />
          <label>Email</label>
          <input type="email" name="email" placeholder="MaryJane@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+84 325 127 568" />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder="No 1, Ton Duc Thang, Ho Chi Minh"
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
