import Head from "next/head";
import Layout from "../../layout/layout";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import { useFormik } from "formik";
import { registervalidate } from "../../lib/validate";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registervalidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className={styles.login}>
        <div>
          <div className={styles.title}>
            <h1>Register</h1>
            <p>Sign in to your account</p>
          </div>
          {/* form */}
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                name="Username"
                placeholder="Username"
                {...formik.getFieldProps("username")}
              />
              {formik.errors.username && formik.touched.username ? (
                <span className={styles.error}>{formik.errors.username}</span>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
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
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.errors.password && formik.touched.password ? (
                <span className={styles.error}>{formik.errors.password}</span>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                {...formik.getFieldProps("cpassword")}
              />
              {formik.errors.cpassword && formik.touched.cpassword ? (
                <span className={styles.error}>{formik.errors.cpassword}</span>
              ) : (
                <></>
              )}
            </div>
            <p>
              <Link href={"/"}>forgot password?</Link>
            </p>
            {/* login buttons */}
            <div className={styles.inputButton}>
              <button type="submit">Sign Up</button>
            </div>
          </form>
          {/* bottom */}
          <div className={styles.register}>
            <p>Already have an account? </p>
            <Link href={"/login"} className={styles.reg}>
              {" "}
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
