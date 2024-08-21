import Image from "next/image";
import banner from "@/public/images/banner.png";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="relative">
        <Image src={banner} alt="banner" />
        <div className=" absolute top-1/2 left-1/2 -translate-x-[90%] -translate-y-1/2">
          <p className="font-lato text-[16px] font-[700] text-[#FB2E86] leading-[28px] mb-[12px]">
            Best Furniture For Your Castle....
          </p>
          <h1 className="font-josefin font-[700] text-[#000] text-[53px] w-[644px] mb-[12px]">
            New Furniture Collection Trends in 2020
          </h1>
          <h2 className="font-lato text-[16px] font-[700] text-[#8A8FB9] leading-[28px] mb-[27px] w-[559px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </h2>
          <Link
            href={""}
            className="text-white font-josefin font-[600] text-[17px] px-[40px] py-[16px] bg-[#FB2E86] rounded-[5px]"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
