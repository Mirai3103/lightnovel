import type { NextPage } from 'next';
import Header from '../components/landing/Header';
import Image from 'next/image';
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(0,0,0)] bg-gradient-to-b fixed w-screen h-screen from-[rgba(52,52,52,1)] via-[rgba(0,0,0,0.84)] to-[rgba(52,52,52,0.98)]">
      <Header className="z-10" />
      <div className="bg-[rgba(232,133,17,0.08)] w-[722px] h-[635px] rounded-[50%] absolute -top-[30%] -right-[6%]"></div>
      <div className="grid grid-cols-2 absolute -bottom-[9px] -left-[5px]">
        <div>
          <Image
            src={
              'https://cdn.discordapp.com/attachments/745580405088059442/980725225115246702/landing.png'
            }
            alt="gai alime"
            width={750}
            height={553}
          />
        </div>
        <div className=" text-white text-left">
          <h2 className="text-7xl mb-10">Love The Feeling</h2>
          <div className="text-3xl mb-20">
            Read thousands of light novel in just one click
          </div>
          <button className="bg-[#3B5E8B] rounded-md px-14 py-6 text-left text-3xl">
            Read now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
