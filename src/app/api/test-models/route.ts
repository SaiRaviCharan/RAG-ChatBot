import { createGoogleGenerativeAI } from '@ai-sdk/google'

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY
})

export async function GET() {
  try {
    // Try the most common Gemini model names
    const modelNames = [
      'gemini-1.5-pro',
      'gemini-1.5-flash',
      'gemini-pro',
      'models/gemini-1.5-pro',
      'models/gemini-1.5-flash', 
      'models/gemini-pro',
      'gemini-1.5-pro-latest',
      'gemini-1.5-flash-latest'
    ]
    
    return Response.json({ 
      message: 'Try these model names in your chat route',
      modelNames 
    })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}