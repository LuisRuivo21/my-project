import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function NewsPage() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Head>
        <title>Blog News</title>
        <meta name="description" content="Blog News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white w-full h-screen overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-black/0 scrollbar-thumb-myYellow.">
        <Navbar />
        <div className="mx-auto px-4 py-24">
          <div className="w-full flex justify-center">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-playfairDisplay text-6xl text-center"
            >
              Trending News
            </motion.div>
          </div>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-32"
          >
            <Card
              title="Title of the article"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
              item="Astronomy"
              link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
            />
            <Card
              title="Title of the article"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
              item="Astronomy"
              link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
            />
            <Card
              title="Title of the article"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
              item="Astronomy"
              link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
            />
            <Card
              title="Title of the article"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
              item="Astronomy"
              link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
            />
            <Card
              title="Title of the article"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
              item="Astronomy"
              link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
            />
            <Card
              title="Title of the article"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
              item="Astronomy"
              link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
            />
            {showMore && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card
                    title="Title of the article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
                    item="Astronomy"
                    link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card
                    title="Title of the article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
                    item="Astronomy"
                    link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card
                    title="Title of the article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
                    item="Astronomy"
                    link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card
                    title="Title of the article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
                    item="Astronomy"
                    link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card
                    title="Title of the article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
                    item="Astronomy"
                    link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card
                    title="Title of the article"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet
            provident quisquam molestias ab illo ullam doloribus odio? Vitae,
            quaerat."
                    item="Astronomy"
                    link="https://tech.hindustantimes.com/tech/news/nasa-astronomy-picture-of-the-day-20-may-2023-stunning-view-of-jupiters-moon-europa-71684564144900.html"
                  />
                </motion.div>
              </>
            )}
          </motion.div>
          <div className="mt-12 flex items-center justify-center">
            {showMore ? (
              <button
                onClick={() => setShowMore(false)}
                className="w-36 h-12 rounded-md text-[15px] bg-myYellow border-textBlack hover:border-black hover:border-2 hover:bg-[#008080] hover:text-white duration-300"
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={() => setShowMore(true)}
                className="w-36 h-12 rounded-md text-[15px] bg-myYellow border-textBlack hover:border-black hover:border-2 hover:bg-[#008080] hover:text-white duration-300"
              >
                Show More
              </button>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
