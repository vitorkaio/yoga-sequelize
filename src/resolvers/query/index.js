import User from './user.query'
import Company from './company.query'
// import Perfil from './perfil.query'

 module.exports = {
    ...User,
    ...Company
    // ...Perfil,
 }