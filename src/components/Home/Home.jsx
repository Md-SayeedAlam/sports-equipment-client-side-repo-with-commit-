import React from 'react';
import sports1 from '../../../public/sports1.jpg'
import sports2 from '../../../public/sports2.avif'
import sports3 from '../../../public/sports3.jpg'
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
  const items = useLoaderData()
    return (
        <div className='bg-base-300'>

          {/* Banner section */}

             <div className="carousel w-full  mt-10 mb-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={sports1} className="w-full  h-[500px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={sports2} className="w-full h-[500px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={sports3} className="w-full h-[500px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <h2 className='font-semibold text-2xl text-center'>Sports Equipments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-gray-200 mt-10 mb-10">
      {
        items.slice(0, 6).map(item=><Card key={item._id} item={item}></Card>)
      }
      </div>

      

        </div>
    );
};

export default Home;