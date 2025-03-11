import Image from "next/image";

export const PostedJobField = () => {
  return (
    <div className="  relative">
      <div className=" w-full px-[22px] pt-[70px] h-[455px] bg-white border border-b-[#CBEC5E] border-b-[5px] border-[#EAEAEA] drop-shadow-lg rounded-[30px] relative rounded-tr-none ">
        <Image
          src={"/cardTops.png"}
          width={543}
          height={47}
          alt=""
          className=" absolute top-0 right-0 -translate-y-[48px] translate-x-[1.5px] lg:max-w-[390px] 2xl:h-[48px] 2xl:max-w-[543px]"
          unoptimized
        />
        <div className="h-[100%] flex flex-col justify-center items-center">
          <Image
            src={"/briefcase.png"}
            alt="briefcase"
            width={204}
            height={153}
          />
          <span className="text-[30px] text-black font-medium">
            No job posted yet
          </span>
          <button className="mt-[28px] w-[200px] h-[48px] text-[#18470D] text-[16px] border-1 border-[#545454] rounded-[50px] cursor-pointer font-medium">
            + Post a Job
          </button>
        </div>
      </div>
    </div>
  );
};
