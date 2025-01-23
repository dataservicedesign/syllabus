import ProjectItem from "./project";
import projectList from "../content/projectList";

function List({children}) {
  return (
    <div className={"projects-grid"}>
      {children}
    </div>
  );
}

export default function ProjectsGrid() {
  return <List />;
}
