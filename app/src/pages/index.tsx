import { type NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>
          Curiculum Vitae
        </title>
        <meta name="description" content="cv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-white">Home</h1>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
