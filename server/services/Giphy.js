const staticResponse = require('./giphy-response');

class Giphy {
  constructor() {
      this.giphyClient = this.createMockGiphyClient();
  }

  createMockGiphyClient() {
    return {
      search: () => staticResponse.data,
    }
  }

  search() {
    return this.giphyClient.search();
  }
}
module.exports = Giphy;
