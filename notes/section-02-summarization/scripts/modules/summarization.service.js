import OpenAI from 'openai';

export class SummarizationService {

  static async summarize(text) {

    const openai = new OpenAI({
      apiKey: process.env['OPENAI_API_KEY'],
    });

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ 
        role: 'user', 
        content: `
          Write a concise summary of the following:

          ${text}
        `
      }],
      model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion)

    return chatCompletion.choices[0].message.content
  }
}