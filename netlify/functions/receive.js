exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log("=== POST BODY (HTML Smuggling Payload) ===");
  console.log(event.body);   // 여기에 전체 스머글링 코드가 찍힘

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true })
  };
};
