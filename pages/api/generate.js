import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Please provide personalized advice or guidance on 
how to improve mental health or well-being, 
based on your professional experience as a therapist or 
psychologist: `;

const generateAction = async (req, res) => {
    // Run first prompt
    console.log(`API: ${basePromptPrefix}${req.body.userInput}\n`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${req.body.userInput}`,
        temperature: 0.7,
        max_tokens: 250,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });
};

export default generateAction;



// Incase if I ever want to improve my prompts through 
// the process of prompt chaining
// const basePromptPrefix =
// `
// Write me a detailed table of contents for a blog post with the title below.

// Title:
// `

// const generateAction = async (req, res) => {
//   console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

//   const baseCompletion = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: `${basePromptPrefix}${req.body.userInput}`,
//     temperature: 0.8,
//     max_tokens: 250,
//   });

//   const basePromptOutput = baseCompletion.data.choices.pop();

//   // I build Prompt #2.
//   const secondPrompt = 
//   `

//   Title: ${req.body.userInput}

//   Table of Contents: ${basePromptOutput.text}

//   Blog Post:
//   `

//   // I call the OpenAI API a second time with Prompt #2
//   const secondPromptCompletion = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: `${secondPrompt}`,
//     // I set a higher temperature for this one. Up to you!
//     temperature: 0.85,
// 		// I also increase max_tokens.
//     max_tokens: 1250,
//   });

//   // Get the output
//   const secondPromptOutput = secondPromptCompletion.data.choices.pop();

//   // Send over the Prompt #2's output to our UI instead of Prompt #1's.
//   res.status(200).json({ output: secondPromptOutput });
// };

// export default generateAction;