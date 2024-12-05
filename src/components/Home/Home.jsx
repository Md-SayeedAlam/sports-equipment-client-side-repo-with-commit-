import React from "react";
import sports1 from "../../../public/sports1.jpg";
import sports2 from "../../../public/sports2.avif";
import sports3 from "../../../public/sports3.jpg";
import blog1 from '../../../public/choose.jpg'
import blog2 from '../../../public/fitness.jpg'
import blog3 from '../../../public/mental.jpg'
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const items = useLoaderData();
  return (
    <div className="bg-base-300">
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
      <h2 className="font-semibold text-2xl text-center">Sports Equipments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-gray-200 mt-10 mb-10">
        {items.slice(0, 6).map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>

      {/* categories section */}

      <section id="categories" className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Sports Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Football</h3>
              <p>
                Explore our wide range of football equipment and accessories..
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Basketball</h3>
              <p>Discover top-quality basketball gear and apparel..</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Tennis</h3>
              <p>Shop tennis rackets, balls, and other essentials..</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Cricket</h3>
              <p>
                Find everything you need for cricket, from bats to helmets..
              </p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Swimming</h3>
              <p>Check out our collection of swimming gear and accessories..</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Running</h3>
              <p>Get the best running shoes and apparel for your needs..</p>
            </div>
          </div>
        </div>
      </section>

      {/* extra 1st section */}

      <section  className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-100 shadow-md rounded-lg">
              <p className="italic">
                "Amazing quality and fantastic service , I appreciate them!"
              </p>
              <p className="mt-2 text-right font-bold">- Sumon Mia</p>
            </div>
            <div className="p-4 bg-gray-100 shadow-md rounded-lg">
              <p className="italic">
                "I love the variety of products available ,I appreciate them!"
              </p>
              <p className="mt-2 text-right font-bold">- Rohim Mia</p>
            </div>
            <div className="p-4 bg-gray-100 shadow-md rounded-lg">
              <p className="italic">
                "Fast delivery and excellent customer support , I appreciate
                them!"
              </p>
              <p className="mt-2 text-right font-bold">- Bulbul Mia</p>
            </div>
          </div>
        </div>
      </section>

      {/* extra 2nd section */}

      <section id="latest-blog-posts" className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post-- 1 */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={blog1}
                alt="Blog Post 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                How to Choose the Right Sports Gear
              </h3>
              <p className="text-gray-600 mb-4">
                Discover tips and tricks to help you pick the best equipment for
                your sport...
              </p>
              <a
                href="https://www.exisport.eu/smartblog/537_a-complete-guide-to-choosing-sports-clothing-.html"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Read More
              </a>
            </div>
            {/* Blog Post-- 2 */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={blog2}
                alt="Blog Post 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Top Fitness Trends for 2024
              </h3>
              <p className="text-gray-600 mb-4">
                Stay ahead of the curve with the latest fitness trends and
                workout routines...
              </p>
              <a
                href="https://rhinofit.ca/fitness-trends-2024-the-future-of-fitness/"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Read More
              </a>
            </div>
            {/* Blog Post --3 */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <img
                src={blog3}
                alt="Blog Post 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Benefits of Outdoor Sports for Mental Health
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how outdoor activities can improve your physical and
                mental well-being...
              </p>
              <a
                href="https://nprecovery.com/mental-health-benefits-of-outdoor-activities/"
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
