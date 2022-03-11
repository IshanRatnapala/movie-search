import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function ActiveLink({ children, href }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={`${router.asPath === href ? 'selected' : ''}`}>{children}</a>
    </Link>
  );
}

export default ActiveLink;
