import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    // Configure one or more authentication providers

    providers: [
        GithubProvider({
            clientId: "def48bf2cd6a3a52287c",
            clientSecret: "c6d5e4c692e79febd25769f89eed49d75bfed42f",
          }),
    ],
}
export default NextAuth(authOptions)