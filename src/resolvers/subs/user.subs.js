const CREATE_USER = 'CREATE_USER'

const Subscription = {
  userAdded: {
    subscribe: (_, __, { pubsub }) => {
      return pubsub.asyncIterator(CREATE_USER)
    }
  }
}

export default Subscription
