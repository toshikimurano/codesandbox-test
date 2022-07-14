// const、let等の変数宣言
let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

const val3 = "const変数";
console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "じゃけぇ",
  age: 28
};
val4.name = "jak";
val4.address = "Hiroshima";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

// テンプレート文字列
const name = "じゃけぇ";
const age = 28;
console.log(`私の名前は${name}です。年齢は${age}です。`);

// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

// 省略可能
const func4 = (str) => str;
console.log(func4("func4です"));

const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(10, 20));

// 1行で終わる時は省略可能
const func6 = (num1, num2) => num1 + num2;
console.log(func6(30, 20));

// 分割代入
const myProfile = {
  name1: "じゃけぇ",
  age1: 28
};

const { name1, age1 } = myProfile;
console.log(`名前は${name1}です。年齢は${age1}歳です。`);

const myProfile1 = ["じゃけぇ", 28];
console.log(`名前は${myProfile1[0]}です。年齢は${myProfile1[1]}歳です。`);

const [name2, age2] = myProfile1;
console.log(`名前は${name2}です。年齢は${age2}歳です。`);

// デフォルト値、引数等(undifinedを変更できる)
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
sayHello();

// スプレッド構文 ...
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);

sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num3, num4, ...arr3] = arr2;
console.log(num3);
console.log(num4);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// 配列をそのままコピーすると同期した感じになってしまう
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);

// mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "じゃけぇ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name) => console.log(`${name}です`));
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけぇ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// 三項演算子
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています！！" : "許容範囲内です";
};
console.log(checkSum(50, 40));

// 論理演算子の本当の意味を知ろう && ||
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります");
}
if (flag1 && flag2) {
  console.log("1か2はtrueになります");
}

// ||は左側がfalseなら右側を返す
const num5 = 100;
const fee = num5 || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
const num6 = 100;
const fee2 = num6 && "何か設定されました";
console.log(fee2);
