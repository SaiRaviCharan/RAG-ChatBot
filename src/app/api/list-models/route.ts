export async function GET() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_API_KEY}`)
    const data = await response.json()
    
    return Response.json({ 
      availableModels: data.models?.map(model => ({
        name: model.name,
        displayName: model.displayName,
        supportedGenerationMethods: model.supportedGenerationMethods
      })) || []
    })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}