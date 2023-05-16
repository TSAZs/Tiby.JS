/*
        Copyright TSAZ @ 2023
        Needs help? https://tsazs.github.io/TsazSite/pages/support.html
*/

const axios = require("axios");
class Client {
    async question(question) {
      try {
        const response = await axios.get(`https://tiby-ai-emf6uczyy-tsazs.vercel.app/response?query=${question}`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  }
module.exports = { Client };
