import React from 'react';
import Image from 'next/image';
import { FeedWrapper } from '@/components/feed-wrapper';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';

interface ProfileDetail {
  username: string;
  fullName: string;
  bio: string;
  github: string;
  twitter: string;
  facebook: string;
  instagram: string;
  background: string;
  image: string;
}

const profileDetails: ProfileDetail[] = [
  {
    username: 'Juaari',
    fullName: 'Aniket Pethe',
    bio: 'Passionate developer ',
    github: 'https://www.github.com/',
    twitter: 'https://twitter.com/',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://instagram.com/',
    background: '/aniket.jpeg',
    image: '/aniket.jpeg',
  },
  {
    username: 'Juaari',
    fullName: 'Devika Nikam',
    bio: 'Always in pursuit of the next coding adventure.',
    github: 'https://www.github.com/',
    twitter: 'https://twitter.com/',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://instagram.com/',
    background: '/assets/images/bg-2.jpg',
    image: '/devika.jpg',
  },
  {
    username: 'Juaari',
    fullName: 'Pushkar Mhatre',
    bio: 'Enthusiastic about all things tech.',
    github: 'https://www.github.com/',
    twitter: 'https://twitter.com/',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://instagram.com/',
    image: '/pushkar.jpeg',
    background: '/pushkar.jpeg',
  },
  {
    username: 'Juaari',
    fullName: 'Mahek Parmar',
    bio: 'Magician of coding',
    github: 'https://www.github.com/',
    twitter: 'https://twitter.com/',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://instagram.com/',
    background: '/assets/images/bg-4.jpg',
    image: '/mahek.jpeg',
  },
];

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
        <div className="py-20 ">
          <div className="container mx-auto">
            <div className="grid gap-6 w-full px-10 mt-10 md:grid-cols-2 xl:grid-cols-4">
              {profileDetails.map((details: ProfileDetail, index: number) => (
                <div
                  className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md shadow-md bg-white text-gray-800 hover:scale-105"
                  key={index}
                >
                  <Image
                    src={details.image}
                    alt={details.fullName}
                    width={96}
                    height={96}
                    className="object-cover flex-shrink-0 w-40 h-40 -mt-12 bg-gray-500 rounded-full"
                  />
                  <div className="flex-1 my-4">
                    <p className="text-xl font-bold">{details.fullName}</p>
                    <h3 className="text-md">{details.username}</h3>
                  </div>
                  <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                    <Link
                      href={details.github}
                      className="bg-black flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
                    >
                      <FaGithub />
                    </Link>
                    <Link
                      href={details.twitter}
                      className="bg-sky-500 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
                    >
                      <FaLinkedin />
                    </Link>
                    <Link
                      href={details.instagram}
                      className="bg-pink-500 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
                    >
                      <FaEnvelope />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FeedWrapper>
  );
};

export default Team2;