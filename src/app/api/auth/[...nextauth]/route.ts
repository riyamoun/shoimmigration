import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own logic here to look up the user from the credentials supplied
        // For demo, hardcoding a user - in production, use a database
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Demo User", email: "user@example.com" };
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
