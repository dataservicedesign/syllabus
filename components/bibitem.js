import Cite from "citation-js";

function BibItem({ item }) {
  // const cit = new Cite(item);

  // const bib = cit.format("bibliography", {
  //   format: "text",
  //   template: "harvard1",
  // });

  return <p>{item}</p>;
}

export default function Items({ item }) {
  return <BibItem item={item} />;
}
