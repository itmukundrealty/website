const https = require('https');

function checkBot(botId) {
  const url = `https://india.kenyt.ai/botapp/ChatbotUI/?bot=${botId}`;
  https.get(url, (res) => {
    console.log(`Bot ${botId} HTTP Status:`, res.statusCode);
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`Bot ${botId} Length:`, data.length);
      if (data.includes('bot not found') || data.includes('error') || data.includes('Invalid')) {
         console.log(`Bot ${botId} might be invalid.`);
      }
    });
  }).on('error', (err) => {
    console.log(`Error checking bot ${botId}:`, err.message);
  });
}

checkBot('23710952'); // Common (Working)
checkBot('22056372'); // Kedar (Not working)
checkBot('26710585'); // Kailash (Not working)
