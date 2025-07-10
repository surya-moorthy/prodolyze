import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers : [
        CredentialsProvider({
            name: 'Email',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'Enter email' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter password' }
      },
            async authorize(credentials : any) {
                  return {
                    id : "user`",
                    name : "surya Moorthy",
                    email : "suryaceo2030@gmail.com"
                  }

            }
        }),
        GithubProvider({
            clientId : process.env.GITHUB_CLIENT_ID || "",
            clientSecret : process.env.GITHUB_CLIENT_SECRET || "",    
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks : {
         jwt : ({token , user}) => {
              return token
        },
        sessions : ({session , user }) => {
            return session
        }
    }
} 