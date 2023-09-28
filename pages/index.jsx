import { client } from '@/libs/client';
import styles from '@/styles/Home.module.scss'
import Image from 'next/image';
import Link from 'next/link';

// SSG
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
  })

  console.log(data.contents);

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default function Home({blog}) {
  // if (!blog.thumbnail) {
  //   blog.thumbnail.url = '/images/dummy.jpg';
  // }
  return (
    <div className="p-5">
      <ul className='flex gap-10 flex-wrap justify-center'>
        {blog.map((blog) => (
          <li key={blog.id} className="w-[300px] h-max list-none bg-slate-200 rounded-lg hover:opacity-80 transition-opacity">
            <Link href={`blog/${blog.id}`}>
              {blog.thumbnail && (
                <Image src={blog.thumbnail.url} alt='blog image' width="300" height="300" className='h-max object-cover rounded-t-lg'/>
              )}
              <p className='text-xs px-2 pt-1'>公開日時：{new Date(blog.publishedAt).toLocaleString()}</p>
              <h2 className='px-3 pb-3 mt-1 font-bold'>{blog.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
