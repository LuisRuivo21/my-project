import logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="sticky top-0 z-50 bg-myYellow w-full h-28 p-4 shadow-navbarShadow mdl:px-24">
      <div className="max-w-screen-2xl h-full mx-auto flex items-center justify-between">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center"
          >
            <Image className="w-10 pr-1 lg:w-16" src={logo} alt="logo" />
            <div className="font-brunoAce text-2xl font-bold lg:text-4xl">
              Blog<span className="text-xl font-thin lg:text-2xl">News</span>
            </div>
          </motion.div>
        </Link>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex items-center justify-between gap-20">
            <Link href="/about">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="font-notoSans text-base hover:text-white hover:underline"
              >
                About Us
              </motion.li>
            </Link>
            <Link href="/news">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-notoSans text-base hover:text-white hover:underline"
              >
                Our News
              </motion.li>
            </Link>
          </ul>
        </div>
        <Link href="https://twitter.com/UA92MCR?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
          <motion.button
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="hidden mdl:inline-flex items-center gap-2 border-solid border-2 border-black rounded-md p-2 hover:bg-black hover:text-white"
          >
            Follow Us
            <BsTwitter />
          </motion.button>
        </Link>
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textBlack cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-black inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-black inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(Node) => (ref.current = Node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end>"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-100 h-full overflow-y-scroll scrollbarHide bg-myYellow flex flex-col items-center px-4 py-10 relative overflow-hidden scrollbar-none"
            >
              <RxCross2
                onClick={() => setShowMenu(false)}
                className="text-3xl cursor-pointer hover:text-white absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link href="/about">
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                      className="font-notoSans text-base hover:text-white hover:underline"
                    >
                      About Us
                    </motion.li>
                  </Link>
                  <Link href="/news">
                    <motion.li
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                      className="font-notoSans text-base hover:text-white hover:underline"
                    >
                      Our News
                    </motion.li>
                  </Link>
                  <Link href="https://twitter.com/UA92MCR?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <motion.li
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                      className="font-notoSans text-base hover:text-white hover:underline flex"
                    >
                      Follow Us
                      <BsTwitter className="pl-1" />
                    </motion.li>
                  </Link>
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
