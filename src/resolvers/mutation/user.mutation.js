import { createUser } from '../../controllers/user.controller';

const User = {
  async createUser(_, { data }) {
    // return await createUser({...data})
    return null
  }
}

export default User
