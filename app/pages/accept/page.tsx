'use client'
import React, { use } from 'react'
import { Typewriter } from '@/components/ui/typewriter'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

function page() {
    const router = useRouter();
    const words = [
    "Hello Emily,",
    "You might be wondering what you're looking at right now.",
    "Well, I'm here to tell you",
    "that this is me officially asking you",
    "yes YOU!!!!",
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
