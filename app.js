const quiz = [
  {
    question: '次の中で最も売れたゲーム機はどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション２',
      'ゲームキューブ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '面積が１番大きいのはどれ？',
    answers: [
      '大分県',
      '島根県',
      '山口県',
      '埼玉県'
　　　],
    correct: '島根県'
  }, {
    question: '今僕が使ってるイヤホンはどれ？',
    answers: [
      'Jabra elite active 75t',
      'AVIOT TE-D01gv',
      'MOMENTUM True Wireless 2',
      'FreeBuds Pro'
    ],
    correct: 'Jabra elite active 75t'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


// const question = '次の中で最も売れたゲーム機はどれ？';
// const answers = [
//   'スーパーファミコン',
//   'プレイステーション２',
//   'ゲームキューブ',
//   'ニンテンドーDS'
// ];

// const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
if(quiz[quizIndex].correct === e.target.textContent){
  window.alert('正解！');
  score++;
  } else {
    window.alert('不正解！');
}

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！ あなたの正解数は'+ score + '/' + quizLength + 'です！');
  }
};



let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });
