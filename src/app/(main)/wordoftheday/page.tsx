// Import required modules and dependencies at the top
import React from 'react';
import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import WordOfDayClient from './wordclient';
import { JSDOM } from 'jsdom';

interface WordData {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example: string;
}

const WordOfTheDayPage = async () => {
  try {
    const [userProgress, userSubscription] = await Promise.all([
      getUserProgress(),
      getUserSubscription(),
    ]);

    if (!userProgress || !userProgress.activeCourse) {
      redirect("/courses");
    }

    // Fetch word of the day with no cache
    const response = await fetch('https://www.merriam-webster.com/word-of-the-day', { cache: 'no-store' });
    const merriamHtml = await response.text();
    const wordData = parseWordDataFromHtml(merriamHtml);

    const isPro = !!userSubscription?.isActive;

    return (
      <div className="flex flex-row-reverse gap-[50px] px-6">
        <StickyWrapper>
          <UserProgress
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
          {!isPro && <Promo />}
        </StickyWrapper>
        <FeedWrapper>
          <div className="w-full flex flex-col items-center">
            <Image src="/wordicon.svg" alt="Word of the Day" height={90} width={90} />
            <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
              Word of the Day
            </h1>
            <p className="text-muted-foreground text-center text-lg mb-6">
              Expand your vocabulary with a new word every day!
            </p>
          </div>
          <WordOfDayClient wordData={wordData} />
        </FeedWrapper>
      </div>
    );
  } catch (error) {
    console.error('Error in WordOfTheDayPage:', error);
    return <div>An error occurred while loading the Word of the Day. Please try again later.</div>;
  }
};

// Helper function to parse word data from HTML
function parseWordDataFromHtml(html: string): WordData | null {
  if (!html) return null;
  
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  return {
    word: doc.querySelector('h2')?.textContent?.trim() || 'N/A',
    pronunciation: doc.querySelector('.word-syllables')?.textContent?.trim() || 'N/A',
    partOfSpeech: doc.querySelector('.main-attr')?.textContent?.trim() || 'N/A',
    definition: doc.querySelector('.wod-definition-container p')?.textContent?.trim() || 'N/A',
    example: doc.querySelector('.wod-definition-container p:nth-child(3)')?.textContent?.trim().slice(2).trim() || 'Example not available',
  };
}

export default WordOfTheDayPage;
