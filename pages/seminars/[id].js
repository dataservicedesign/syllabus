import { useEffect, useState } from 'react';

import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/utils.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from 'next/image';

import { getAllPostIds, getPostData } from "../../lib/projectPost";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
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
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(postData.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setFormattedDate(date.toLocaleDateString('en-US', options));
  }, [postData.date]);


  return (
    <Layout>
      <Head>
        <title>{postData.name}</title>
      </Head>
      <h4>{postData.name}, {postData.affiliation}</h4>
      <h4>{formattedDate}</h4>
      <h4>{postData.title}</h4>
      <div className={styles.postContainer}>
      <blockquote className={styles.blockquote}>{postData.abstract}</blockquote>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <div><Zoom classDialog={"custom-zoom"}><Image src={`/syllabus/${postData.image}`} width={0} height={0} sizes="100%" style={{ width: "100%", height: "auto" }}/></Zoom></div>
    </Layout>
  );
}
