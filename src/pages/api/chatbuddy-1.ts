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
        const prompt = `give 5 places to vist according to given prompt and return response in form of json with structure like this and dont give any other text
        also give a boolean key isTravel as true if user is planning a trip or asking suggestions related to travel
        
                    {
                        "res": [
                          {
                            "name": "Palolem Beach",
                            "description": "Palolem Beach is a scenic and relatively serene beach in South Goa known for its crescent shape and clean waters. It offers a laid-back atmosphere, water sports, and beachside shacks."
                          },
                          {
                            "name": "Colva Beach",
                            "description": "Colva Beach is one of the largest and most popular beaches in South Goa. It's known for its vibrant nightlife, water sports, and a variety of beachside activities. The beach is surrounded by coconut palms, adding to its charm."
                          }
                        ],
                       "isTravel":  false
                    }`
        const userInput = req.body.summary;
        const response = await makeApiCall(`${userInput}\n\n${prompt}`);
        res.status(200).json(JSON.parse(response.choices[0].message.content));
    }
}
