import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock5,
  Earth,
  Facebook,
  Globe,
  Instagram,
  Search,
  Send,
  Twitter,
  User,
} from "lucide-react";

import cover from "./assets/images/cover.jpg";
import trending1 from "./assets/images/trending1.jpg";
import trending2 from "./assets/images/trending2.jpg";
import trending3 from "./assets/images/trending3.jpg";
import happeningNow from "./assets/images/happeningNow.jpg";
import bigImage from "./assets/images/bigImage.jpeg";
import small from "./assets/images/small.jpg";
import small2 from "./assets/images/small2.jpg";
import small3 from "./assets/images/small3.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="text-xl font-bold text-red-400">LOGO</div>
      <nav className="flex space-x-6">
        <a href="#" className="font-medium">
          HOME
        </a>
        <a href="#" className="font-medium text-gray-500">
          DISCOVERY
        </a>
        <a href="#" className="font-medium text-gray-500">
          PHOTOS
        </a>
        <a href="#" className="font-medium text-gray-500">
          CONTACT
        </a>
        <User className="w-6 h-6" />
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <div className="relative h-[600px] ">
      <img
        src={cover}
        alt="Scenic cliff landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-row items-center content-center justify-center bg-black bg-opacity-30">
        <div className="container mx-auto h-full basis-2/3 content-center items-center">
          <div className="text-white mx-8">
            <h1 className="text-4xl font-bold mb-8">WORLD NEWS</h1>

            <h1 className="text-4xl font-bold mb-4 pt-8 border-t-2">
              Amazing places in America to visit.
            </h1>
            <p className="mb-6 max-w-xl">
              For some reason — this country, this city, this neighborhood, this
              particular street — is the place you are living a majority of your
              life in.
            </p>
            <button className="bg-red-400 text-white px-6 py-2 rounded">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsSection = ({ title, children }) => {
  return (
    <section className="container mx-auto px-4 mb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <button className="p-2 ">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 ">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {children}
    </section>
  );
};

const ArticleCard = ({ image, title, excerpt, time }) => {
  return (
    <div className="flex-shrink-0 bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 " />
      <div className=" flex flex-col justify-center m-8">
        <h3 className="font-bold">{title}</h3>
        <p className="mb-2 max-w-xl  text-gray-400">{excerpt}</p>
        <div className="flex items-center">
          <Clock5 className="w-4 h-4 text-gray-400" />
          <p className=" italic text-sm pl-2 text-gray-400">{time}</p>
        </div>
      </div>
    </div>
  );
};

