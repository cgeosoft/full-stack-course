import { readFile } from "fs/promises";
import { encoding_for_model } from "tiktoken";

const models = {
    "gpt-4": {
        inputPrice: 0.03 / 1000,
        outputPrice: 0.06 / 1000,
    },
    "gpt-3.5-turbo": {
        inputPrice: 0.0010 / 1000,
        outputPrice: 0.0020 / 1000,
    },
}
const model = "gpt-3.5-turbo";

const enc = encoding_for_model(model);

const data = []

const html = await readFile("article.html", "utf-8")
const htmlTokens = enc.encode(html)
data.push({ name: "html", tokens: `${htmlTokens.length}`, cost: htmlTokens.length * models[model].inputPrice })

const text = await readFile("article.txt", "utf-8")
const textTokens = enc.encode(text)
data.push({ name: "text", tokens: `${textTokens.length}`, cost: textTokens.length * models[model].inputPrice })

const diff = textTokens.length - htmlTokens.length
const percentage = Math.round((diff * 100 / htmlTokens.length))
data.push({ name: "diff", tokens: `${diff} (${percentage}%)`, cost: diff * models[model].inputPrice })

const summary = await readFile("summary.txt", "utf-8")
const summaryTokens = enc.encode(summary)
data.push({ name: "summary", tokens: `${summaryTokens.length}`, cost: summaryTokens.length * models[model].outputPrice })

enc.free();

console.table(data)
