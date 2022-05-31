import * as React from 'react';
import Logo from '../../components/Logo';
import LightNovelCard from '../../components/home/LightNovelCard';

const Home: React.FC = () => {
  return (
    <div className="bg-[rgb(0,0,0)] font-normal bg-gradient-to-b from-[#2e2e2e] via-[rgba(65,63,63,0.34)] to-[rgba(33,33,33,0.98)]">
      <Logo />
      <div className="flex  justify-end  mr-16 ">
        <ul className="grid grid-cols-5 gap-x-10 text-center justify-between text-white text-3xl leading-10">
          <li className="text-yellow-600 text-sh">New Light Novel</li>
          <li>Fantasy</li>
          <li>Shoujo</li>
          <li>Shounen Ai</li>
          <li>Romance</li>
        </ul>
      </div>

      <div className="grid grid-cols-6 gap-6 text-white mt-32 mx-16">
        <div className="col-span-2 grid grid-cols-1 pr-28">
          <div className="text-5xl text-right leading-[72px] self-end">
            Discover the trending light novels
          </div>
          <div className="mt-8  ">
            <button className="text-sm leading-6 rounded-xl border-white border px-4 float-right">
              MORE
            </button>
          </div>
        </div>
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
        />
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
        />
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
        />
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
        />
      </div>
      <div className="w-[96%] my-8 px-5 py-4 border rounded-lg border-[rgba(12,3,10,0.5)] mx-auto bg-[rgba(12,3,10,0.5)] text-white text-4xl">
        Shounen Ai
      </div>
      <div className="grid grid-cols-10 gap-4 mx-16 pb-20">
        <div className="col-span-5 grid grid-cols-1 mr-14 text-white pb-3">
          <div className="text-3xl font-bold text-left leading-[72px] self-end">
            Blown into you
          </div>
          <div className="text-lg font-normal text-left leading-7 self-end">
            Feeling literally nothing towards him, she encounters another girl
            named Nanami, who, to her surprise, immediately reveals her feelings
            for her.
          </div>
          <div className="mt-8 flex space-x-9 ">
            <button className="text-sm leading-6 rounded-xl border-white border px-4 float-right">
              Read now
            </button>
            <button className="text-sm leading-6 rounded-xl border-white border px-4 float-right">
              Bookmark
            </button>
          </div>
        </div>
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
          width="173px"
          height="240px"
        />
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
          width="173px"
          height="240px"
        />
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
          width="173px"
          height="240px"
        />
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
          width="173px"
          height="240px"
        />
        <LightNovelCard
          image="https://cdn.discordapp.com/attachments/895640645727821844/980898471047495730/unknown.png"
          title="Shimotsuki wa Mob ga Suki"
          width="173px"
          height="240px"
        />
      </div>
    </div>
  );
};

export default Home;