const LargeArticleCard = ({ image, category, title, excerpt, time }) => {
  return (
    <div className="relative h-[500px] mb-6 mt-2">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded"
      />
      <div className="absolute inset-0 rounded ">
        <div className="absolute bottom-0 p-8 text-white h-full w-full flex flex-col justify-between">
          <div className="text-md mb-2">{category}</div>

          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>

            <p className="mb-2 max-w-xl  ">{excerpt}</p>
            <div className="flex items-center">
              <Clock5 className="w-4 h-4 " />
              <p className=" italic text-sm pl-2 text-gray-300">{time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SmallArticleCard = ({ image, title, author, time }) => {
  return (
    <div className=" col-auto space-x-4 mb-6">
      <img
        src={image}
        alt={title}
        className="w-full  h-60 object-cover mb-4 rounded"
      />
      <div>
        <h3 className="font-bold mb-1">{title}</h3>

        <div className="flex items-center">
          <Clock5 className="w-4 h-4 text-gray-400" />
          <p className=" italic text-sm pl-2 text-gray-400">
            {time} by <span className=" underline">{author}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className=" flex flex-row flex-wrap m-8">
          <div className="basis-1/2 grow flex flex-row flex-wrap mb-8">
            <div className="font-bold text-white basis-1/5 mb-4 flex px-4 justify-center">
              LOGO
            </div>
            <div className="basis-3/5 ">
              <div className=" flex flex-row font-bold basis-2/3 text-gray-300 justify-around gap-4">
                <nav className="space-y-2">
                  <a href="#" className="block ">
                    Home
                  </a>
                  <a href="#" className="block ">
                    Discovery
                  </a>
                  <a href="#" className="block ">
                    Photos
                  </a>
                  <a href="#" className="block ">
                    Contact
                  </a>
                </nav>

                <nav className="space-y-2">
                  <a href="#" className="block ">
                    About
                  </a>
                  <a href="#" className="block ">
                    Help
                  </a>
                  <a href="#" className="block ">
                    Terms
                  </a>
                  <a href="#" className="block ">
                    Guidelines
                  </a>
                </nav>

                <nav className="space-y-2">
                  <a href="#" className="block ">
                    Testimonials
                  </a>
                  <a href="#" className="block ">
                    Integration
                  </a>
                  <a href="#" className="block ">
                    Adveritse
                  </a>
                  <a href="#" className="block ">
                    Carrier
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="basis-1/2 grow grid grid-cols-2  flex-wrap justify-around">
            <div className="basis-2/4 mx-3 pt-2 ">
              <div className="border p-3 border-gray-300 rounded-lg flex flex-row justify-between">
                <p className=" text-gray-300  text-md">Email</p>
                <Send className="w-5 h-5 text-white" />
              </div>
              <p className=" text-gray-300 my-3 font-bold ">
                Stay in touch with us for the freshest Products!
              </p>
            </div>
            <div className="flex space-x-4  justify-around basis-2/6">
              <Instagram className="w-6 h-6 text-white" />
              <Twitter className="w-6 h-6 text-white" />
              <Facebook className="w-6 h-6 text-white" />
              <Earth className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 bg-white mb-12">
          <div className=" col-span-2">
            <HeroSection />
          </div>
          <div className=" items-center md:col-span-3 lg:col-auto">
            <div className="container mx-auto px-16  h-full flex flex-col justify-center py-8">
              <section className="container mx-auto mb-7 border-b-2">
                <div className="flex justify-between items-center mb-7">
                  <h2 className="text-xl font-bold ">MORE NEWS</h2>
                  <div className="flex space-x-2 ">
                    <button className="p-2 ">
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 ">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </section>
              <div className="mb-5">
                <h1 className="text-xl font-bold mb-3 text-red-400">Travel</h1>
                <h3 className=" font-bold mb-1">Article Title</h3>
                <p className="mb-2 max-w-xl  text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="flex items-center">
                  <Clock5 className="w-4 h-4 text-gray-400" />
                  <p className=" italic text-sm pl-2 text-gray-400">
                    2 mins ago
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-xl font-bold mb-3 text-red-400">
                  TECHNOLOGY
                </h1>
                <h3 className=" font-bold mb-2">Article Title</h3>
                <p className="mb-2 max-w-xl  text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="flex items-center">
                  <Clock5 className="w-4 h-4 text-gray-400" />
                  <p className=" italic text-sm pl-2 text-gray-400">
                    2 mins ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className=" basis-3/4 ">
            <NewsSection title="TRENDING">
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-16">
                <ArticleCard
                  image={trending1}
                  title="Dolore magna aliqua"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  time="2hr ago"
                />
                <ArticleCard
                  image={trending2}
                  title="Morbi eleifend a libero"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  time="1h ago"
                />
                <ArticleCard
                  image={trending3}
                  title="Morbi eleifend a libero"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  time="3h ago"
                />
              </div>
            </NewsSection>

            <NewsSection title="HAPPENING NOW">
              <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
                <div className="col-span-2 space-y-8">
                  <LargeArticleCard
                    image={happeningNow}
                    category="CITY"
                    title="Large article title"
                    excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                    time="2m ago"
                  />
                  <LargeArticleCard
                    image={bigImage}
                    category="TRAVEL"
                    title="Large article title"
                    excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                    time="2m ago"
                  />
                </div>
                <div className="grid grid-row-3 mt-2 gap-8 ">
                  <SmallArticleCard
                    image={small}
                    title="Small title"
                    author="Worldnews"
                    time="3h ago"
                  />
                  
                  <SmallArticleCard
                    image={small2}
                    title="Small title"
                    author="Days"
                    time="4h ago"
                  />
                  <SmallArticleCard
                    image={small3}
                    title="Small title"
                    time="3h ago"
                    author="Monica"
                  />
                </div>
              </div>
            </NewsSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
