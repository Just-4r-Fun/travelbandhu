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
        const { startDate, endDate, noOfRooms, child, adults, locations, bringPets, commutePrefrence, budgetLow, budgetHigh } = req.body;
        const prompt = `I am giving you some data and on the basis of this data plan a trip for me, start date of trip is ${startDate} and ends on ${endDate}, we are planning to books ${noOfRooms} rooms in hotels is required to stay and we are ${child} children and ${adults} adults, we prefer to travel areound ${locations.join(', ')}, I am ${bringPets ? '' : 'not'} plannig to bring pets also I want my commute prefrences as ${commutePrefrence} and by budget Range is between ${budgetLow} - ${budgetHigh}  use this format to return your response, also donot return any other other text for greet or aything else, only return json

        {
        
        daywisePlan: [
        {
               title: "Day 1",
               points: [
                      "Arrive at your destination via flight.",
                      "Check into the hotel.",
                      "Relax and explore the nearby areas."
                ]
        }
        
        ] 
        
        
        } `
        const userInput = req.body.summary;
        const response = await makeApiCall(`${userInput}\n\n${prompt}`);
        res.status(200).json(JSON.parse(response.choices[0].message.content));
    }
}
