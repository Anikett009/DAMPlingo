import React from 'react';
import Image from 'next/image';
import { FeedWrapper } from '@/components/feed-wrapper';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


interface ProfileDetail {
  username: string;
  fullName: string;
  bio: string;
  github: string;
  twitter: string;
  linkedin: string;
  background: string;
  image: string;
}

const profileDetails: ProfileDetail[] = [
  {
    username: 'Full-Stack Developer',
    fullName: 'Aniket Pethe',
    bio: 'Passionate developer ',
    github: 'https://www.github.com/',
    linkedin: 'https://www.linkedin.com/',
    twitter: '',
    background: '/aniket.png',
    image: '/aniket.png',
  },
  {
    username: 'Front-End & UIUX',
    fullName: 'Devika Nikam',
    bio: 'Always in pursuit of the next coding adventure.',
    github: 'https://www.github.com/',
    twitter: '',
    
    linkedin: 'https://www.linkedin.com/',
    background: '/assets/images/bg-2.jpg',
    image: '/devika.png',
  },
  {
    username: 'Front-End & Data Engineer',
    fullName: 'Pushkar Mhatre',
    bio: 'Enthusiastic about all things tech.',
    github: 'https://www.github.com/',
    twitter: '',
    linkedin: 'https://www.linkedin.com/feed/',
    image: '/pushkar.jpeg',
    background: '/pushkar.jpeg',
  },
  {
    username: 'BackEnd & DevOps',
    fullName: 'Mahek Parmar',
    bio: 'Magician of coding',
    github: 'https://www.github.com/',
    twitter: '',
    
    linkedin: 'https://www.linkedin.com/',
    background: '/assets/images/bg-4.jpg',
    image: '/mahek.jpeg',
  },
];

const ProfileCard: React.FC<{ details: ProfileDetail }> = ({ details }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 mx-auto my-12 text-center rounded-md shadow-md bg-white text-gray-800 hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl cursor-pointer transition-all duration-300">
          <div className="w-full aspect-square relative -mt-12 mb-4 ">
            <Image
              src={details.image}
              alt={details.fullName}
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-sky-100"

            />
          </div>
          <div className="flex-1 my-4">
            <p className="text-2xl font-bold">{details.fullName}</p>
            <h3 className="text-lg font-semibold">{details.username}</h3>
            <h3 className="text-lg">{details.bio}</h3>
          </div>
          <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
            <Link
              href={details.github}
              className="bg-black flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
            >
              <FaGithub />
            </Link>
            <Link
              href={details.linkedin}
              className="bg-sky-500 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={details.twitter}
              className="bg-pink-500 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{details.fullName}</SheetTitle>
          <SheetDescription>{details.username}</SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <Image
            src={details.image}
            alt={details.fullName}
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <p className="mt-4 text-center">{details.bio}</p>
          <div className="flex justify-center mt-6 space-x-4">
            <Link href={details.github} className="text-2xl text-black">
              <FaGithub />
            </Link>
            <Link href={details.linkedin} className="text-2xl text-sky-500">
              <FaLinkedin />
            </Link>
            <Link href={details.twitter} className="text-2xl text-pink-500">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Team2: React.FC = () => {
  return (
    <FeedWrapper>
      <div className="w-full flex flex-col items-center">
        <Image
          src="/team.svg"
          alt="Our Team"
          height={90}
          width={90}
        />
        <h1 className="text-center font-bold text-neutral-800 text-3xl my-6">
         About Us
        </h1>
        <p className="text-muted-foreground text-center text-xl mb-6">
          Meet the revolutionary team behind Damplingo
        </p>
        <div className="py-20 w-full">
          <div className="container mx-auto">
            <div className="grid gap-6 w-full px-10 mt-10 md:grid-cols-2 xl:grid-cols-4">
              {profileDetails.map((details: ProfileDetail, index: number) => (
                <ProfileCard key={index} details={details} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FeedWrapper>
  );
};


export default Team2;