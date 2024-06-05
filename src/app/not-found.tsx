'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return <h1>Not Found</h1>;
}
