// 配列を操作するメソッドを学ぼう。
// pushメソッドについて
// pushメソッドとは配列の最後に新しい要素を追加するメソッド。
const characters = ["ミッキー", "ミニー", "ドナルド"];

console.log(characters);

// pushメソッドを使って配列charactersに、文字列「プルート」
characters.push("プルート");

// 配列characters
console.log(characters);

// forEachメソッドについて
// forEachメソッドとは配列の中の要素を一つずつ取り出して、全ての要素に繰り返し処理を行う。
// forEachメソッドの引数には学んだアロー関数が入っている。配列内の要素が1つずつ順番にアロー関数の引数に代入され、処理が繰り返し実行する。

// forEachメソッドを使って、配列charactersの中身をすべて出力
characters.forEach((character) => {
  console.log(character);
  
});

// findメソッドについて
// findメソッドとは、条件式に合う1つ目の要素を配列の中から取り出すメソッド
const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入
const foundNumber = numbers.find((number) => {
  return number % 3 == 0
});

// foundNumberを出力

// console.log(foundNumber);

// filterメソッドについて
// filterメソッドとは記述した条件に合う要素のみを取り出して新しい配列を作成するメソッド

// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入
const evenNumbers = numbers.filter((number) => {
  return number % 2 == 0
});


// mapメソッドについて
// mapメソッドとは、配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成するメソッド
// 配列numbersの要素が1つずつ引数numberに代入されている。その後、mapメソッド内の 「要素を2倍する処理」 をした配列が新しく作られ、定数doubledNumbersに配列として代入されている。
// 定数doubledNumbersを出力

const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入
const fullNames = names.map((name) => {
  return name.firstName + name.lastName
});

// 定数fullNamesを出力
console.log(fullNames);
