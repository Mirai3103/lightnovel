import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-end text-5xl ">
      <div className=" p-1  rounded-[50%] bg-gradient-to-b from-[rgba(178,35,156,1)] via-[rgba(46,45,91,1)] to-[rgba(173,168,172,1)] ">
        <div className="w-24 h-24  flex justify-end flex-col align-text-bottom bg-gradient-to-b from-[rgba(52,52,52)] to-[rgba(39,39,39)] rounded-[50%]">
          <span className="text-right pr-3 pb-2 text-transparent bg-clip-text bg-gradient-to-b from-[rgba(255,54,223,1)] to-[rgba(124,74,116,1)]">
            ...
          </span>
        </div>
      </div>
      <div className="text-transparent bg-clip-text bg-gradient-to-b from-[rgba(255,54,223,1)] to-[rgba(124,74,116,1)]">
        MANGAGO
      </div>
    </div>
  );
};

export default Logo;
