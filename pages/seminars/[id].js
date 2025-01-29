import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/utils.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import LinkItem from "../../components/LinkItem";

import { getAllPostIds, getPostData } from "../../lib/projectPost";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const images = postData.images;

  return (
    <Layout>
      <Head>
        <title>{postData.name}</title>
      </Head>
      <h4>{postData.name}</h4>
      <h4>{postData.affiliation}</h4>
      <h4>{postData.date}</h4>
      <div className={styles.postContainer}>
      <blockquote className={styles.blockquote}>{postData.bio}</blockquote>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}
