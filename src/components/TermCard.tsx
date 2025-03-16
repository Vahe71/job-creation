import Image from "next/image";
import { useState } from "react";

interface TermCardProps {
  title: string;
  cardData: {
    title: string;
  }[];
  iconSrc: string;
}

export const TermCard: React.FC<TermCardProps> = ({
  title,
  cardData,
  iconSrc,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [cardChecked, setCardChecked] = useState(true); // card-y check anelu stylerna
  const handleRadioChange = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div
      className={
        "py-[16px] w-full sm:w-[282px] h-[164px] rounded-[16px] border-1 lg:py-[11px] sm:py-[11px] 2xl:py-[10px] px-[15px] lg:pr-[14px] 2xl:pr-[9px] cursor-pointer" +
        (cardChecked ? " border-[#000000] " : "border-[#C8C8C8]")
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={`min-w-[18px] min-h-[24px] min-w-[24px] lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] rounded-[50%]  ${
              cardChecked
                ? "border-[5px] border-[#18470D]"
                : "border-[2px] border-[#AEB3BC]"
            } cursor-pointer`}
          ></div>
          <span className="ml-[21px] text-nowrap sm:ml-[14px] 2xl:ml-[17px] sm:text-[16px] 2xl:text-[18px] text-[#000] font-medium">
            {title}
          </span>
        </div>
        <Image
          className="ml-auto sm:ml-[11px] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] object-contain"
          src={iconSrc}
          alt="card-icon"
          unoptimized
          width={40}
          height={40}
        />
      </div>
      <div className="pl-[41px] flex flex-col gap-[10px] mt-[25px] lg:mt-[13px]">
        {
          <ul className="flex flex-col gap-y-[10px]">
            {cardData.map((option, i) => (
              <li
                key={i}
                className="flex items-center gap-[8px] text-[14px] 2xl:text-[16px] text-[#545454]"
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="reason"
                    checked={selectedOption === i}
                    onChange={() => handleRadioChange(i)}
                    className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
                  />
                  <div
                    className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${
                      selectedOption === i
                        ? "bg-[#18470D]"
                        : "border-2 border-[#AEB3BC]"
                    }`}
                  >
                    {selectedOption === i && (
                      <div className="h-[12px] w-[12px] rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
                <span className="cursor-pointer">{option.title}</span>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};
