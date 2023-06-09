import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../../database/conn";
import Users from "../../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed...";
        });

        // check user existence
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user found with Email Please Sign Up...!");
        }

        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // Incorrect Password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesnt match");
        }

        return result;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
});
