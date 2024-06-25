import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={cn(
        "pt-[4rem] pb-[1.5rem] md:pt-[4rem] md:pb-[2rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SectionHeading = ({ children, className }: SectionProps) => {
  return (
    <h2 className={cn("pb-[1rem] font-ubuntu ", className)}>{children}</h2>
  );
};

export const SectionParagraph = ({ children, className }: SectionProps) => {
  return <p className={className}>{children}</p>;
};
