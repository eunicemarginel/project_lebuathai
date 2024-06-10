import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    { title: 'New Menu Items', content: 'We have added new items to our menu!', date: '2024-05-20' },
    { title: 'Upcoming Event', content: 'Join us for our summer special event!', date: '2024-06-15' },
  ];

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
