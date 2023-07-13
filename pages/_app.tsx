import '../styles/globals.css';
import type { AppProps } from 'next/app';

// components
import Layout from '../components/Layout';
import Transition from "../components/Transition"

// router
import { useRouter } from 'next/router'

// framer motion
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <Layout>
    <motion.div key={router.route} className='h-full'>
      <Transition />
      <Component {...pageProps} />;
    </motion.div>
  </Layout>
}

export default MyApp;
