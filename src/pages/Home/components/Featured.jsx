import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./Homepage.css"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export const Featured = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("http://localhost:8001/featured_recipe");
      const data = await response.json();
      setRecipes(data);
    }
    fetchRecipes();
  }, [setRecipes ])

  // const prevButton = (
  //   <div className="swiper-button-prev">
  //     <img src={arrow_left} alt="" />
  //   </div>
  // );

  // const nextButton = (
  //   <div className="swiper-button-next">
  //     <img src={arrow_right} alt="" />
  //   </div>
  // );

  const breakpoints = {
    // when window width is >= 960px
    960: {
      slidesPerView: 4,
      spaceBetween: 55,
    },
    // when window width is less than 500px
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  };

  return (
    <div className='max-w-[1240px] m-auto mt-32'>
      <h1 className='text-4xl font-semibold mb-16'>Savor the Spotlight: Explore Our <br /> Featured Recipes</h1>
      <div className='flex items-center gap-5'>
        <div className='custom-prev-button cursor-pointer'>
          <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
          </svg>
        </div>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={55}
        loop={true}
        modules={[ Navigation]}
        navigation={{ prevEl: ".custom-prev-button", nextEl: ".custom-next-button" }}
        className="mySwiper"
      >
        {recipes.map((recipe, index) => {
          return   <SwiperSlide key={index}> <Link to={`/recipes/${recipe.id}`}><img src={recipe.img} alt="" /></Link></SwiperSlide>
        })}

      </Swiper>
        <div className='custom-next-button cursor-pointer'>
          <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div> 
      </div>
      <div className=' border-2 border-green-600 rounded-3xl m-auto mt-16'>
        <p className='text-center p-8 font-medium'>
        Explore a carefully curated selection of standout dishes that showcase the  diversity and creativity of our recipe collection. From comforting classics to innovative creations, each featured recipe promises to tantalize your taste buds and awaken your inner chef. Indulge in the rich flavours, vibrant colours, and enticing  aromas of our hand-picked favourites, crafted with love and passion by our talented community of home cooks and chefs. Whether you're in search of a quick week night  meal, planning a special dinner party, or simply craving something delicious, our  Featured Recipes section is your <br /> gateway to culinary bliss. Join us on a journey of <br /> 
        flavour exploration and culinary discovery, and let your  taste buds rejoice in the magic 
        <br /> of good food!
        </p>
      </div>
    </div>
  )
}
