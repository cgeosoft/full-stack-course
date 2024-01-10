# Full Stack - Project Course

In this series of talks we will build a full stack application. It will be a news aggregator that will scrape the news, summarize them using AI, and generate an audio of the summary. We will cover not only the backend and frontend, but also the design of and the publishing. We will use a lot of different technologies but the main focus will be on javascript. Also we will break the typical order of the sections, and we will start with the most important features first, building the application from the center out. 

In this series of talks we will build a full stack application. I named this series of talks "Full Full Stack" because I will cover not only the backend and frontend, but also the design of and the publishing. We will use a lot of different technologies and tools to achieve this goal, but of course many of those will be around javascript. We will build a simple news aggregator. This project is already published and soon I will make its source code available. It was built because I was tired of reading the news, and I wanted to listen to them instead. But listening to long articles is not a good. Nobody has time for that. So I decided to build a simple application that will scrape the news, summarize them, and generate an audio of the summary. This way I can listen to the news while I am driving, or doing something else.

Also I decided to break the typical order of the sections, and to start with the most important features first. This will allow us to build the application from the center out, and to focus on the most important parts before the less ones.

## Sections

- [Section 01 - Web Scraping](./notes/section-01-web-scraping/README.md): Scraping a website and returning its content.
- [Section 02 - Summarization](./notes/section-02-summarization/README.md): Summarizing the content of an article with AI.
- [Section 03 - Audio Generation](./notes/section-03-audio-generation/README.md): Generating an audio of the summary of an article.
- [Section 04 - Cron and Queues](./notes/section-04-cron-and-queues/README.md): Periodically fetching articles from different rss feeds. Use queues to prevent the server from crashing.
- [Section 05 - Backend](./notes/section-05-backend/README.md): Build a backend with NestJS, TypeORM, and CQRS.
- [Section 06 - Frontend](./notes/section-06-frontend/README.md): Build a frontend with Pug, AlpineJS, and Tailwind.
- [Section 07 - Testing](./notes/section-07-testing/README.md): Test the backend and the frontend with Jest.
- [Section 08 - Docker](./notes/section-08-docker/README.md): Build a docker image and automate the deployment with Github Actions.
- [Section 09 - Release](./notes/section-09-release/README.md): Release the application on the wild with Traefik.
