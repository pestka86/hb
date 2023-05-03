import HornedBeast from "../HornedBeast/HornedBeast";
import data from "../Data.json";

function Main() {
  const beasts = data.map((item) => {
    return (
      <HornedBeast
        className="container"
        id={item.id}
        title={item.title}
        imageUrl={item.image_url}
        description={item.description}
      />
    );
  });

  return <main className="main-container">{beasts}</main>;
}

export default Main;
