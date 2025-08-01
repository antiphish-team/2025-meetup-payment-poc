export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  return {
    id: 2,
    position: "",
    department: null,
    departments: [],
    phone: "8999999229",
    fullName: "yo masta",
    familyName: "yo",
    firstName: "masta",
    thirdName: "",
    email: body.email,
    companyName: body.name,
    employees: 0,
    license: {
      expired: "20 июня 2028 г.",
      supportExpired: "20 мая 2028 г.",
      pointCount: 12,
      employeeCount: Number(200000).toLocaleString("ru"),
    },
  };
});
