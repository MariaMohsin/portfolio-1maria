
import React from 'react';
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-accent w-[300px] sm:w-[350px] p-4 rounded-lg shadow-lg " data-aos="zoom-in-up">
      <div className="mb-4">
        <Image 
          className="rounded-md"
          src={img}
          width={350}
          height={200} // Adjust height as needed
          alt={title}
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-white-600 mb-4">{desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-cyan-400 text-sm rounded-full text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
