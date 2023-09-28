import Head from 'next/head';
// import { client } from '@/libs/client';

// // SSG
// export const getStaticProps = async () => {
//   const data = await client.get({
//     endpoint: 'blog',
//   })

//   console.log(data);

//   return {
//     props: {
//       blog: data.contents,
//     },
//   }
// }

const MyHead = ({title, thumbnail, description}) => {
  return (
    <div>
      <Head>
        <title>Webエンジニアブログ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Webエンジニアブログ"/>
        {/* <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title}/>
        <meta property="og:image" content={thumbnail}/>
        <meta property="og:description" content={description}/> */}
      </Head>
    </div>
  );
}

export default MyHead;