import { User } from '../models'

export const createUser = async (user) => {
  try {
    return await User.create({...user})
  } 
  catch (error) {
    const errors = []
    error.errors.forEach((err) => {
      errors.push(err.message)
    })
    throw new Error(errors)
  }
}

const findUserById = async (id) => {
  const res = await User.findOne({
    where: {
      id
    }
  })
  return res ? res.dataValues : null
}

const findUserByEmail = async (email) => {
  const res = await User.findOne({
    where: {
      email
    }
  })
  return res ? res.dataValues : null
}

export const findUser = async (filter) => {
  const { id, email } = filter
  try {
    if (id) {
      const user = await findUserById(id)
      if (user) return user
      else return new Error('Not Found!')
    }
    else if (email) {
      const user = await findUserByEmail(email)
      if (user) return user
      else return new Error('Not Found!')
    }
    else return new Error('Not Filter is Passed!')
  } 
  catch (error) {
    const errors = []
    error.errors.forEach((err) => {
      errors.push(err.message)
    })
    throw new Error(errors)
  }
}
