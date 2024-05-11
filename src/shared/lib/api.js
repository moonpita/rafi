class API {

  constructor() {
    this.baseAPI = 'https://rafi-frontend-test.com';
  }

  addToFavorite(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(id, ' is added to favorite')
      }, 500);
    })
  }


}