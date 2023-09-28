import { client } from "@/libs/client";
import styles from "../../styles/Home.module.scss"
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: 'blog',
    contentId: id
  })

  // コードハイライトを実装
  const $ = cheerio.load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog: {...data, body: $.html()},
    }
  }
}

export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: 'blog'
  })
  const paths = data.contents.map((content) => `/blog/${content.id}`)

  return {
    paths,
    fallback: false, //設定していないpath => 404notfound
  }
}

export default function BlogId({blog}) {
  return (
    <main className="max-w-screen-lg my-0 mx-auto p-8">
      <h1 className="mb-5 text-3xl font-black">{blog.title}</h1>
      <p className="">公開日時：{new Date(blog.publishedAt).toLocaleString()}</p>
      <p className="mb-10">更新日時：{new Date(blog.updatedAt).toLocaleString()}</p>
      <div
        dangerouslySetInnerHTML={{__html: `${blog.body}`}}
        className={styles.post}>
      </div>
    </main>
  )
}