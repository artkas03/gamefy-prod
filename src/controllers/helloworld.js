const helloworld = async(slug) => {
  const data = await Promise.resolve('DATA with slug: ' + slug);

  return data;
}

export default helloworld;