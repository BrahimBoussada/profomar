interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroProps) => {
  return <h1 className={className}>{children}</h1>;
};

export const HeroParagraph = ({ children, className }: HeroProps) => {
  return <p className={className}>{children}</p>;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className=" text-center ">{children}</div>;
};
