import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import introData from "../public/intro.json";
import LottieAnimation from "../components/LottieAnimation";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Blog News</title>
        <meta name="description" content="Blog News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="bg-myYellow w-full h-screen overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <div className="flex">
          <div className="p-10 mdl:p-32">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="font-playfairDisplay text-5xl py-5"
            >
              Inspiring innovation.
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-playfairDisplay text-2xl py-5 mdl:py-12"
            >
              A journey through the realms of technology and astronomy.
            </motion.div>
            <Link href="/news">
              <div className="py-5">
                <motion.button
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="bg-black text-white rounded-lg p-2 text-2xl font-bold hover:bg-myYellow hover:text-black border-solid border-2 border-black hover:font-bold"
                >
                  Discover more
                </motion.button>
              </div>
            </Link>
          </div>
          <div className="hidden lgl:block py-20">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <LottieAnimation
                animationData={introData}
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
