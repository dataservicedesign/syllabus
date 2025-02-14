import { useEffect, useState } from 'react';

import Head from "next/head";
import Navigation from "../components/nav";
import { getSortedPostsData } from "../lib/projectPost";
import { getSortedCourseData } from '../lib/coursePost';
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allCourseData = getSortedCourseData();
  return {
    props: {
      allPostsData,
      allCourseData
    },
  };
}

export default function Home({ allPostsData, allCourseData }) {
  const [formattedDates, setFormattedDates] = useState('');
  
  useEffect(() => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dates = allPostsData.map(post => {
      const date = new Date(post.date);
      return date.toLocaleDateString("en-US", options);
    });
    setFormattedDates(dates);
  }, [allPostsData]);

  return (
    <>
    <Head>
    <title>Data and Service Design - Politecnico Milano</title>
    <meta name="title" content="Data and Service Design - Politecnico Milano" key="title" />
    <meta name="description" content="A course on data practices and service design at Politecnico Milano School of Design, Master in Product Service System Design" key="description" />
    
    <meta property="og:type" content="website" key="og:type"/>
    <meta property="og:url" content="https://dataservicedesign.github.io/syllabus" key="og:url"/>
    <meta property="og:title" content="Data and Service Design - Politecnico Milano" key="og:title"/>
    <meta property="og:description" content="A course on data practices and service design at Politecnico Milano School of Design, Master in Product Service System Design" key="og:description"/>
    <meta property="og:image" content="/og-image.png" key="og:image"/>
    
    <meta property="twitter:card" content="summary_large_image" key="twitter:card"/>
    <meta property="twitter:url" content="https://dataservicedesign.github.io/syllabus" key="twitter:url"/>
    <meta property="twitter:title" content="Data and Service Design - Politecnico Milano" key="twitter:title"/>
    <meta property="twitter:description" content="A course on data practices and service design at Politecnico Milano School of Design, Master in Product Service System Design" key="twitter:description"/>
    <meta property="twitter:image" content="/og-image.png" key="twitter:image"/>
    
    </Head>
    <main>
    <Navigation />
    
    <div className={"abstract"}>
    <p>
    “Data and Service Design: Designing Data-centric Services” intends to provide students with the practical skills and conceptual foundations for making data an integral part of their service design practice. The class will approach the topic of “data practices” for service design through a three-stage exploration that will cover: data-driven research for service design, data-driven service design representations and designing data-centric services. For each stage the course will develop lectures about theories/concepts relevant to work with data for service design, tutorial sessions and hands-on exercise about tools/practices to transform data, and seminars with experts from various backgrounds and disciplines who have worked extensively with data.
    </p>
    <p>
    The course aims to provide service design students with the conceptual and practical tools for making data an integral part of their service design practice.
    In the first portion of the course, students are invited to engage with the concept of “data” by following three guiding principles:</p>
    <ol>
    <li>
    Everything could potentially be seen as data
    </li>
    <li>Data is not a neutral material</li>
    <li>Data supports both “research for” and “ideation of” new services</li>
    </ol>
    <p>Starting from these premises, the class will approach “data practices” for service design through a three-stage learning framework. Each stage will include dedicated lectures, hands-on activities and involve specific guest experts.
    </p>
    </div>
    <div><Image src={"/syllabus/cover.png"} width={0} height={0} sizes="100%" style={{ width: "100%", height: "auto" }}/></div>
    <div style={{ gridColumnStart: 1}}>
      <h4>Course structure</h4>
    </div>
    <div>
      <h4>Data-driven research for service design</h4>
      <p>Service designers use a codified set of methods and tools for understanding service users’ needs and relationships within services. This stage of the course will focus on how service methods/tools can be integrated with the collection and analysis of heterogeneous data sources (for example: available from the web and social media).</p>
    </div>
    <div>
      <h4>Data-driven service design representations</h4>
      <p>Service designers work with service representations, using a series of tangible and intangible materials to prototype the services they envision. These representations are meant to engage with final users and stakeholders to refine initial service ideas. During this stage of the course, students will learn how to substantiate these service representations with data.</p>
    </div>
    <div>
      <h4>Designing data-centric services</h4>
      <p>Service designers who seek to develop new services centered on available data must engage with dimensions pertaining to regulation (e.g., privacy), data governance and ownership. Moreover, they must consider the legal and ethical implications of accessing and using data that describe certain populations.</p>
    </div>
    {/*<div style={{ gridColumnStart: 1 }}>
    <h4>Course Journal</h4>
    </div>
    {allCourseData.map((s, index) => (
      <div style={{ gridColumn: "auto"}}>
        <h4>{s.title}</h4>
        <p>{formattedDates[index]}</p>
      <Link href={`journal/${s.id}`}>Read more</Link></div>
    ))}*/}
    <div style={{ gridColumnStart: 1 }}>
    <h4>Guest lectures</h4>
    </div>
    {allPostsData.map((s, index) => (
      <div style={{ gridColumn: "auto"}}>
        <div style={{ width: "100px"}}><Zoom classDialog={"custom-zoom"}><img src={`/syllabus/seminars/${s.id}.png`} style={{width: "100%", marginBottom: "0.5rem"}}/></Zoom></div>
        <h5>{formattedDates[index]}</h5>
        <h4>{s.name} -  {s.affiliation}</h4>
      <p>{s.bio}</p>
      <Link href={`seminars/${s.id}`}>Read more</Link></div>
    ))}
    <div style={{ gridColumnStart: 1 }}>
    <h4>Faculty</h4>
    </div>
    
    <div><div style={{ width: "100px"}}><Zoom classDialog={"custom-zoom"}><img src="/syllabus/francesco-leoni.png" style={{width: "100%", marginBottom: "0.5rem"}}/></Zoom></div><h4>Francesco Leoni</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    <div><div style={{ width: "100px"}}><Zoom classDialog={"custom-zoom"}><img src="/syllabus/andrea-benedetti.png" style={{width: "100%", marginBottom: "0.5rem"}}/></Zoom></div><h4>Andrea Benedetti</h4><p>PhD in Design at Politecnico di Milano. His research is explores the intersection of data visualization, creative programming and communication design in shaping awareness of how data is produced online by users. He has been teaching data visualization to students of various background since 2017.</p></div>
    </main>
    <Footer />
    </>
  );
}
