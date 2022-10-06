// コールバック関数
// Javascriptでは引数に関数を渡すことができる。引数に渡される関数をコールバック関数という。
// 関数の呼び出し方と渡し方
// 関数の呼び出し　printwanko()
// 関数定義そのものの呼び出し　printwanko 
// 関数を直接引数の中に定義することもできる

const printWanko = () => {
  console.log("にんじゃわんこ");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printWanko);

// 引数で関数を定義して渡す
call(() => {
  console.log("ひつじ仙人");
});
