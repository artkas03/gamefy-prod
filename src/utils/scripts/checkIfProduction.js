const checkIfProduction = () => {
  return process.env.NODE_ENV === 'production';
}

export default checkIfProduction;