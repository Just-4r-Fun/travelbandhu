import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

async function makeApiCall(prompt: string) {
  const apiUrl = 'https://openai-hack-6.openai.azure.com/openai/deployments/openai-Hack-key6/chat/completions?api-version=2023-07-01-preview&api_key=1bc02025de684d70956ab93e1c55df64&region=Japaneast';

  const headers = new Headers({
    'Content-Type': 'application/json',
    'api-key': '1bc02025de684d70956ab93e1c55df64'
  });

  const requestData = {
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  };

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(requestData)
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    return await response.json();
  } catch (error) {
    return error;
  }
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        console.log(req.body)
        const prompt = "give 10 suggestions for generating cool Captions for travelling image on instagram for a person of not more then 10 words using following feeds, also give the response in an array format for example:     \n        ['caption1', 'caption2', 'caption3']    \n        please return raw response without any formatting or line breaks in a single line without \n";
        const userInput = req.body.summary;
        const response = await makeApiCall(`${prompt}\n\n${userInput}`);
        res.status(200).json(response)
    }
}
