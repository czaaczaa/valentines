"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function PromptValidator() {
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();


  // Define your question and correct answer
  const correctAnswer = "Vivis bubble tea chicken"; // Change this to your answer
  const question = "What's the best thing in the world?"; // Change this to your question


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if answer is correct (case-insensitive)
    if (userInput.toLowerCase().trim() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
      setShowError(false);
    } else {
      setShowError(true);
      setIsCorrect(false);
    }
  };

  // Automatically navigate after showing success message
  useEffect(() => {
    if (isCorrect) {
      const timer = setTimeout(() => {
        router.push("/pages/accept");
      }, 1500); // Wait 1.5 seconds to show the success message

      return () => clearTimeout(timer);
    }
  }, [isCorrect, router]);


  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-center text-rose-900">{question}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
                setShowError(false);
              }}
              placeholder="Enter your answer..."
              className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 bg-white text-rose-900 placeholder-pink-300"
              disabled={isCorrect}
            />
            
            {showError && (
              <p className="text-rose-600 text-sm mt-2 font-medium">
                Incorrect answer. Try again!
              </p>
            )}
            
            {isCorrect && (
              <p className="text-emerald-600 text-sm mt-2 font-medium animate-pulse">
                ✓ Correct! Now taking you to the secret page...
              </p>
            )}
          </div>


          {!isCorrect && (
            <button
              type="submit"
              className="w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-md hover:shadow-lg font-medium"
            >
              Submit Answer
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
