import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faCaretDown,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

const items = [
  'trái cây',
  'thịt, trứng',
  'rau củ quả',
  'sữa, bơ, phô mai',
  'hải sản',
  'gạo, mì ăn liền',
  'đồ uống, bia rượu',
  'bánh kẹo',
];

const Header: React.FC = () => {
  return (
    <header className="h-[100px] bg-[#2794FF] pt-4 text-white leading-4">
      <div className="w-[1270px] mx-auto flex justify-between  ">
        <div className="basis-[190px]">
          <Image
            width={60}
            height={40}
            src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
            alt="logo"
          />
        </div>
        <div className="text-sm mr-9">
          <input
            className="w-[626px] h-[40px] p-2 text-black"
            type="text"
            name="search"
            placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
          />
          <button className="h-[40px] bg-[#0D5CB6] w-[120px]">
            {' '}
            <FontAwesomeIcon color="white" icon={faMagnifyingGlass} />
            Tìm kiếm
          </button>
        </div>
        <div className="flex items-center pb-1">
          <FontAwesomeIcon size="2x" color="white" icon={faUser} />
          <span className="fex flex-col text-xs">
            <div>Dang nhap/Dangky</div>
            <div>
              Tai khoan <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </span>
        </div>
        <div className="flex items-end pb-3 text-xs">
          <FontAwesomeIcon size="2x" color="white" icon={faCartShopping} />
          <div>Gio Hang</div>
        </div>
      </div>
      <div className="w-[1270px] mx-auto flex justify-between last:mx-auto">
        <div className="flex justify-between  mt-3">
          <div className="basis-[190px]">
            <Image
              src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
              alt="free ship"
              width={83}
              height={12}
            />
          </div>
          <div className="flex justify-between ml-14 w-[626px] text-xs">
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}{' '}
          </div>
        </div>
        <div className=" text-xs flex p-1 px-2 bg-[#51AEFF] rounded-full">
          <FontAwesomeIcon icon={faStore} />
          <div className="ml-3">Ban hang cung tiki</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
