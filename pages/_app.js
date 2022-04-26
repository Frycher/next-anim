import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
