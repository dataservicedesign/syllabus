import BibItem from "./bibitem";
import pubList from "../content/pubList";

// const pubs = ["10.1145/3464385.3464731", "10.6092/UNIBO/AMSACTA/6848", "10.7203/drdcd.v1i8.241", "10.1080/1369118X.2021.1934064", "10.21125/edulearn.2020.0982"];

function List() {
  return (
    <>
      {pubList.map((pub) => (
        <BibItem key={pub} item={pub} />
      ))}
    </>
  );
}

export default function Bib() {
  return <List />;
}
