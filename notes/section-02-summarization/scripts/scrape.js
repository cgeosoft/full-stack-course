import { writeFile } from 'fs/promises';
import { extract } from '@extractus/article-extractor';
import { argv } from "process";

const url = argv[2];

const result = await extract(url)

await writeFile('article.html', result.content, 'utf-8')
