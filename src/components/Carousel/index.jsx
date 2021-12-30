import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  CarouselIndicators,
} from "reactstrap";

import { useState } from "react";

const AppCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const itemLength = items.length - 1;

  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  return (
    <Carousel
      next={nextButton}
      activeIndex={activeIndex}
      previous={previousButton}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={(newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }}
      />

      {items.map((item) => (
        <CarouselItem key={item.key}>
          <img alt={item.altText} src={item.src} />
          <CarouselCaption
            captionHeader={item.caption}
            captionText={item.caption}
          />
        </CarouselItem>
      ))}

      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previousButton}
      />

      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={nextButton}
      />
    </Carousel>
  );
};

export default AppCarousel;
