import { Company } from '../models'

// Retorna todas as companies cadastradas
export const getAllCompanies = async () => {
  try {
    const res = await Company.findAll({})
    if (res) {
      return res
    }
    return new Error("Not Found!")
  } 
  catch (error) {
    return new Error(error)
  }
}


export const createCompany = async (data) => {
  try {
    return await Company.create({...data})  
  } 
  catch (error) {
    return new Error(error)
  }
}
