import React, { useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState([
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  ]);

  const quotes = [
    {
      id: 1,
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      id: 2,
      quote: "The way to get started is to quit talking and begin doing.",
    },
    {
      id: 3,
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    },
    {
      id: 4,
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
      id: 5,
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },
    {
      id: 6,
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    },
    {
      id: 7,
      quote: "You must be the change you wish to see in the world.",
    },
    {
      id: 8,
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    },
    {
      id: 9,
      quote:
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    },
    {
      id: 10,
      quote: "Well done is better than well said.",
    },
    {
      id: 11,
      quote:
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    },
    {
      id: 12,
      quote:
        "It is during our darkest moments that we must focus to see the light.",
    },
    {
      id: 13,
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      id: 14,
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
    },
    {
      id: 15,
      quote:
        "Go confidently in the direction of your dreams! Live the life you've imagined.",
    },
    {
      id: 16,
      quote:
        "In the end, it's not the years in your life that count. It's the life in your years.",
    },
    {
      id: 17,
      quote:
        "In this life we cannot do great things. We can only do small things with great love.",
    },
    {
      id: 18,
      quote:
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    },
    {
      id: 19,
      quote:
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    },
    {
      id: 20,
      quote: "Life is either a daring adventure or nothing.",
    },
    {
      id: 21,
      quote: "Life is a long lesson in humility.",
    },
    {
      id: 22,
      quote: "Life is made of ever so many partings welded together.",
    },
    {
      id: 23,
      quote: "Life is trying things to see if they work.",
    },
    {
      id: 24,
      quote:
        "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    },
    {
      id: 25,
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
    },
    {
      id: 26,
      quote:
        "If you want to make your dreams come true, the first thing you have to do is wake up.",
    },
    {
      id: 27,
      quote:
        "If you really look closely, most overnight successes took a long time.",
    },
    {
      id: 28,
      quote: "The secret of success is to do the common thing uncommonly well.",
    },
    {
      id: 29,
      quote: "I find that the harder I work, the more luck I seem to have.",
    },
    {
      id: 30,
      quote:
        "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
    },
  ];

  const randomQuoteHandler = () => {
    let data = Math.floor(Math.random() * quotes.length - 1);
    setQuote(quotes[data].quote);
  };

  return (
    <div className=" w-3/4 mx-auto rounded-xl bg-white shadow-2xl text-center p-6">
      <h1 className="text-3xl p-4 ">
        Random Quote Generator
        <p className="bg-blue-800 h-1 mt-2 w-32 mx-auto"></p>
      </h1>

      <div className="h-40 mt-16 text-3xl text-slate-700 px-3">{quote}</div>
      <button
        onClick={randomQuoteHandler}
        className="bg-blue-600 hover:bg-blue-700 text-2xl p-4 text-white ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300 ... rounded-full"
      >
        New Quote{" "}
      </button>
    </div>
  );
};

export default QuoteGenerator;
