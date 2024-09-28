import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

export default function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        }).catch((error) => {
            console.error("Error fetching posts:", error);
        });
    }, [])
    return (
        <div className='py-8 w-full'>
            <Container>
              <div className='flex flex-wrap'>
              {posts.map((post)=>{
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                    </div>

                })}
              </div>
            </Container>

        </div>
      
    )
}
