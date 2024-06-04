import createManyCompaniesWithData from "@/services/companies/createManyCompaniesWithData";

const createCompanies = async (companiesArray) => {
  return createManyCompaniesWithData(companiesArray);
}

export default createCompanies;