// オブジェクトの復習
// オブジェクトは複数の値をオブジェクトという名前をつけて管理できるもの。
// オブジェクトの値の部分には関数を用いることもできる。
// またその関数を呼び出すには「定数名.プロパティ名（）」とする。プロパティ名の後ろの括弧を忘れないようにする！
// const 定数名 ={
//   プロパティ名: () => {
//     処理
//   }
// };

// 定数名.プロパティ名();

// 具体例
const user = {
  name: "にんじゃわんこ",
  greet: () => {
    console.log("こんにちは");
  }
};

// user.greet()

// クラスとはオブジェクトを量産する,オブジェクトの設計図
// class クラス名{

// }クラス名は初めは必ず大文字！

// インスタンスの生成
// クラスからオブジェクトを生成するにはnew クラス名()とする。
// クラスから生成したオブジェクトは特別にインスタンスと呼ぶ。
// class Animal{
// }
// const animal = new Animal();
// console.log(animal);

// クラスにはコンストラクタと呼ばれる機能が用意されている。
// コンストラクタはインスタンスを生成するときに実行したい処理や設定を追加するための機能。
// クラス内の括弧{}内にconstructor(){}と記述する。
// コンストラクタの処理
// コンストラクタ内には処理を記述することができる。
// ここに書いた処理はインスタンスが生成された生成された直後に実行される。
// class Animal{
//   constructor(){
//     console.log("こんにちは");
//   }
// }

// const animal = new Animal();

// プロパティを追加する
// コンストラクタの中で生成したインスタンス関する情報を追加している。
// コンストラクタの中でthis.プロパティ名＝値とすることで、生成されたインスタンスにプロパティと値を追加することできる。
// class Animal{
//   constructor(){
//     this.name="レオ";
//   }
// }
// インスタンスとはオブジェクト。従ってコンストラクタ内で追加した値はオブジェクトと同様に『インスタンス名.プロパティ名』で外で使用することができる。
// class Animal{
//   constructor(){
//     this.name="レオ"
//   }
// }
// const animal= new Animal();
// console.log(animal.name)

// コンストラクタでは引数を受け取ることが可能。「constructor」の後の括弧「( )」内に引数名を記述することで、その引数をコンストラクタの処理内で使用できる。
// コンストラクタに引数として値を渡すには「new クラス名()」の括弧()のなかに値を追加する。
// class Animal{
//   constructor(name,age){
//     this.name = name,
//     this.age = age
//   }
// }
// const animal = new Animal("レオ",3);
// console.log(`名前は${animal.name}です。`);
// console.log(`${animal.age}歳です。`);

// クラスの重要な機能であるメソッドについての学習
// メソッドとはそのインスタンスの動作のようなもの。名前や年齢などはプロパティを追加したのに対して、メソッドは「あいさつをする」「値を計算する」などの処理のまとまりを表す。
// メソッドはクラスの中で定義する。メソッド名(){}とすることで定義できる。{}のなかに行いたい処理を記述する。
// メソッドの呼び出しはクラスから生成したインスタンスから呼び出せる。『インスタンス名.メソッド名()』とすることでメソッドを呼び出し、処理を実行することができる。
// class Animal{
//   constructor(name,age){
//     this.name = name,
//     this.age = age;
//   }
//   greet(){
//     console.log("こんにちは");
//   }
// }

// const animal = new Animal("レオ",3);
// animal.greet();

// メソッド内で値を使う
// メソッド内でインスタンスの値を使用するには「this」という特殊な値を用いてthis.プロパティ名とする。
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("こんにちは");
  }

  // infoメソッドを追加
  info(){
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    this.greet();
  }

}

const animal = new Animal("レオ", 3);
animal.greet();

// animalに対してinfoメソッドを呼び出す
animal.info();

// またメソッド内で他のメソッドを呼び出すこともできる。呼び出し方はthis.メソッド名()とする。
// 新しく作成するクラスが既存のクラスの一種である場合、「継承」という方法を用いることで効率よく作業が進められる。
// 継承とはすでにあるクラスをもとに、新しく新しくクラスを作成する方法のこと。
// 元となるクラスを親クラス、新しく作成するクラスを子クラスという。
// 継承を用いてクラスを作成にするにはextendsを用いる。書き方はclass 子クラス extends 親クラス{}となる。
// Animalクラスを継承してDocクラスを作成する場合
// class Doc extends Animal{

// }となる。
// 継承すると親クラスに定義されているメソッドを子クラスでも使えるようになる。
// 使うときは子クラス名.親クラスの呼び出したいメソッド名とする。
// 継承して作成したクラスにも、今まで通りにメソッドを追加することできる。


// メソッドでは関数と同じように戻り値を用いることができる。
class Dog extends Animal{
  getHumanAge(){
    return this.age*7;
  }
}

const dog = new Dog("レオ",4);
const humanAge = dog.getHumanAge();
console.log(humanAge);

// オーバーライド
// 親クラスと同じ名前のメソッドを子クラスにも定義すると子クラスのメソッドが優先して使用される。
// 子クラスのメソッドが親クラスのメソッドを上書きしていることからオーバーライドという。

// メソッドと同じようにコンストラクタもオーバーライドすることができる。例えば、子クラスにプロパティを追加したい場合などに使う。
// コンストラクタをオーバーライドする場合には１行目にsuper()と記述うる必要がある。
// class Doc extends Animal{
//   constructor(name,age,breed){
//     super(name,age);
//     this.breet = breed;
//   }
// }

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   greet() {
//     console.log("こんにちは");
//   }
  
//   info() {
//     this.greet();
//     console.log(`名前は${this.name}です`);
//     console.log(`${this.age}歳です`);
//   }
// }

// class Dog extends Animal {
//   // constructorを追加
//   constructor(name,age,breed){
//     super(name,age);
//     this.breed = breed;
//   }
  
//   info() {
//     this.greet();
//     console.log(`名前は${this.name}です`);
//     // 「犬種は〇〇です」と出力してください
//     console.log(`犬種は${this.breed}です`);
    
//     console.log(`${this.age}歳です`);
//     const humanAge = this.getHumanAge();
//     console.log(`人間年齢で${humanAge}歳です`);
//   }
  
//   getHumanAge() {
//     return this.age * 7;
//   }
// }

// // 3つ目の引数に「"チワワ"」を渡す
// const dog = new Dog("レオ", 4,"チワワ");
// dog.info();