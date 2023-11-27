import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import AtlassianProvider from 'next-auth/providers/atlassian'
export const handler=NextAuth({
   
    providers:[
        GoogleProvider({
    clientId:process.env.GOOGLE_CLIENT_ID??"",
    
    clientSecret:process.env.GOOGLE_CLIENT_SECRET??""
}),
AtlassianProvider({
    clientId:process.env.GOOGLE_CLIENT_ID??"",
    
    clientSecret:process.env.GOOGLE_CLIENT_SECRET??""
})


    ]

})

export {handler as GET, handler as POST}