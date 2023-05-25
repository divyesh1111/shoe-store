import Wrapper from "@/components/Wrapper";
import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import React, {useState} from "react";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import {HiFingerPrint, HiAtSymbol} from "react-icons/hi";

const sign = () => {
  const [show, setShow] = useState(false); //hook for show/hide password

  return (
    <Wrapper className="max-w-[1600px] ">
      <Layout>
        <Head>
          <title>Login</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-black text-4xl font-bold py-4">Explore</h1>
          </div>
          <form className="flex flex-col gap-5">
            {/* Inupt Groups */}
            <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input_text}
              />
              <span className={styles.icon}>
                <HiAtSymbol size={20} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
              />
              <span className={styles.icon} onClick={() => setShow(!show)}>
                <HiFingerPrint size={20} />
              </span>
            </div>
            {/* Sign in button */}
            <div>
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
            <div className="py-10">
              <button type="button" className={styles.button_custom}>
                Sign In with Google
                <Image
                  src={"/assets/Google.svg"}
                  width="20"
                  height="20"
                ></Image>
              </button>
            </div>
            {/* bottom */}
            <p className="text-center text-gray-400">
              Don't have an account yet?
              <Link href={"/register"}>
                <u className="text-black">Sign Up</u>
              </Link>
            </p>
          </form>
        </section>
      </Layout>
    </Wrapper>
  );
};

export default sign;
