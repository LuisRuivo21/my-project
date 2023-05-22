import Link from "next/link";
import Image from "next/image";
import { image } from "@/public/assets";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black flex items-center justify-between py-2 px-4 mdl:px-10">
      <div>
        <Link href="/">
          <div className="flex items-center">
            <Image className="w-5 pr-1 smd:w-10" src={image} alt="image" />
            <div className="font-brunoAce text-white text-xs smd:text-2xl lg:text-4xl">
              Blog
              <span className="font-thin text-xs smd:text-2xl lg:text-2xl">
                News
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <ul className="flex gap-4 ">
          <Link href="/about">
            <li className="font-notoSans text-small sm:text-xs text-white hover:text-myYellow hover:underline smd:text-lg">
              About Us
            </li>
          </Link>
          <Link href="/about">
            <li className="font-notoSans text-small sm:text-xs text-white hover:text-myYellow hover:underline smd:text-lg">
              Our News
            </li>
          </Link>
          <Link href="/about">
            <li className="font-notoSans text-small sm:text-xs text-white hover:text-myYellow hover:underline flex smd:text-lg">
              Follow Us
              <BsTwitter className="pl-1" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
