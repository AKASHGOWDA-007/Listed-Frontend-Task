import Head from "next/head";
import Layout from "../../layout/layout";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "../../lib/validate";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    console.log(status);
  }

  // Google Handler Function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className={styles.login}>
        <div>
          <div className={styles.title}>
            <h1>Sign in</h1>
            <p>Sign in to your account</p>
          </div>
          <div className={styles.signInContainer}>
            <div className={styles.social}>
              <button type="button" onClick={handleGoogleSignin}>
                <Image
                  src={"/assets/google.png"}
                  width={15}
                  height={15}
                  alt="Google"
                />
                Sign in with Google
              </button>
            </div>
            <div className={styles.social}>
              <button type="button">
                <Image
                  src={"/assets/apple.png"}
                  width={15}
                  height={15}
                  alt="Apple"
                />
                Sign in with Apple
              </button>
            </div>
          </div>
          {/* form */}
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email ? (
                <span className={styles.error}>{formik.errors.email}</span>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && formik.touched.password ? (
                <span className={styles.error}>{formik.errors.password}</span>
              ) : (
                <></>
              )}
            </div>
            <p>
              <Link href={"/"}>forgot password?</Link>
            </p>
            {/* login buttons */}
            <div className={styles.inputButton}>
              <button type="submit">Sign In</button>
            </div>
          </form>
          {/* bottom */}
          <div className={styles.register}>
            <p>Don’t have an account? </p>
            <Link href={"/register"} className={styles.reg}>
              {" "}
              Register here
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
