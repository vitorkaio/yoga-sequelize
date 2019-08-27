// import jwt from 'jwt-simple'

// Essa function ficará disponível para todos os resolvers da api
export default async function context({ req }) {
  // const auth = req.headers.authorization
  const text = 'text this context'
  // Injeta o obj no contexto
  return {
    text
    }
}
