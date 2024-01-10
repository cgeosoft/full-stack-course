import { argv } from "process";
import { ScrapeService } from "./modules/scrape.service.js";
import { SummarizationService } from "./modules/summarization.service.js";

const url = argv[2];

console.log(`[SCRAPING ]\n${url}...\n`)

const article = await ScrapeService.scrape(url)

console.log(`[SUMMARIZE]\n${article.title}...\n`)

console.log(article.content)

const summary = await SummarizationService.summarize(article.content)

console.log(`[SUMMARY]\n${summary}\n\n`)