<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## ADJUSTMENTS

# Tomisha API Optimization & Improvements

## 1. GitHub Repository

[Tomisha GitHub Repository](https://github.com/Yaseminh/Tomisha)

## 2. Collection

Import the file I sent you to try the APIs.

## 3. Function Improvement

### 3.1. Check for Invalid IDs

The function you provide may have the following problems:
- **Issue**: If the ID is invalid, the code may fail.
- **Improvement**: A validation should be done to verify the ID in a valid format.


```javascript
import { isValidObjectId } from 'mongoose';

async function getUser(id: string) {
    if (!isValidObjectId(id)) {
        throw new Error('Invalid ID format');
    }
    const user = await UserModel.findOne({ id });
    if (!user) throw new Error('User not found');
    return user;
}
```

Time: 1 minute

Timed Error Conditions: Error messages should generally be more meaningful to the user, for example using HTTP errors instead of user not found and returning a more descriptive response.
<<<<<<< HEAD
   
=======

>>>>>>> 1816e68 (README güncellendi)
Time: 2 minutes

## Architecture Understanding - Architecture Understanding

Monolithic: Everything is in a single application. It provides rapid development in small projects, but can be difficult to manage in large projects.
Microservices: The application is separated into different services, each of which can be scaled independently. It provides better scalability in large projects, but complexity increases.
Monolithic may be preferred in small projects and in cases where rapid development is required; Microservices will be suitable for larger and more complex projects.

Time: half hour

## Performance Optimization

Database Indexing
Purpose: To increase the speed of database queries. In particular, we need to index the relevant fields so that queries based on search filters work quickly. For example, indexes can be added for frequently queried fields such as title, company, location.
Actions:
I add appropriate indexes to these fields in MongoDB.
I consider the indexing costs (disk and memory usage), so I only add indexes for frequently used fields.

Estimated Time: 1-2 hours (Indexes will be created and tested on the database.)

Caching
<<<<<<< HEAD
   
=======

>>>>>>> 1816e68 (README güncellendi)
Purpose: Instead of frequently made queries going to the database every time, provide fast access by caching the results.
Actions:
We keep frequently made search queries in memory by using a caching tool such as Redis.
For example, for a specific job posting query, I put the result in Redis and the query time is reduced.
By limiting the cache to a certain time, I ensure that the data remains up-to-date without creating unnecessary load on the database.

Estimated Time: 2-3 hours (Including Redis installation, configuration, and testing.)

Query Structure Optimization
<<<<<<< HEAD
   
=======

>>>>>>> 1816e68 (README güncellendi)
Goal: Make queries more efficient. This includes minimizing unnecessary data retrieval, complex JOIN, or $lookup operations.
Actions:
I analyze database queries to prevent unnecessary data retrieval. For example, only pull summary information for job postings that will be displayed as a search result.
To make queries faster, I use find directly instead of aggregate when necessary, and I also optimize projections and limits.

Estimated Time: 1-2 hours (Review and optimize existing queries.)

Database Queries and Advanced Optimization

Goal: Sometimes, special optimizations may be required for complex queries or large data sets.
Actions:
I analyze the database and create optimized data models to reduce query complexity.
I can use query optimizations on Mongoose (e.g. .lean(), .select()).

Estimated Time: 2 hours (Customized data models and tests.)

Monitoring and Profiling
<<<<<<< HEAD
   
=======

>>>>>>> 1816e68 (README güncellendi)
Objective: To better identify performance bottlenecks and develop the right solution.
Actions:
I use appropriate tools to monitor the API (e.g. performance monitoring with New Relic or Prometheus).
Identify and optimize the most used API routes and queries.

Estimated Time: 2 hours (Adjustments after profiling and testing.)

Total Estimated Time:

Database Indexing: 1-2 hours

Caching (Redis): 2-3 hours

Query Structure Optimization: 1-2 hours

Database and Advanced Optimization: 2 hours

Monitoring and Profiling: 2 hours

Total Time: Approximately 8-11 hours (With Tests)

This time may vary depending on the complexity of the optimization and may vary depending on the current database structure and API usage. If you have not used Redis before, it may take a little more time during the configuration and testing phase. However, in general, it can take 1-2 business days to complete the optimization with basic steps and tests

## Communication & Independence
<<<<<<< HEAD
   
=======

>>>>>>> 1816e68 (README güncellendi)
How Do You Deal with Unknown Requirements?: I clarify the requirements by asking questions and fill in the missing information.
What Do You Do When You Are Stuck?: I try to debug first, then I get help from communities or mentors.
How Do You Ensure Code Quality?: I follow code standards to ensure that the code is readable, understandable and testable.

Time: half hour


```bash

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
