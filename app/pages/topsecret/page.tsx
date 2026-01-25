'use client';
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ButtonGroupBasic } from "@/components/ui/previous-next-button-group";
import { useRouter } from "next/navigation";
import { Carousel } from "@/components/ui/carousel";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<'houston' | 'collegestation'>('houston');

  const CSTimeline = [
    
     {
      title: "12:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Lock In (You're probably busy if we're in college station)
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 501 University Dr.
          </p>
        </div>
      ),
    },
    {
      title: "5:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Stella Southern Cafe (Beignets ) / POV Cafe (Lake view) 
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 4040 Hwy 6 #100, College Station, TX 77845 / 4114 Lake Atlas Dr, Bryan, TX 77807
          </p>
        </div>
      ),
    },
     {
      title: "6:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Lake Walk at Lake Atlas
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 4107 Lake Atlas Dr, Bryan, TX
          </p>
        </div>
      ),
    },
     {
      title: "8:30 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Candlelight Concert
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 217 West 26th Street, Bryan, Texas.
          </p>
        </div>
      ),
    },
    
  ];

  const HoustonTimeline = [
    {
      title: "11:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Balloon Museum 
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 2501 Commerce St, Houston, TX 77003 (EaDo)
          </p>
        </div>
      ),
    },
    {
      title: "12:30 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Hermann Park 
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 6001 Fannin St, Houston, TX 77030
          </p>
        </div>
      ),
    },
    
    {
      title: "1:30 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Annkello Kahawa Cafe
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 5333 Westheimer Rd Suite 101, Houston, TX 77056
          </p>
        </div>
      ),
    },
    
    {
      title: "2:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Ramen Moto
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 2320 W Alabama St, Houston, TX 77098
          </p>
        </div>
      ),
    },
    {
      title: "2:30 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Discovery Green
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 1500 McKinney St, Houston, TX 77010
          </p>
        </div>
      ),
    },
    {
      title: "4:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Nap!!!
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 501 University Dr.
          </p>
        </div>
      ),
    },
    
  ];

  const HoustonSlides = [
    {
      title: "Houston!",
      src: "/caption.jpg",
     
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/HP_The_Commons_Aerial_8.webp",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/matcha.jpeg",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/ramenbestest.jpg",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/dg.webp",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/ch.webp",
      
    },
  ];

  const CS_Slides = [
    {
      title: "Houston!",
      src: "/ch.webp",
     
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/stella.jpg",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/atlas.jpg",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/candle.avif",
      
    },
  ];

  return (
    <div className="w-full bg-pink-50 min-h-screen">
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-pink-600">
            To be My Valentine!!!!!!
          </h1>
        }
      >
        <img 
          src="/valentines-day-icegif-27.gif"
          alt="hero"
          className="mx-auto rounded-2xl object-contain h-full w-full max-h-[600px]"
        />
      </ContainerScroll>
      
      <div className="flex justify-center items-center px-4 py-8 bg-pink-50">
        <h2 className="text-3xl font-bold text-center max-w-4xl leading-relaxed text-pink-800">
          Since you're super busy and you usually plan things, I thought I'd go ahead and make two itineraries just in case we don't go to Houston! You can pick which ones you like and I'll book the reservations too!!!
        </h2>
      </div>
     
      <div className="flex justify-center gap-4 py-8 bg-pink-50">
        <button 
          onClick={() => setSelectedCity('houston')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            selectedCity === 'houston' 
              ? 'bg-pink-400 text-white shadow-lg hover:bg-pink-500' 
              : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
          }`}
        >
          Houston
        </button>
        <button 
          onClick={() => setSelectedCity('collegestation')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            selectedCity === 'collegestation' 
              ? 'bg-pink-400 text-white shadow-lg hover:bg-pink-500' 
              : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
          }`}
        >
          College Station
        </button>
      </div>

      <div className="bg-pink-50">
        {selectedCity === 'houston' ? (
          <Carousel slides={HoustonSlides} />
        ) : (
          <Carousel slides={CS_Slides} />
        )}
      </div>
      
      <div className="bg-pink-50">
        <Timeline key={selectedCity} data={selectedCity === 'houston' ? HoustonTimeline : CSTimeline} />
      </div>

      <div className="bg-pink-50">
        <ButtonGroupBasic />
      </div>
    </div>
  );
}
