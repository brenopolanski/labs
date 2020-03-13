import { observable, action, decorate } from "mobx";
class KeywordStore {
  keyword = "";
  setKeyword(keyword) {
    this.keyword = keyword;
  }
}
KeywordStore = decorate(KeywordStore, {
  keyword: observable,
  setKeyword: action
});
export { KeywordStore };
