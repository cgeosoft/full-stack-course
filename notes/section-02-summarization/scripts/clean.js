import { readFile, writeFile } from 'fs/promises'

function removeDublicateSpaces(text) {
    return text
        .replace(/\s+/gm, ' ');
}

function replaceHtmlTags(text) {
    return text
        .replace(/&nbsp;/gm, ' ')
        .replace(/&amp;/gm, '&')
        .replace(/&quot;/gm, '"')
        .replace(/&apos;/gm, "'")
        .replace(/&lt;/gm, '<')
        .replace(/&gt;/gm, '>')
}

function removeHtmlTags(text) {
    return text
        .replace(/<[^>]*>?/gm, '');
}

function removeQuotes(text) {
    return text
        .replace(/^["'](.*)["']$/gm, '$1')
        .replace(/[”“]/gm, '"')
}

function fixPunctuation(text) {
    return text
        .replace(/([a-z0-9\.\"])([\.\?!,-])([A-Z\"])/gm, '$1$2 $3')
}

function clean(text) {

    text = replaceHtmlTags(text);
    text = removeHtmlTags(text);
    text = removeQuotes(text);
    text = fixPunctuation(text);
    text = removeDublicateSpaces(text);
    text = text.trim();

    return text;
}

const raw = await readFile('./tmp/article.html', 'utf-8')
const cleanText = clean(raw)

await writeFile('./tmp/article.txt', cleanText, 'utf-8')