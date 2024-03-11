import React from "react"
import OpenAI from "openai"

export default function ResponsePage(props) {
    const { userInput } = props
    const [ aiResponse, setAiResponse ] = React.useState('Loading coach response.....')
   
    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_API_KEY
     });
       
   
    const sanitizeAIResponse = (response) => {
       const responseCharsArr = response.split('')
       const sanitizedResponse = responseCharsArr.filter((char) => char !== '#').join('')
       setAiResponse(sanitizedResponse) 
    }
  
      React.useEffect(() => {
        const fetchResultsFromOpenAI = async () => {
            const messages = [
                {
                    role: 'system',
                    content: 'You are a helpful and empathetic weight loss coach. Respond to questions with a response that is 20 words or less.' 
                },
                {
                    role: 'user',
                    content: userInput
                },
            ];

            try {
                
                const response = await openai.chat.completions.create({
                    model: 'gpt-3.5-turbo',
                    messages: messages,
                });

                const returnedResponse = response.choices[0].message.content;
                sanitizeAIResponse(returnedResponse)
               
            } catch (err) {
                console.error(err);
                setAiResponse(error);
            }
        }  
        fetchResultsFromOpenAI()
      },[])
        
      
      
    return (
        <main className="main-container" id="main-container">
            <h3 className="response-title">Weight Loss Coach Response</h3>
            <div className="response-container">
                <p className="response-content" id="ai-response">
                    { aiResponse }
                </p>
            </div>
            
        </main>
    )
}

