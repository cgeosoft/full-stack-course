import { readFile, writeFile } from 'fs/promises';

let html = await readFile('article.html', 'utf-8')

const text = html
    // Replace html spaces with normal spaces
    .replace(/&nbsp;/gm, ' ')
    // Replace ampersands with normal ampersands
    .replace(/&amp;/gm, '&')
    // Replace quotes with normal quotes
    .replace(/&quot;/gm, '"')
    // Replace apostrophes with normal apostrophes
    .replace(/&apos;/gm, "'")
    // Replace less than signs with normal less than signs
    .replace(/&lt;/gm, '<')
    // Replace greater than signs with normal greater than signs
    .replace(/&gt;/gm, '>')
    // Remove html tags
    .replace(/<[^>]*>?/gm, '')
    // Remove quotes
    .replace(/^["'](.*)["']$/gm, '$1')
    // Replace fancy quotes with normal quotes
    .replace(/[”“]/gm, '"')
    // Fix punctuation
    .replace(/([a-z0-9\.\"])([\.\?!,-])([A-Z\"])/gm, '$1$2 $3')
    // Remove whitespace characters
    .replace(/\s+/gm, ' ')
    // Remove leading and trailing whitespace
    .trim()

await writeFile('article.txt', text, 'utf-8')