import { Star } from "@/components/icons/star";

export const Badge = ({ text }: { text: string }) => {
  return (
    <div className="w-full flex items-center justify-center gap-[0.5rem] border rounded-full p-[0.5rem] lg:w-[18rem] hover:-translate-y-1 transition-all duration-300 select-none hover:border-yellow-500 ">
      <Star className=" w-auto h-[2rem]" />
      <h3 className=" font-medium">{text}</h3>
    </div>
  );
};
