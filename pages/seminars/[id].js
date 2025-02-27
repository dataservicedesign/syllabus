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
        <title>{postData.name} - Data and Service Design</title>
        <meta itemprop="name" content={`${postData.name.trim()} - Data and Service Design`} />
        <meta itemprop="description" content={postData.abstract ? postData.abstract.trim() : "A course on data practices and service design at Politecnico Milano School of Design, Master in Product Service System Design"} />
        <meta itemprop="image"  content={`/syllabus/seminars/${postData.id}.png`} />

        <meta property="og:type" content="website" key="og:type"/>
        <meta property="og:url" content="https://dataservicedesign.github.io/syllabus" key="og:url"/>
        <meta property="og:title" content={`${postData.name.trim()} - Data and Service Design`} key="og:title"/>
        <meta property="og:description" content={postData.abstract ? postData.abstract.trim() : "A course on data practices and service design at Politecnico Milano School of Design, Master in Product Service System Design"} key="og:description"/>

        <meta property="twitter:card" content="summary_large_image" key="twitter:card"/>
        <meta property="twitter:url" content="https://dataservicedesign.github.io/syllabus" key="twitter:url"/>
        <meta property="twitter:title" content={`${postData.name.trim()} - Data and Service Design`} key="twitter:title"/>
        <meta property="twitter:description" content={postData.bio ? postData.bio.trim() : "A course on data practices and service design at Politecnico Milano School of Design, Master in Product Service System Design"} key="twitter:description"/>
        <meta property="twitter:image" content={`/syllabus/seminars/${postData.id}.png`} key="twitter:image"/>
        <meta property="og:image" content={`/syllabus/seminars/${postData.id}.png`} key="og:image"/>
      </Head>
      <h4>{postData.name}, {postData.affiliation}</h4>
      <h4>{formattedDate}</h4>
      <h4>{postData.title ? `"${postData.title}"` : null}</h4>
      <div className={styles.postContainer}>
      <blockquote className={styles.blockquote}>{postData.abstract}</blockquote>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <div><Zoom classDialog={"custom-zoom"}><Image src={`/syllabus/seminars/${postData.id}.png`} width={0} height={0} sizes="100%" style={{ width: "100%", height: "auto" }}/></Zoom></div>
    </Layout>
  );
}
