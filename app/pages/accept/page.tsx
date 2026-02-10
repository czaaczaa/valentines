'use client'
import React, { use } from 'react'
import { Typewriter } from '@/components/ui/typewriter'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

function page() {
    const router = useRouter();
    const words = [
  "Hi Minyoung,",
   "You're probably wondering what this is...",
   "Well, I'm here to tell you",
   "That i'm asking you",
   "yes...Minyoung Jang... YOU!!!!",
   "🥁🥁🥁",
   "to be my Valentine!!!",
  ]
  useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/pages/topsecret');
        }, words.join(" ").length * 100 + 3000); // Estimate time based on text length

        return () => clearTimeout(timer);
    }, [router, words]);
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-4xl font-bold">
        <Typewriter words={words} />
      </div>
    </div>
  )
}


export default page
