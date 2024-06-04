import getUser from "@/services/users/getUser";

const getFieldToSearchBy = (params) => Object.entries(params).find((entry) => entry[1]);

const getUserFullData = async (params) => {
  const [fieldToSearchBy, fieldValue] = getFieldToSearchBy(params);

  const requestOptions = {
    fieldToSearchBy,
    fieldValue
  }

  const user = await getUser(requestOptions, {
    fieldsToInclude: [
      'id',
      'comments',
      'collection'
    ]
  });

  const responceObject = {
    id: user.id,
    commentsLength: user.comments.length || 0,
    collection: user.collection
  }

  return responceObject;
}

export default getUserFullData;