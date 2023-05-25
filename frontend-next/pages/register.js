import Wrapper from "@/components/Wrapper";
import Layout from "@/layout/reglayout";
import Head from "next/head";
import Link from "next/link";
import React, {useState} from "react";
import styles from "../styles/Form.module.css";
import {HiAtSymbol, HiFingerPrint, HiUser} from "react-icons/hi";

const register = () => {
  const [show, setShow] = useState({password: false, cpassword: false});
  return (
    <Wrapper className="max-w-[1600px] ">
      <Layout>
        <Head>
          <title>Login</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col gap-10">
          <div className="title">
            <h1 className="text-black text-4xl font-bold py-4">SIGN UP</h1>
          </div>
          <form className="flex flex-col gap-5">
            {/* Inupt Groups */}
            <div className={styles.input_group}>
              <input
                type="text"
                name="Username"
                placeholder="Username"
                className={styles.input_text}
              />
              <span className={styles.icon}>
                <HiUser size={20} />
              </span>
            </div>
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
                type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className={styles.input_text}
              />
              <span
                className={styles.icon}
                onClick={() => setShow({...show, password: !show.password})} //Here (!show.cpassword) can't work coz we have to set initial value first....so we would use spread opt(...)
              >
                <HiFingerPrint size={20} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                className={styles.input_text}
              />
              <span
                className={styles.icon}
                onClick={() => setShow({...show, cpassword: !show.cpassword})} //Here (!show.cpassword) can't work coz we have to set initial value first....so we would use spread opt(...)
              >
                <HiFingerPrint size={20} />
              </span>
            </div>
            {/* Sign in button */}
            <div className="py-3">
              <button type="submit" className={styles.button}>
                Register
              </button>
            </div>
            {/* bottom */}
            <p className="text-center text-gray-400">
              Alreadey have an account?
              <Link href={"/login"}>
                <u className="text-black">Sign In</u>
              </Link>
            </p>
          </form>
        </section>
      </Layout>
    </Wrapper>
  );
};

export default register;
