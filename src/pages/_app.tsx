import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import {SessionProvider, SessionProviderProps } from "next-auth/react";

import NextProgress from "next-progress";
import "../styles/globals.css";
import Providers from "@/context/Providers";

export default function App({ Component, pageProps }: AppProps) {
    //@ts-ignore
    const getLayout = Component.getLayout || ((page) => page);
  
    return (
      <Providers >
       
        
          
                {getLayout(<Component {...pageProps} />)}
             
       
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#fff",
              color: "#121212",
            },
          }}
        />
        <NextProgress
          delay={300}
          options={{ showSpinner: true }}
          color="#7378DE"
        />
        <ToastContainer />
      </Providers>
    );
  }