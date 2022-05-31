import React from 'react';
import Image from 'next/image';

interface LightNovelCardProps {
  title: string;
  image: string;
  width?: string;
  height?: string;
}

const LightNovelCard: React.FC<LightNovelCardProps> = ({
  title,
  image,
  width,
  height,
}) => {
  return (
    <div className="col-span-1 hover:scale-110 hover-showtile">
      <div
        className={`relative`}
        style={{
          //   width: width ? width : '273px',
          height: height ? height : '400px',
        }}
      >
        <Image src={image} alt={title} layout="fill" />
        <div
          className="absolute bottom-0 text-white bg-black bg-[rgba(0,0,0,0.5)] w-full p-4 opacity-0 title-show"
          style={{ transition: '0.5s ease' }}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default LightNovelCard;
