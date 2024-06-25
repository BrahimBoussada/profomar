import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn(" max-w-[87.5rem] mx-auto px-[1.5rem]", className)}>
      {children}
    </div>
  );
};
