const fetch = require("node-fetch"); // Netlifyでは必要な場合あり

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const password = body.password;

  const webhookUrl = "あなたのスプレッドシートWebhookのURLをここに貼る";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const text = await response.text();

    return {
      statusCode: 200,
      body: `結果：${text}`
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `エラー: ${error.toString()}`
    };
  }
};
