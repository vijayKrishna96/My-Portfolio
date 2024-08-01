import React, { useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Element } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects() {
  const swiperRef = useRef(null);
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = (event) => {
      const swiper = swiperRef.current.swiper;
      const swiperContainer = swiperContainerRef.current;

      if (!swiperContainer) return;

      const rect = swiperContainer.getBoundingClientRect();

      // Check if Swiper section is in view
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (inView && !isScrolling) {
        event.preventDefault();
        isScrolling = true;

        // Handle mouse wheel control for Swiper
        if (event.deltaY > 0) {
          // Scroll down
          if (!swiper.isEnd) {
            swiper.slideNext();
          } else {
            window.scrollBy(0, event.deltaY);
          }
        } else if (event.deltaY < 0) {
          // Scroll up
          if (!swiper.isBeginning) {
            swiper.slidePrev();
          } else {
            window.scrollBy(0, event.deltaY);
          }
        }

        setTimeout(() => {
          isScrolling = false;
        }, 600); // Add delay equal to the Swiper transition duration
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <Element name='projects' id='projects'>
      <section className='h-screen'>
        <div ref={swiperContainerRef}>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSlideChange={() => console.log('slide change')}
            onReachEnd={() => console.log('reach end')}
          >
            {Array(4).fill("/src/assets/Bg.png").map((src, index) => (
              <SwiperSlide key={index}>
                <img src={src} alt={`Slide ${index + 1}`} className='h-screen' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Element>
  );
}

export default Projects;
