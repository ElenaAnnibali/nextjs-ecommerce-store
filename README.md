This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Database Setup

Copy the .env.example file to a new file called .env (ignored from Git) and fill in the necessary information.

Follow the instructions from the PostgreSQL step in UpLeveled's System Setup Instructions.

Then, connect to the built-in postgres database as administrator in order to create the database:

Windows

If it asks for a password, use postgres.

psql -U postgres
macOS

psql postgres
Linux

sudo -u postgres psql
Once you have connected, run the following to create the database:

CREATE DATABASE <database name>;
CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';
GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>;
Quit psql using the following command:

\q
On Linux, you will also need to create a Linux system user with a name matching the user name you used in the database. It will prompt you to create a password for the user - choose the same password as for the database above.

sudo adduser <user name>
Once you're ready to use the new user, reconnect using the following command.

Windows and macOS:

psql -U <user name> <database name>
Linux:

sudo -u <user name> psql -U <user name> <database name>
Running the migrations
To set up the structure and the content of the database, run the migrations using Ley:

yarn migrate up
To reverse the last single migration, run:

yarn migrate down

## Postgres error fix

pg_ctl -D /usr/local/var/postgres stop
