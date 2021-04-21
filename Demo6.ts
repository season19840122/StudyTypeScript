const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined, undefined];

const arr: (number | string)[] = [1, "string", 2];

const xiaoJieJies: { name: string; age: number }[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

// type alias
type Lady = { name: string; age: Number };
const xiaoJieJies2: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];

class Madam {
  name: string;
  age: number;
}
const xiaoJieJie3: Madam[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
