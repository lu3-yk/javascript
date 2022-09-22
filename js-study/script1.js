// while文
// 繰り返し処理を行うためにはwhile文というものを用いる

// 条件式がtrueの間、{ }内の処理を繰り返す
// while(条件式){
//   処理
// }
let number = 1 ;
// 変数numberが100以下
while (number <= 100){
  console.log(number);
  number += 1;
}

// for文
// for文では「変数の定義」「条件式」「変数の更新」の3つを括弧の中に書く。括弧の中ではそれぞれをセミコロン（;）で区切りる。
// for (変数の定義;条件式;変数の更新){
//   処理
// }
// 「number += 1」は「number ++」のように省略して書くことができる。
for(let number = 1; number <= 100; number += 1){
  console.log(number);
}

for (let number = 1; number <= 100 ;number += 1) {

  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力
  if (number % 3 == 0){
   console.log("3の倍数です");
  }else{
   console.log(number);
  }
}

// 配列
const animals = ['dog','cat','sheep'];
// 定数animalsを出力
console.log(animals);

// 配列の1つ目の要素を出力
console.log(animals[0]);

// 配列の3つ目の要素を出力
console.log(animals[2]);

animals[2] = "rabbit";
// 配列animalsの3つ目の要素をコンソールに表示
console.log(animals[2]);

// const animals = ["dog", "cat", "sheep"];

// // for文を用いて、配列の値を順にコンソールに出力
// for(let i = 0; i < 3; i++){
//   console.log(animals[i]);
// }


// 配列.lengthとすることで、配列の要素数を取得できる
const foods = ["curry", "cake", "lemon", "rice", "udon", "cherry", "fish", "orange"];

// lengthを用いて配列の要素の数を出力してください
for(let i = 0; i < foods.length ; i++ ){
  console.log(foods.length);
}

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// オブジェクト
// オブジェクトは配列と同じく複数のデータをまとめて管理するのに用いられる。
// 配列は複数の値を並べて管理するのに対して、オブジェクトはそれぞれの値にプロパティと呼ばれる名前をつけて管理する。


// オブジェクトのつくり方
// 配列を作るときは[]で囲んだが、オブジェクトは{}で囲む。プロパティ名と値の間はコロン（ : ）で繋いで、プロパティ間はコンマ（,）で区切りる。
const character = {
  name : "ミッキー", age : 14
};
// characterの値を出力
console.log(character);

// オブジェクトの値を取り出すには、対応するプロパティ名を用いて 、
// 「オブジェクト.プロパティ名」とする
console.log(character.age);

// オブジェクトを要素に持つ配列
// 配列の要素には、文字列や数値だけでなく、オブジェクトも使うことができる
// const characters = [
//   {name: "にんじゃわんこ", age: 14},
//   {name: "ひつじ仙人", age: 1000}
// ];

// 配列の中のオブジェクトのプロパティの値を取り出すには、
// 「配列[インデックス番号].プロパティ名」と書く
// charactersの2つ目の要素の「name」に対応する値をコンソールに出力
// console.log(characters[1].name);

const students = [
  {name: "ジョニー", age: 14},
  {name: "リリー", age: 100},
  {name: "ジョン", age: 5},
];

// for文を完成させてください
for (let i = 0 ; i < students.length ; i++ ) {
  console.log("--------------------");

  // 定数characterを定義してください
  const student = students[i];

  // 「名前は〇〇です」を出力してください

  console.log(`名前は${student.name}です`);
  // 「〇〇歳です」を出力してください

  console.log(`${student.age}歳です`) ;
}

// for (let i = 0; i < characters.length; i++) {
//   console.log("--------------------");
  
//   const character = characters[i];
  
//   console.log(`名前は${character.name}です`);
  
//   // if文を追加してください
//   if (character.age == undefined){
    
//     console.log("年齢は秘密です");
//   } else {
//     console.log(`${character.age}歳です`);
//   }
  
// }
