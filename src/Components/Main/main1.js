return (
  <main>
    {beasts}

    <HornedBeast
      title={data[0].title}
      imageUrl={data[0].image_url}
      description={data[0].description}
    />
    <HornedBeast
      title={data[1].title}
      imageUrl={data[1].image_url}
      description={data[1].description}
    />
    <HornedBeast
      title={data[2].title}
      imageUrl={data[2].image_url}
      description={data[2].description}
    />
  </main>
);
