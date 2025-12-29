import { CLIENT_RENEG_LIMIT } from "node:tls";
import { prisma } from "./lib/prisma";

async function run() {

    // const createUser = await prisma.user.create({
    //     data: {
    //         name: 'Susanto',
    //         email: 'susanto12@gmail.com'
    //     }
    // })

    // console.log('Created User', createUser)

    // create post for user id = 1
    // const createPost = await prisma.post.create({
    //     data: {
    //        title: 'This is title' ,
    //        content: 'This is a big content',
    //        authorId:1
    //     }
    // })
    // console.log('Created Post', createPost)

    // create profile
    const createdProfile = await prisma.profile.create({
        data: {
            bio: 'web dev at ph',
            userId: 1
        }
    })
    console.log("created ", createdProfile)
    
}

run()