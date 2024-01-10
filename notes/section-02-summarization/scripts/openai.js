import OpenAI from 'openai';
import { readFile, writeFile } from 'fs/promises'

const article = await readFile('./tmp/article.txt', 'utf-8')

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{
        role: 'user',
        content: `
          Write a concise summary of the following:

          ${article}
        `
    }],
    model: 'gpt-3.5-turbo',
});

await writeFile('./tmp/summary.txt', chatCompletion.choices[0].message.content, 'utf-8')
