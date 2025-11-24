export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  console.log("POST Body:", event.body);

  return {
    statusCode: 200,
    body: "OK"
  };
};