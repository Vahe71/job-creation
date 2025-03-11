"use client";
import { useId, useState } from "react";
import { ArrowIcon } from "../../public/icons/ArrowIcon";

type DropdownProps = {
  list: Array<string>;
  label?: string;
};
const DropdownInput: React.FC<DropdownProps> = ({ list, label }) => {
  const inputId = useId();
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <div className="w-full">
      <div>
        <label
          className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px]"
          htmlFor={inputId}
        >
          {label}
        </label>
      </div>
      <div className="mt-[41px]">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className={
            "shadow-[0px_0px_5px_0px_#2871e626] border-[2px] lg:min-h-[33px] 2xl:min-h-[42px]  rounded-[12px] flex items-center px-[8px] py-[10px] lg:py-[4px] 2xl:p-[9px] cursor-pointer" +
            (openMenu ? " border-[#18470D] " : " border-[#EAEAEA] ")
          }
        >
          <div className="select-none w-full min-h-[24px] placeholder:text-[#414750] 2xl:text-[16px] text-[14px] 2xl:placeholder:text-[16px] placeholder:text-[14px] focus:outline-0 text-[#414750]">
            {selectedCountry || list[0]}
          </div>
          <div className={openMenu ? "rotate-180" : ""}>
            <ArrowIcon />
          </div>
        </div>
        <div
          className={`shadow-[2px_2px_5px_0px_#0000001A] border-[0.5px] border-[#EAEAEA] mt-[8px] rounded-[12px] ${
            openMenu ? "block" : "hidden"
          }`}
        >
          <ul className={"px-[8px] py-[12px] max-h-[250px] overflow-y-auto"}>
            {list.map((country, i) => {
              return (
                <li
                  className={`select-none text-[#414750]  ${i !== list.length-1 ? ' mb-[10px] pb-[10px] border-b-1 border-[#EAEAEA] ' : ''} `}
                  key={i}
                >
                  <div
                    className="text-[14px] 2xl:text-[16px] flex gap-[10px] hover:bg-[#F5FFD3] pl-[8px] cursor-pointer"
                    onClick={() => {
                      setSelectedCountry(country);
                      setOpenMenu(false);
                    }}
                  >
                    {country}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownInput;
