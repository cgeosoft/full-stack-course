import { readFile, writeFile } from 'fs/promises';
import { OpenAI } from 'openai';

const article = await readFile('article.txt', 'utf-8')

const apiKey = process.env['OPENAI_API_KEY']

const openai = new OpenAI({ apiKey });

const model = 'gpt-3.5-turbo'

const prompt = `
    Write a concise summary of the following:

    ${article}
  `

const messages = [{
  role: 'user',
  content: prompt
}]

const chatCompletion = await openai.chat.completions.create({
  messages,
  model,
});

const summary = chatCompletion.choices[0].message.content

await writeFile('summary.txt', summary, 'utf-8')