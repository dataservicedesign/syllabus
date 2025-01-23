import Head from "next/head";
import Navigation from "../components/nav";
import { getSortedPostsData } from "../lib/projectPost";
import Footer from "../components/footer";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
    <div className="container">
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
    </div>
    <div className={"text"}>
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
    <div style={{ gridColumnStart: 1 }}>
    <h4>Guest lectures</h4>
    </div>
    {allPostsData.map(s => (
      <div style={{ gridColumn: "auto"}}>
        <p><Image src={s.image} width={80} height={80} /></p>
        <h5>{s.date}</h5>
        <h4>{s.name} -  {s.affiliation}</h4>
      <p>{s.bio}</p></div>
    ))}
    <div style={{ gridColumnStart: 1 }}>
    <h4>Faculty</h4>
    </div>
    <div><h5>Teacher</h5><h4>Francesco Leoni</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    <div><h5>Teacher</h5><h4>Andrea Benedetti</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    <div><h5>Teaching Assistant</h5><h4>Marianne Fusco</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
    </main>
    </div>
    <Footer />
    </>
  );
}
