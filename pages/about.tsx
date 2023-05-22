import Navbar from "@/components/Navbar";
import Head from "next/head";
import animationData1 from "../public/animation1.json";
import animationData2 from "../public/animation2.json";
import LottieAnimation from "../components/LottieAnimation";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>Blog News</title>
        <meta name="description" content="Blog News" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white w-full h-screen overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-black/0 scrollbar-thumb-myYellow">
        <Navbar />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full text-center font-playfairDisplay text-3xl p-4 md:text-6xl md:p-10"
        >
          Exploring the Cosmos with Modern Tech
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex p-4 font-notoSans text-lg"
        >
          <div>
            Welcome to our blog, a captivating platform where technology and
            astronomy converge, igniting the imagination and expanding our
            understanding of the vast wonders of the universe. As passionate
            enthusiasts in these awe-inspiring fields, we are thrilled to share
            our knowledge, insights, and discoveries with you.
            <br />
            <br />
            In this digital age, technology permeates every aspect of our lives,
            revolutionizing the way we communicate, work, and explore. From
            cutting-edge gadgets to innovative breakthroughs, we are dedicated
            to bringing you the latest news, trends, and analyses that shape the
            ever-evolving landscape of technology. Whether you are an early
            adopter, a curious learner, or simply intrigued by the
            transformative power of technology, our blog is your go-to
            destination for insightful articles, reviews, and thought-provoking
            discussions.
            <br />
            <br />
            Beyond the realm of technology lies a universe of mysteries, filled
            with celestial bodies, breathtaking phenomena, and profound
            questions about our place in the cosmos. Astronomy, the study of
            these celestial wonders, allows us to unravel the secrets of the
            universe and glimpse into its past, present, and future. Join us as
            we embark on a cosmic journey, exploring the wonders of distant
            galaxies, unraveling the enigma of black holes, and delving into the
            intricacies of star formation. Through captivating narratives,
            stunning visuals, and expert commentary, we aim to bring the beauty
            and complexity of astronomy closer to your fingertips.
            <br />
            <br />
            At our blog, we strive to bridge the gap between these two
            fascinating domains, showcasing the remarkable synergies between
            technology and astronomy. We believe that technology is not merely a
            tool for innovation, but also a gateway to unraveling the mysteries
            of the cosmos. From the role of technology in space exploration to
            the development of advanced telescopes and astronomical instruments,
            we delve into the ways in which these fields intertwine and push the
            boundaries of human knowledge.
            <br />
            <br />
            Whether you are a tech enthusiast eager to explore the intersection
            of technology and astronomy or an astronomy aficionado seeking to
            stay updated on the latest technological advancements shaping the
            field, our blog offers a wealth of engaging content to satisfy your
            curiosity. Join us on this exciting journey of discovery and
            exploration as we uncover the wonders of the universe and delve into
            the cutting-edge advancements that shape our technological world.
            <br />
            <br />
          </div>
          <div className="hidden lg:block">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <LottieAnimation
                animationData={animationData1}
                width={400}
                height={400}
              />
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <LottieAnimation
                animationData={animationData2}
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </motion.div>
        <Footer />
      </main>
    </>
  );
}
