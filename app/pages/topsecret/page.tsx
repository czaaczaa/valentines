'use client';
import { Timeline } from "@/components/ui/timeline";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ButtonGroupBasic } from "@/components/ui/previous-next-button-group";
import { useRouter } from "next/navigation";
import { Carousel } from "@/components/ui/carousel";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<'friday' | 'saturday'>('friday');

  const FridayTimeline = [
    
     {
      title: "10:00 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Breakfast at Ascension Coffee: Small pastry and drinks!
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 1621 Oak Lawn Ave, Dallas, TX 75207
          </p>
        </div>
      ),
    },
    {
      title: "1:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Lunch at Nona Tabu: Michelin and Bib Gourmand star Italian restaraunt!
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 4115 Lomo Alto Dr, Dallas, TX 75219
          </p>
        </div>
      ),
    },
     {
      title: "4:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Klyde Warren Park Stroll
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 2012 Woodall Rodgers Fwy, Dallas, TX 75201
          </p>
        </div>
      ),
    },
     {
      title: "5:30 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Dallas Arboretum and Botanical Garden Evening Stroll
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 1500 W Mockingbird Ln, Dallas, TX 75211
          </p>
        </div>
      ),
    },


  ];
  const SaturdayTimeline = [
    {
      title: "10:00 AM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Canal Walk at Mandalay Canal in Irving
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            215 Mandalay Canal, Irving, TX 75039
          </p>
        </div>
      ),
    },
    {
      title: "02:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Matcha Matcha Amor and Floral Arrangements at Cafe Frida
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 2023 Greenville Ave Suite 130, Dallas, TX
          </p>
        </div>
      ),
    },
    

    {
      title: "07:00 PM",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-4">
            Hinodeya Ramen & Bar with Leo & Vicky
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs">
            📍 1611 Greenville Ave, Dallas, TX 75206
          </p>
        </div>
      ),
    },
    
  ];

  const SaturdaySlides = [
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
      src: "/hinodeya.jpg",
      
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

  const FridaySlides = [
    {
      title: "ascension!!",
      src: "/ascension.jpg",
     
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/nonna.jpg",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/klyde.jpg",
      
    },
    {
      title: "Explore the Alternative Plan!",
      src: "/frida.jpg",
      
    },
  ];

  return (
    <div className="w-full bg-pink-50 min-h-screen">
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-bold text-pink-600">
            To be My Valentine ! 
          </h1>
        }
      >
        <img 
          src="/ghibli.gif"
          alt="hero"
          className="mx-auto rounded-2xl object-contain h-full w-full max-h-[600px]"
        />
      </ContainerScroll>
      
      <div className="flex justify-center items-center px-4 py-8 bg-pink-50">
        <h2 className="text-3xl font-bold text-center max-w-4xl leading-relaxed text-pink-800">
          I've made out our plans for the weekend that you're here in Dallas! 
        </h2>
      </div>
     
      <div className="flex justify-center gap-4 py-8 bg-pink-50">
        <button 
          onClick={() => setSelectedDay('friday')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            selectedDay === 'friday' 
              ? 'bg-pink-400 text-white shadow-lg hover:bg-pink-500' 
              : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
          }`}
        >
          Friday
        </button>
        <button 
          onClick={() => setSelectedDay('saturday')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            selectedDay === 'saturday' 
              ? 'bg-pink-400 text-white shadow-lg hover:bg-pink-500' 
              : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
          }`}
        >
          Saturday
        </button>
      </div>

      <div className="bg-pink-50">
        {selectedDay === 'saturday' ? (
          <Carousel slides={SaturdaySlides} />
        ) : (
          <Carousel slides={FridaySlides} />
        )}
      </div>
      
      <div className="bg-pink-50">
        <Timeline key={selectedDay} data={selectedDay === 'saturday' ? SaturdayTimeline : FridayTimeline} />
      </div>

      <div className="bg-pink-50">
        <ButtonGroupBasic />
      </div>
    </div>
  );
}
