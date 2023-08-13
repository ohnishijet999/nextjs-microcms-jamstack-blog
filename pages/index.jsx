import { client } from '@/libs/client';
import styles from '@/styles/Home.module.scss'
import Link from 'next/link';

// SSG
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
  })

  console.log(data);

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default function Home({blog}) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id} className={styles.list}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  )
}