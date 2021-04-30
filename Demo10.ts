class Lady {
  content = "Hi, 帅哥。";
  sayHello() {
    return this.content;
  }
}

class XiaoJieJie extends Lady {
  content = "Hi, Season.";
  sayHello() {
    return super.sayHello() + "你好！";
  }
  sayLove() {
    return "I love you!";
  }
}

const goddess = new XiaoJieJie();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
