import { useEffect, useState } from 'react';

import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/utils.module.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import LinkItem from "../../components/LinkItem";
import Image from 'next/image';

import { getAllCourseIds, getCourseData } from "../../lib/coursePost";

export async function getStaticProps({ params }) {
  const postData = await getCourseData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllCourseIds();
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
        <title>{postData.title}</title>
      </Head>
      <h4>{postData.title}</h4>
      <h4>{formattedDate}</h4>
      <div className={styles.postContainer} style={{ gridColumnStart: 1, gridColumnEnd: 4 }}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}
