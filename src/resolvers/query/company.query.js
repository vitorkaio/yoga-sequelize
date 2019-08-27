// import { findUser } from '../../controllers/user.controller'
import { getAllCompanies } from '../../controllers/company.controller'

export default {
  async companys() {
    return await getAllCompanies()
  },

  /* async findUser(_, { filter }) {
    return await findUser(filter)
  } */

}
