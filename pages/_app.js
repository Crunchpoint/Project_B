import "@/styles/globals.scss";
import Context from "@/components/context/Context";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence, motion } from 'framer-motion'
import Script from 'next/script';

export default function App({ 
  Component,
  pageProps: {session, ...pageProps},
  router
}) {

  return (
      <Context>
        <Layout>
          <SessionProvider session={session}>
            <AnimatePresence mode='wait'>
              <motion.div 
                key={router.route} 
                initial="initialState" 
                animate="animateState" 
                exit="exitState"
                transition={{
                  duration: 0.5,
                }}
                variants={{
                  initialState: {
                    opacity: 0.2,
                  },
                  animateState: {
                    opacity: 1,
                  },
                  exitState: {
                  },
              }}>
                <Component {...pageProps} />
                <script
                defer
                src="https://developers.kakao.com/sdk/js/kakao.js"
                ></script>
              </motion.div>
            </AnimatePresence>
          </SessionProvider>
        </Layout>
      </Context>
  );
}
