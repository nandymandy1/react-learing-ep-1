import AppCarousel from "../components/Carousel";

const Home = () => {
  const items = [
    {
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
      src: "https://picsum.photos/id/123/1920/600",
    },
    {
      altText: "Slide 2",
      caption: "Slide 2",
      key: 2,
      src: "https://picsum.photos/id/456/1920/600",
    },
    {
      altText: "Slide 3",
      caption: "Slide 3",
      key: 3,
      src: "https://picsum.photos/id/678/1920/600",
    },
  ];

  return (
    <div>
      <h1>Home</h1>
      <AppCarousel items={items} />
      <p>This is home component</p>
    </div>
  );
};

export default Home;
