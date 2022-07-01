const articles = [
  {
    name: "Neuer",
    title: "Học Javascript như thế nào",
    description: `I An array of odd numbers.
    An array of numbers divisible by 2 or 5.
    An array of numbers divisible by 3 and then squared those numbers.
    The sum of the following: square the numbers divisible by 5.I
    `
  },
  {
    name: "Neuer Goretzka",
    title: "Học React như thế nào",
    description: `II An array of odd numbers.
    An array of numbers divisible by 2 or 5.
    An array of numbers divisible by 3 and then squared those numbers.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.II`
  },

  {
    name: "Goretzka Neuer",
    title: "Làm thế nào để trở lên tốt hơn",
    description: `III An array of odd numbers.
    An array of numbers divisible by 2 or 5.
    An array of numbers divisible by 3 and then squared those numbers.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.
    The sum of the following: square the numbers divisible by 5.III`
  },
];

let newArticles = []
articles.forEach((item) => {
  newArticles.push(item.description)
})
let tableContent = `<tr>
    <th>Name</th>
    <th>Title</th>
    <th>Description</th>
</tr>`

articles.forEach((item, index) => {
  let dataIndex = index
  tableContent += `<tr>
  <td>${item.name}</td>
  <td class="title">${item.title}</td>
  <td id="data-description" class="description">${item.description}
  <a style="display:none" id="toggle2" onclick="readmore1(${dataIndex})" href="#">Xem thêm</a>
  <a style="display:block" id="toggle1" onclick="readmore(${dataIndex})" href="#">Ẩn</a></td>
</tr>`
});
document.getElementById('grid-data').innerHTML = tableContent

function readmore(dataIndex) {
  let x = articles[dataIndex].description;
  if (x.length > 50) {
    function newString(data) {
      let z = ''
      for (let i = 0; i <= 50; i++) {
        z += data[i];
      }
      return z + '...'
    }
    y = newString(x)
    console.log(dataIndex)
    articles[dataIndex].description = y + `<a style="display:block" id="toggle2" onclick="readmore1(${dataIndex})" href="#">Xem thêm</a>`
    document.getElementsByTagName('td')[3 * dataIndex + 2].innerHTML = y + `<a style="display:block" id="toggle2" onclick="readmore1(${dataIndex})" href="#">Xem thêm</a>`
  }
}

function readmore1(dataIndex) {
  document.getElementsByTagName('td')[3 * dataIndex + 2].innerHTML = newArticles[dataIndex] + `<a style="display:block" id="toggle1" onclick="readmore(${dataIndex})" href="#">Ẩn</a>`
}