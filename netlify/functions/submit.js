const fetch = require("node-fetch"); // 外部API呼び出しに必要

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);
    const password = body.password;

    // Google Apps Script の Webhook URL をここに貼る
    const webhookUrl = "https://script.google.com/macros/s/あなたのURL/exec";

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
  } catch (error) {
    return {
      statusCode: 500,
      body: `エラー: ${error.message}`
    };
  }
};
