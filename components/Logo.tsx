import Image from "next/image";
import logo from "@/public/images/logo-renovat.png";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "h-14 lg:h-18" }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="RenovaT Colombia"
      className={`w-auto max-w-[55vw] object-contain object-left ${className}`}
    />
  );
}