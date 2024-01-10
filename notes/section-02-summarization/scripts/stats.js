import { readFile } from "fs/promises";
import { encoding_for_model, get_encoding } from "tiktoken";

const enc = encoding_for_model("text-davinci-003");

const files = [
    "article.html",
    "article.txt",
    "summary.txt",
]

for (const file of files) {
    const text = await readFile(`./tmp/${file}`, "utf-8")
    const tokens = enc.encode(text)
    console.log(`${file}: ${tokens.length} tokens`)
}

enc.free();