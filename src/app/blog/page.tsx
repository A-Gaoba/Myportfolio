"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Post } from '@prisma/client';

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-6">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content.substring(0, 200)}...</p>
            <Link href={`/blog/${post.id}`}>
              <a className="text-blue-600 hover:underline">Read more</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
