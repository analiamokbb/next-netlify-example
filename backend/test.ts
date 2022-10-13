import { Handler } from '@netlify/functions'

const handler: Handler = async (event) => {

  // event.body is undefined.
  // Content-Length header is missing.
  console.log(event)

  return {
    statusCode: 200,
    body: 'Hello World'
  }
}

export { handler }
