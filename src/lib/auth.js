import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectDb } from "./connectDb";
import { User } from "./models";
import { getUsers } from "./data";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        connectDb();
        try {
          const userExists = await User.findOne({ email: profile.email });
          if (!userExists) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              img: profile?.picture,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });
      session.user = user;
      return session;
    },
  },
});
