import createUserWithData from "@/services/users/createUserWithData";
import bcryptjs from 'bcryptjs';

const createUser = async(userData) => {
  const {
    username,
    email,
    password
  } = userData;

  const hash = bcryptjs.hashSync(password, 10);

  return createUserWithData({
    username,
    email,
    password: hash
  });
}

export default createUser;