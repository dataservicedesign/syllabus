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
    The course “Data and Service Design: Designing Data-centric Services” is part of the Master of Product Service System Design of the School of Design (A.Y. 2024/2025). It intends to provide service design students with the conceptual and theoretical tools to understand the “datafication of society” and integrate data as part of their service design practice.</p>
    
    <p>Throughout an approach both theoretical and practical, the students will investigate the main topics in the contemporary data landscape. They will relate to them the service design perspective under the notion of data-centric services, while engaging in data practices hands-on.</p>
    
    <p>The learning path will follow three stages : 1) Data-driven research for service design; 2) Data-driven representations for service design, and 3) Designing data-centric services. 
    </p>
    </div>
    <div><Image src={"/syllabus/cover.png"} width={0} height={0} sizes="100%" style={{ width: "100%", height: "auto" }}/></div>
    <div style={{ gridColumnStart: 1, gridColumnEnd: 4}}>
    <p>Private and public organizations harness vast quantities of data to optimize their services. The adoption of data-driven services has become prominent across multiple sectors, including welfare, healthcare, taxation, and mobility.</p>
    <p>These services often incorporate semi-automated systems that leverage data analytics and user profiling to enhance performance aspects within the supporting digital infrastructure. 
    In the past years, some of them, hindered by biases in data and flawed design, have led to harmful outcomes. Notable examples include the scandals connected to Robodebt Scheme in Australia, childcare benefits in the Netherlands, the surge in Uber prices as people fled Hurricane Katrina, or racist labels due to biased dataset in content recognition algorithms. These cases clearly illustrate how today services stand at the intersection between digital automation, organizational strategies, users interaction, regulations and ethics.</p>
    <p>This centrality demands that service designers develop their literacy about data and related socio-technical dimensions. In their designing, services designers should consider how data interplays with value co-creation — within, and beyond, the services systems they design for.
    </p>
    </div>
    <div style={{ gridColumnStart: 1 }}><h4>Developing the Course Perspective</h4>
    <p>As for any shared intellectual enterprise, this course seeks to build a common vocabulary and perspective toward its topic.Two concepts are fundamental for building this perspective: 1) Data-centric Services and 2) Data practices.</p></div>
    <div style={{ gridColumn: "span 2" }}><h4>From Data-Driven Services to Designing for Data-Centric Services</h4> 
    <p>Data collection and storage have become routine for public and private organizations. In particular, administrative and service data (also called micro-data), routinely recorded by private and public data holders throughout their activities and services. Consequently, several organizations find themselves in the position of Data Holders, possessing relevant data that can be turned into value. However, to effectively utilize this data requires addressing significant interoperability barriers—including accessibility, management, and representation—while ensuring compliance with legal and technical frameworks.</p>
    <p>This course advances the concept of Data-Centric Services, which emphasises designing services that leverage data generated by scattered digitised information systems, not yet linked, collected, or used consistently.
    Service design applied to data-centric services becomes a way to make sense and create value of these scattered data sources, orienting sense-making and building collaboration across data holders. 
    By adopting a Data-Centric Services approach, students are asked to embrace the pervasiveness of data at the service research and prototyping level, engage in data collection, manipulation, and visualisation, to develop insights from data and to involve stakeholders throughout their service design activity. </p></div>
    <div style={{ gridColumn: "span 2" }}>
    <h4>Data practices for service designers</h4>
    <p>With data-centric services, Data Practices represent this course’s other central concept—a central one to acknowledge data’s non-neutral and biased nature. Standing against a universalistic and abstract idea of data, the notion of data practice compels students and scholars to recognise it as a material that is always made by someone.</p>
    <p>Data is, therefore, intrinsically linked to social, political, organisational and material conditions. The pervasiveness of data in services—and the strong relationship between the two—requires future service designers to engage with data as one of the materials that guide their practice, acknowledging not only the operational principles of data in services but also ethical ones (Falk, 2023). This includes considerations such as the public acceptability of data collection, equitable representation of all populations involved, and the ultimate use of the data in systems that control or serve the final users.</p></div>
    <div style={{ gridColumnStart: 1, borderTop: "2px solid #1b2021" }}>
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
    {/*<div style={{ gridColumnStart: 1, borderTop: "2px solid #1b2021" }}>
      <h4>Course Journal</h4>
      </div>
      {allCourseData.map((s, index) => (
        <div style={{ gridColumn: "auto"}}>
      <h4>{s.title}</h4>
      <p>{formattedDates[index]}</p>
      <Link href={`journal/${s.id}`}>Read more</Link></div>
      ))}*/}
      <div style={{ gridColumnStart: 1, borderTop: "2px solid #1b2021" }}>
      <h4>Guest lectures</h4>
      </div>
      {allPostsData.map((s, index) => (
        <div style={{ gridColumn: "auto"}}>
        <div style={{ width: "100px"}}><Zoom classDialog={"custom-zoom"}><img src={`/syllabus/seminars/${s.id}.png`} style={{width: "100%", marginBottom: "0.5rem"}}/></Zoom></div>
        <h5>{formattedDates[index]}</h5>
        <h4><Link href={`seminars/${s.id}`}>{s.name} -  {s.affiliation}</Link></h4>
        <p>{s.title}</p></div>
      ))}
      <div style={{ gridColumnStart: 1, borderTop: "2px solid #1b2021" }}>
      <h4>Faculty</h4>
      </div>
      
      <div><div style={{ width: "100px"}}><Zoom classDialog={"custom-zoom"}><img src="/syllabus/francesco-leoni.png" style={{width: "100%", marginBottom: "0.5rem"}}/></Zoom></div><h4>Francesco Leoni</h4><p>Postdoc research fellow at Politecnico di Milano’s Design Department. He works at the Design Policy Lab and Polifactory, developing research in the field of “design for policy” by studying data-centric innovations in the public sector.</p></div>
      <div><div style={{ width: "100px"}}><Zoom classDialog={"custom-zoom"}><img src="/syllabus/andrea-benedetti.png" style={{width: "100%", marginBottom: "0.5rem"}}/></Zoom></div><h4>Andrea Benedetti</h4><p>PhD in Design, currently UX/UI Designer at Università la Statale Milano. His work revolves around using data to communicate invisible and complex issues.</p></div>
      </main>
      <Footer />
      </>
    );
  }
  