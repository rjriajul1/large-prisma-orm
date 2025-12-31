import { CLIENT_RENEG_LIMIT } from "node:tls";
import { prisma } from "./lib/prisma";
import { inflate } from "node:zlib";
import { toUSVString } from "node:util";

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
    // const createdProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'web dev at ph',
    //         userId: 1
    //     }
    // })
    // console.log("created ", createdProfile)

    // Retrive all users
    // const users = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profiles: true
    //     }
    //     select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //         posts: true,
    //         profiles: true
    //     }
    // })
    // console.dir(users, {depth: Infinity})

    // udapte user data
//     const updateUser = await prisma.profile.update({
//         where: {
//             userId: 1
//         },
//         data: {
//             bio: 'Web Developer and Mentor',
//             dateOfBrith: '2025-12-29T18:32:13.204Z'
//         },
//         select: {
//             id: true,
//             bio: true,
//             user: {
//                 select: {
//                     name: true,
//                     email: true
//                 }
//             }
//         }
//     })

//   console.log('Update User', updateUser) 

// delete user 
// const deleteUser = await prisma.user.delete({
//     where: {
//         id: 2
//     }
// })
// console.log('delete user', deleteUser)
// get user data by id
// const getUserDataById = await prisma.user.findUnique({
//     where: {
//         id: 2
//     },
//     include: {
//         posts: true,
//         profiles: true
//     }
// })
// console.log(getUserDataById)

const upsertuser = await prisma.user.upsert({
    where: {
        email: 'riajul52@gmail.com'
    },
    update: {
        name: 'Riajul Islam 2'
    },
    create: {
        name: 'Riajul Islam 3',
        email: 'riajul52@gmail.com'
    }
})
console.log(upsertuser)
}

run();