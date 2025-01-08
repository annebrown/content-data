---
title: getStaticProps
description: SSG Fetch
lastModified: '2025-01-08'
---

- SSG
- data before page is rendered on svr

## Example:

Fetch posts from API and display on page:

```js
// pages/posts.js

import React from "react";

export async function getStaticProps() {
    const response = await fetch("
https://jsonplaceholder.typicode.com/posts/
    ");
    const data = await response.json();

    return {
        props: {
            posts: data,
        },
    };
}

export default function Posts({ posts }) {
    return (
        <div>
            <h1>List of Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

```
