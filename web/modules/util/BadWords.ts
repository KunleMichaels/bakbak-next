import Filter from "bad-words";
const filter = new Filter();
filter.removeWords("tit");

export { filter };
