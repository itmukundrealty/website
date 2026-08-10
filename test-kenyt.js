const https = require('https');

https.get('https://india.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Look for URLs or endpoints
    const urls = data.match(/https?:\/\/[^\s"'`]+/g);
    console.log("URLs found in loader:", [...new Set(urls)].slice(0, 20));
  });
});
