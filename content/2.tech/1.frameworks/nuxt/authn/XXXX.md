---0
title: stuff to remember
description: copy frequently used snippets
---
To implement authentication with a SQLite database in your Nuxt app deployed on Vercel, you can leverage Nitro's built-in database support. Here's how you could approach this:

1. Enable the experimental database feature in your Nuxt config:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  experimental: {
    database: true
  }
})
```

2. Install the required SQLite dependency:

```bash
npm i -D better-sqlite3
```

3. Configure the database connection in your Nuxt config:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  database: {
    default: {
      connector: 'sqlite',
      options: { name: 'db' }
    }
  }
})
```

4. Use the database in your authentication logic. Here's a basic example of how you might handle user creation and authentication:

```typescript
// server/api/auth.ts
export default defineEventHandler(async (event) => {
  const db = useDatabase();

  // Create users table if it doesn't exist
  await db.sql`CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, username TEXT, github_id TEXT)`;

  // Handle GitHub OAuth callback
  const { code } = getQuery(event);
  
  // Exchange code for access token (you'll need to implement this)
  const accessToken = await exchangeCodeForToken(code);
  
  // Fetch user info from GitHub API (you'll need to implement this)
  const githubUser = await fetchGitHubUser(accessToken);
  
  // Check if user exists, if not create new user
  const { rows } = await db.sql`SELECT * FROM users WHERE github_id = ${githubUser.id}`;
  
  let user;
  if (rows.length === 0) {
    const userId = generateUniqueId(); // Implement this function
    await db.sql`INSERT INTO users (id, username, github_id) VALUES (${userId}, ${githubUser.login}, ${githubUser.id})`;
    user = { id: userId, username: githubUser.login, github_id: githubUser.id };
  } else {
    user = rows[0];
  }

  // Set session or return token
  // ...

  return { user };
});
```



1. Vercel's serverless functions are stateless, so the SQLite database will not persist between function invocations. 

2. If you decide to use Vercel KV, you can configure it like this:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  storage: {
    data: { driver: 'vercelKV' }
  }
})
```

3. Remember to set the `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables in your Vercel project settings.

4. Adjust your API routes to use `/api` in the `server/api/` directory for compatibility with Vercel, as mentioned in the [Vercel deployment documentation](https://nitro.unjs.io/deploy/providers/vercel#api-routes).

This solution provides a basic framework for implementing GitHub sign-on with a database backend in a Nuxt app deployed on Vercel. However, for a production application, you'll need to carefully consider security, error handling, and scalability. You might also want to explore more robust authentication solutions or ORMs for database interactions.