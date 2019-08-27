import { createCompany } from '../../controllers/company.controller'

const Company = {
  async createCompany(_, { data }) {
    return await createCompany({...data})
  }
}

export default Company

