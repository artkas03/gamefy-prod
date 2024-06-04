import getUserByEmail from "@/services/users/getUserByEmail";

const getUser = async (userEmail) => {
  return getUserByEmail(userEmail, {
    fieldToInclude: [
      'collection'
    ]
  })
}

export default getUser;