import { connectMongoDB } from "@/app/lib/mongodb";
import user from "@/app/model/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const saltRounds = 10;
const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const userData = await user.findOne({ email });
          if (!userData) {
            return null;
          }
          const checkPassword =  bcrypt.compareSync(password, userData.password);
          if (!checkPassword) {
            return null;
          }
          return userData;
          
        } catch (error) {
          console.log(error);
          return { error: 'An error occurred during authentication' };
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
