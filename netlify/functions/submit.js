const fetch = require("node-fetch");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const password = body.password;

  const webhookUrl = "https://script.google.com/macros/s/AKfycbzlJXeZR52FFJdUgi_LVIX7t34GOMgHkR5QPUevppcvLGbRKlZb5dhguSBc3iNXxt7B/exec";

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password })
  });

  const result = await response.text();
  return {
    statusCode: 200,
    body: `送信成功: ${result}`
  };
};
