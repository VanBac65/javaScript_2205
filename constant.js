const data = [
  {
    question: 'Javascript is _________ language.',
    answers: {
      a: 'Programming',
      b: 'Application',
      c: 'None of These',
      d: 'Scripting'
    },
    multi: false,
    correctAnswer: 'a'
  },
  {
    question:
      'Which of the following is a valid type of function javascript supports?',
    answers: {
      a: 'named function',
      b: 'anonymous function',
      c: 'both of the above',
      d: 'none of the above'
    },
    multi: false,
    correctAnswer: 'c'
  },
  {
    question:
      'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
    answers: {
      a: 'getIndex()',
      b: 'location()',
      c: 'indexOf()',
      d: 'getLocation()'
    },
    multi: false,
    correctAnswer: 'c'
  },
  {
    question: 'Which one of the following is valid data type of JavaScript',
    answers: {
      a: 'number',
      b: 'void',
      c: 'boolean',
      d: 'nothing'
    },
    multi: false,
    correctAnswer: 'ab'
  }
];
let answer = []
let idQuestion = 0
function viewData(arr) {
  for (let i = 0; i < arr.length; i++) {
    var paraDiv = document.createElement('div')
    if (i != 0) {
      paraDiv.setAttribute('style', 'display:none')
    }
    else {
      paraDiv.setAttribute('style', 'display:block')
    }
    paraDiv.innerHTML = `<form><p>${arr[i].question}</p>
    <input type='radio' value='a' name=${i}><label>${arr[i].answers.a}</label><br>
    <input type='radio' value='b' name=${i}><label>${arr[i].answers.b}</label><br>
    <input type='radio' value='c' name=${i}><label>${arr[i].answers.c}</label><br>
    <input type='radio' value='d' name=${i}><label>${arr[i].answers.d}</label></form>`
    document.body.appendChild(paraDiv)
  }
}
viewData(data)

function blNoneData(idQuestion) {
  for (let i = 0; i < data.length; i++) {
    if (i == idQuestion) {
      document.getElementsByTagName('div')[idQuestion].style.display = 'block'
    }
    else {
      document.getElementsByTagName('div')[i].style.display = 'none'
    }

  }
}

function checkIdQuestion(idQuestion) {
  if (idQuestion == data.length - 1) {
    document.getElementById('next').style.display = 'none'
    document.getElementById('submit').style.display = 'initial'
    document.getElementById('pre').style.display = 'initial'
  }
  else if (idQuestion == 0) {
    document.getElementById('next').style.display = 'initial'
    document.getElementById('submit').style.display = 'none'
    document.getElementById('pre').style.display = 'none'
  }
  else if (idQuestion > 0 && idQuestion < data.length) {
    document.getElementById('next').style.display = 'initial'
    document.getElementById('submit').style.display = 'none'
    document.getElementById('pre').style.display = 'initial'
  }
}
let count = 0
function checkAnswer() {
  for (let i in data) {
    for (let j = 0; j < document.forms[i].length; j++) {
      if (document.forms[i][j].checked) {
        answer[i] = document.forms[i][j].value
      }
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (answer[i] == data[i].correctAnswer) {
      count++
    }
  }
  const result = document.createElement('p')
  result.innerHTML = `Đúng ${count}/${data.length} câu`
  document.body.appendChild(result)
  answer = []
  count = 0
}

function next() {
  idQuestion++
  blNoneData(idQuestion)
  checkIdQuestion(idQuestion)
}

function pre() {
  idQuestion--
  blNoneData(idQuestion)
  checkIdQuestion(idQuestion)
}