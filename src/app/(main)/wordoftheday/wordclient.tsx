'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const WordOfDayClient = ({ wordData }) => {
  if (!wordData) {
    return (
      <Card className="w-full">
        <CardContent>
          <p className="text-center">Unable to load Word of the Day. Please try again later.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">{wordData.word || 'N/A'}</h2>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4"><strong>Pronunciation:</strong> {wordData.pronunciation || 'N/A'}</p>
        <p className="text-lg mb-4"><strong>Part of Speech:</strong> {wordData.partOfSpeech || 'N/A'}</p>
        <p className="text-lg mb-4"><strong>Definition:</strong> {wordData.definition || 'N/A'}</p>
        <p className="text-lg mb-4"><strong>Example:</strong> {wordData.example || 'N/A'}</p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-center text-purple-500 mb-6">Log in every day to expand your vocabulary!</p>
      </CardFooter>
    </Card>
  );
};

export default WordOfDayClient;