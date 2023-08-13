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
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{__html: `${blog.body}`}}
        className={styles.post}>
      </div>
    </main>
  )
}