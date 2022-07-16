let newRsData = []

const rsData = 'https://jsonplaceholder.typicode.com/users'

function viewData() {
    getData()
}

viewData()

function renderData(data, numberPage) {
    let html = `
    <tr>
        <th>Full-name <button id='sort'>Sort</button></th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Action</th>
    </tr>`
    if(numberPage*2+1 == data.length){
        html += `<tr>
        <td>${data[numberPage*2].name} ${data[numberPage*2].username}</td>
        <td>${data[numberPage*2].email}</td>
        <td>${data[numberPage*2].address.street} ${data[numberPage*2].address.suite} ${data[numberPage*2].address.city}</td>
        <td>${data[numberPage*2].phone}</td>
        <td>${data[numberPage*2].website}</td>
        <td><button id = ${numberPage*2} >DEL</button></td>
    </tr>`
    }
    else {
        for (let i=numberPage*2;i<=numberPage*2+1;i++) {
            html += `<tr>
            <td>${data[i].name} ${data[i].username}</td>
            <td>${data[i].email}</td>
            <td>${data[i].address.street} ${data[i].address.suite} ${data[i].address.city}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].website}</td>
            <td><button id = ${i+10}>DEL</button></td>
        </tr>`
        }
    }
    document.getElementsByTagName('table')[0].innerHTML = html
}



function submitData(arr) {
    let submitBtn = document.querySelector('#submit')
    submitBtn.onclick = function () {
        let name = document.querySelector('input[name="name"]').value
        let usr = document.querySelector('input[name="username"]').value
        let email = document.querySelector('input[name="email"]').value
        let street = document.querySelector('input[name="street"]').value
        let suite = document.querySelector('input[name="suite"]').value
        let city = document.querySelector('input[name="city"]').value
        let phone = document.querySelector('input[name="phone"]').value
        let website = document.querySelector('input[name="website"]').value
        arr.push({
            name: name,
            username: usr,
            email: email,
            address: {
                street: street,
                suite: suite,
                city: city
            },
            phone: phone,
            website: website
        })
        viewNumberPage(arr)
        btnSortName(arr)
        // btnDelData(arr)
    }
}

function clearData() {
    let clearBtn = document.querySelector('#clear')
    clearBtn.onclick = function () {
        document.querySelector('input[name="name"]').value = ''
        document.querySelector('input[name="username"]').value = ''
        document.querySelector('input[name="email"]').value = ''
        document.querySelector('input[name="street"]').value = ''
        document.querySelector('input[name="suite"]').value = ''
        document.querySelector('input[name="city"]').value = ''
        document.querySelector('input[name="phone"]').value = ''
        document.querySelector('input[name="website"]').value = ''
    }
    // btnDelData(arr)
}

function getRsPage(arr){
    return Math.round(arr.length / 2)
}

function rsPage(arr){
    const lastPage = getRsPage(arr)
    for(let i = 0;i<getRsPage(arr);i++){
        document.getElementById(`${i}`).onclick = function (){       
            console.log(i) 
            renderData(arr,i)        
            btnSortName(arr)
            btnDelData(arr)   
        }
    }
    // btnDelData(arr)
    // renderData(arr,lastPage-1)
}

function viewNumberPage(arr){
    document.querySelector('#nbpage').innerHTML=''
    for(let i=0;i<getRsPage(arr);i++){
        document.querySelector('#nbpage').innerHTML += `<button id=${i}>${i+1}</button>`
    }
    renderData(arr,0)
    rsPage(arr)
    btnDelData(arr)
    // sortDataName(arr)
}

function sortDataName(arr){
    arr.sort((a,b)=>{
        if(a.name>b.name) {
            return 1
        }
        else if(a.name ==   b.name)
        {
            return 0
        }
        else {
            return -1
        }
    })
    renderData(arr,0)
}

function btnSortName(arr){
    let btnSort = document.getElementById('sort')
    btnSort.onclick = function(){
        sortDataName(arr)
        submitData(arr)
            
    }
}

 function btnDelData(arr){
    for(let i=0;i<arr.length;i++){
                document.getElementById(`${i+10}`).onclick = function (){
                    console.log(i)
                arr.splice(i,1)
                renderData(arr,0)
                viewNumberPage(arr)
                btnDelData(arr)
                btnSortName(arr)
            }      
        } 
        
}

async function btnSearch(arr){
    document.getElementById('btn-search').onclick = function(){
        let html = `<tr>
            <th>Full-name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            </tr>`
        if(document.getElementById('name-search').value == ''){
            alert('Vui lòng nhập tên cần tìm!')
        }
        else{
        
        const arrSearch = arr.filter(elm => elm.name == document.getElementById('name-search').value )
        html += `<tr>
            <td>${arrSearch[0].name} ${arrSearch[0].username}</td>
            <td>${arrSearch[0].email}</td>
            <td>${arrSearch[0].address.street} ${arrSearch[0].address.suite} ${arrSearch[0].address.city}</td>
            <td>${arrSearch[0].phone}</td>
            <td>${arrSearch[0].website}</td>
        </tr>`
        function col(){
            document.getElementsByTagName('table')[2].innerHTML = html
        }
    }
         setTimeout(col,3000)
         viewNumberPage(arr)         
         submitData(arr)
         clearData()
         btnDelData(arr) 
         getRsPage(arr)
         btnSortName(arr) 
    }   
}

function getData() {
    fetch(rsData)
        .then(result => result.json())
        .then(data => {
            const newArr = data.map((elm) => elm)
            btnSearch(newArr)
            renderData(newArr,0)         
            viewNumberPage(newArr)         
            submitData(newArr)
            clearData()
            btnDelData(newArr) 
            getRsPage(newArr)
            btnSortName(newArr)                 
        })
}

