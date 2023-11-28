'use client';
import styles from './pagination.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Pagination = ({ totalUser }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get('page') || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 5;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext =
    ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < totalUser;
  const handleChangePage = (type) => {
    type === 'prev'
      ? params.set('page', +page - 1)
      : params.set('page', +page + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <span>Page - {page}</span>
      <button
        className={styles.btn}
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
