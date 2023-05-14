import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import Head from 'next/head';
import Card from '~/components/card';
import { api } from '~/utils/api';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setUser } from '../main/store/store';

const Dashboard: React.FC = () => {

  const hello = api.example.getSkills.useQuery();
  
  const main = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();

  console.log(main);

  useEffect(() => {
    dispatch(setUser({
      name: 'test',
      email: 'test',
      image: 'test',
      id: 'test',
    }));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>
          Dashboard | Curiculum Vitae
        </title>
        <meta name="description" content="cv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#9aa]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        </motion.div>
        {hello.data?.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        ))}
        <Card />
      </main>
    </>
  )
}

export default Dashboard;
