// import React from 'react'

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// function Projects() {
//   return (
//     <div className=''>
//         <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>
//         <img src="/src/assets/Bg.png" alt="" className=''/>
//       </SwiperSlide>
//       <SwiperSlide>
        
//       <img src="/src/assets/Bg.png" alt="" />
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src="/src/assets/Bg.png" alt="" />
//       </SwiperSlide>
//       <SwiperSlide>
//       <img src="/src/assets/Bg.png" alt="" />
//       </SwiperSlide>
//       ...
//     </Swiper>
//     </div>
//   )
// }

// export default Projects


import React, { useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects() {
  const swiperRef = useRef(null);
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      const swiper = swiperRef.current.swiper;
      const swiperContainer = swiperContainerRef.current;

      if (!swiperContainer) return;

      const rect = swiperContainer.getBoundingClientRect();

      // Check if Swiper section is in view
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (inView) {
        event.preventDefault();

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
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div >
      <div ref={swiperContainerRef}>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          mousewheel={{ enabled: true }}
        >
          <SwiperSlide>
            <img src="/src/assets/Bg.png" alt="" className='h-[80vh]' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Bg.png" alt="" className='h-[80vh]' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Bg.png" alt="" className='h-[80vh]' />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/Bg.png" alt="" className='h-[80vh]' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;



