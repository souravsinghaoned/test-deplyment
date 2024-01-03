import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    // Configure one or more authentication providers

    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
}
export default NextAuth(authOptions)