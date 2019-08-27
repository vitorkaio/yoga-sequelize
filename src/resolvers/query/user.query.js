import { findUser } from '../../controllers/user.controller'

export default {
  async user() {
    return {
      name: 'Kaio',
      age: 20
    }
  },

  /* async findUser(_, { filter }) {
    return await findUser(filter)
  } */

}
