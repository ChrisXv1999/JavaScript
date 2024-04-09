let object = {
  identity: "My Object",
  getIdentityFunc() {
    return function () {
      return this.identity;
    };
  },
};
console.log(object.getIdentityFunc()());// =>undefined 