import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcryptjs from 'bcryptjs';
import getUser from "@/controllers/users/getUser";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(creds) {
        const user = await getUser(creds.email);

        if (!user) {
          return null;
        }

        const isPasswordEquals = bcryptjs.compareSync(creds.password, user.password);

        if (!isPasswordEquals) {
          return null;
        }

        return user;
      }
    })
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/authorization',
    signUp: '/registration'
  },
  callbacks: {
    async session({ session }) {
      const user = await getUser(session.user.email);

      session.user.username = user.username;
      session.user.userId = user.id;

      return session;
   }
 }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };