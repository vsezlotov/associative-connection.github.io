let quotes = [
  [
    "Благородные люди, друг друга любя,      \
    Видят горе других, забывают себя.        \
    Если чести и блеска зеркал ты желаешь, — \
    Не завидуй другим, — и возлюбят тебя.",
    "Омар Хайям"
  ], 
  [
    "Добродетель мудрецов напоминает собой путешествие в дальннюю страну \
    и восхождение на вершину: идущие                                     \
    в дальнюю страну начинают свой путь с первого шага;                  \
    восходящие на вершину начинают с подножия горы.",
    "Конфуций"
  ], 
  [
    "Если вы хотите успеха, а готовитесь к поражению, то вы получите как раз то, к чему готовитесь.",
    "Флоренс Шин"
  ]
];

document.getElementById("next-quote").addEventListener("click", function() {
  // выбираем случайную фразу из массива
  // данные в массив могут попадать и через api
  let quote = quotes[ Math.floor( Math.random() * quotes.length ) ];
  // цитата
  let phrase = document.querySelector("#text");
  // автор
  let author = document.querySelector("#author");

  phrase.innerHTML = quote[0];
  author.innerHTML = quote[1];
});