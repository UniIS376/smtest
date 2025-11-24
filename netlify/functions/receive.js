// netlify/functions/receive.js
exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  // 요청 body 로그 (Netlify 로그에서 확인 가능)
  console.log("POST Body:", event.body);

  // 보낸 데이터를 그대로 다시 내려줌 (에코)
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      received: true,
      body: event.body
    })
  };
};
