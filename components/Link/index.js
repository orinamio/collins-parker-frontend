import { useRouter } from 'next/router';

export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'black'
  };

  useEffect(() => {
    router.prefetch(href);
  });

  const handleClick = e => {
    e.preventDefault();
    () => setTimeout(() => router.push(href), 100);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}
