const axios = require('axios');

module.exports.config = {
  name: "gpt",
  version: "1.0",
  hasPermission: 0,
  credits: "RICKCIEL",
  description: "ASK THE AI",
  commandCategory: "Chat GPT",
  cooldowns: 2,
};

const API_SERVER_URL = 'https://free-chatgpt-api.p.rapidapi.com/chat-completion-one';
const RAPIDAPI_HOST = 'free-chatgpt-api.p.rapidapi.com';
const RAPIDAPI_KEY = '3a4a1034d2mshc08465dd3cbf5c3p14d964jsnb0e67ba39814'; // Thay thế API key của bạn tại đây

module.exports.run = async ({ api, event, args }) => {
  try {
    const question = args.join(' ');

    if (!question) {
      return api.sendMessage("[⚜️] ➜ Please provide any question.", event.threadID);
    }

    // Gửi yêu cầu tới API của RapidAPI
    const response = await axios.get(API_SERVER_URL, {
      params: {
        prompt: question,  // Truyền câu hỏi vào dưới dạng tham số 'prompt'
      },
      headers: {
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': RAPIDAPI_KEY, // Thêm API Key của bạn
      },
    });

    // Log toàn bộ phản hồi từ API để kiểm tra
    console.log('API Response:', response.data);

    // Kiểm tra và lấy câu trả lời từ phản hồi của API
    if (response.data && response.data.status === 'success') {
      const answer = response.data.response;  // Lấy câu trả lời từ trường 'response'

      if (answer) {
        api.sendMessage(`[⚜️] ➜ AI said: ${answer}`, event.threadID);
      } else {
        api.sendMessage("[⚜️] ➜ There's something wrong, please try again...", event.threadID);
      }
    } else {
      api.sendMessage("[⚜️] ➜ There's something wrong with the response, please try again...", event.threadID);
    }
  } catch (error) {
    console.error('Error fetching response:', error);
    api.sendMessage("[⚜️] ➜ Error fetching response. Please check the logs.", event.threadID);
  }
};
