function ProjectItem({ item }) {
  console.log(item)
  return (
    <div>
      {/* <img src={item.cover} /> */}
      <p>
        {item.title}
      </p>
    </div>
  );
}

export default function Items() {
  return <ProjectItem />;
}
