import { CardSlider } from "@/components/CardSlider";
import { PostedJobField } from "@/components/PostedJobField";
import Image from "next/image";

const personsData = [
  {name: 'Ioanna S.', profession: 'Beauty and Wellness', totalEarning: '$3K+', totalJobs: 12, totalHours: 155, lastContractTogether: 'Bridal Hairstyling for Wedding Ceremony', imgUrl: '/personOne.jpg'  }
]

export default function Home() {
  return (
    <main className="pt-[100px]">
      <div className="sm:max-w-[780px] lg:max-w-[1200px] 2xl:max-w-[1380px] mx-auto">
        <div>
          <div className="mb-[190px] flex justify-between">
            <span className="text-[40px] font-medium text-[#18470D]">
              Welcome back, User
            </span>
            <button
              className="cursor-pointer w-[140px] h-[40px] text-nowrap lg:w-[167px] 2xl:w-[200px] lg:h-[48px] p-[8px_20px] lg:p-[12px_35px] rounded-full bg-[#CBEC5E] text-[#18470D] text-[16px] font-medium"
              type="button"
            >
              + Post a job
            </button>
          </div>
          <PostedJobField />
        </div>
        <div className="mt-[70px]">
          <span className="text-[30px] font-medium text-[#18470D] mb-[60px] block">
            Work together again on something new
          </span>
          <CardSlider />
        </div>
      </div>
    </main>
  );
}
