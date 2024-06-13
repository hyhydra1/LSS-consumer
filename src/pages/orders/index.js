import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';

// routes
import { PATH_PAGE } from '../../routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, replace, prefetch } = useRouter();

  useEffect(() => {
    if (pathname === PATH_PAGE.orders.root) {
      replace(PATH_PAGE.orders.all);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    prefetch(PATH_PAGE.orders.all);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
