const data = [{
    company: 'iphone',
    name: 'iPhone 13 128GB | Chính hãng VN/A',
    price: 19590000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/ip13-pro_2.jpg'
},
{
    company: 'iphone',
    name: 'iPhone 13 Pro Max 128GB | Chính hãng VN/A',
    price: 27390000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4.jpg'
},
{
    company: 'xiaomi',
    name: 'Xiaomi Redmi Note 11 Pro Plus 5G',
    price: 8990000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/ip13-pro_2.jpg'
},
{
    company: 'xiaomi',
    name: 'Xiaomi Redmi Note 11',
    price: 4390000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/8/0/800x800-1-640x640-5_2.png'
},
{
    company: 'sam sung',
    name: 'Samsung Galaxy A73 (5G) 256GB',
    price: 12300000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg'
},
{
    company: 'sam sung',
    name: 'Samsung Galaxy S22 Ultra (8GB - 128GB)',
    price: 21000000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg'
},
{
    company: 'iphone',
    name: 'iPhone 12 64GB I Chính hãng VN/A ',
    price: 15900000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_12_blue.png'
},
{
    company: 'nokia',
    name: 'Nokia G50 (5G)',
    price: 4690000,
    img: 'https://image.cellphones.com.vn/200x/media/catalog/product/n/o/nokia-g50-4_1.jpeg'
},
{
    company: 'nokia',
    name: 'Nokia C20 2GB 16GB',
    price: 1790000,
    img: 'https://image.cellphones.com.vn/200x/media/catalog/product/n/o/nokia-c20-2_4.jpg'
},
{
    company: 'sam sung',
    name: 'Samsung Galaxy S22 Plus (8GB + 128GB)',
    price: 22300000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/s/2/s22_4_1.jpg'
},
{

    company: 'oppo',
    name: 'OPPO Reno6 Z 5G',
    price: 6790000,
    img: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/o/p/oppo_reno6.jpg'
},
{
    company: 'oppo',
    name: 'Oppo A16',
    price: 3490000,
    img: 'https://image.cellphones.com.vn/200x/media/catalog/product/c/o/combo_-_a16_-_b_c.jpg'
}
]

let totalPriceAll = 0

const newData = data.map((elm, index) => ({
    ...elm,
    id: index
}))

let arrBuy = new Array()

const renderAllData = (data, numberPage) => {
    let html = `<div class='row d-flex'>`
    const render = document.querySelector('.render')
    const rs = data.map(({ id, img, company, name, price }, index) => {
        if (index >= (numberPage - 1) * 8 && index < (numberPage) * 9 - 1) {
            return `<div class="col-md-3 card-data" >
                    <div class='card' style="height:500px">
                    <img class="card-img-top img" src=${img}>
                        <div class='card-body'>
                            <h5 class='card-title'>${name}</h3>
                            <p>Giá: ${price.toLocaleString()} đ</p>
                            <button class='buy${id} form-control bg-primary' onclick='btnBuy(${id})'>Mua</button>
                        </div>
                    </div>
                </div>`
        }
    })
    html += rs.join('');
    html += `</div>`
    render.innerHTML = html
    const totalNumberPageAll = (data) => {
        let html = ``
        const rsNumberPage = Math.ceil(data.length / 8)
        for (let i = 0; i < rsNumberPage; i++) {
            html += `<button class='btn-number-page me-1' onclick='clickNumberPageAll(${i})'>${i + 1}</button>`
        }
        if (rsNumberPage > 1) {
            document.querySelector('.number-page').innerHTML = html
        }
    }
    totalNumberPageAll(newData)

}

function clickNumberPageAll(i) {
    renderAllData(newData, i + 1)
}

const renderDataSearch = (data, numberPage) => {
    let html = `<div class='row d-flex'>`
    const render = document.querySelector('.render')
    const rs = data.map(({ id, img, company, name, price }, index) => {
        if (index >= (numberPage - 1) * 8 && index < (numberPage) * 9 - 1) {
            return `<div class="col-md-3 card-data" >
                        <div class='card' style="height:500px">
                            <img class="card-img-top img" src=${img}>
                            <div class='card-body'>
                                <h5 class='card-title'>${name}</h3>
                                <p>Giá: ${price.toLocaleString()} đ</p>
                                <button class='buy${id} form-control bg-primary' onclick='btnBuy(${id})'>Mua</button>
                            </div>
                        </div>
                    </div>`
        }
    })
    const newRs = rs.join('');
    html += newRs
    html += `</div>`
    render.innerHTML = html

}
const searchData = (data) => {
    function searchInput(data, value) {
        const rsSearch = data.filter(({ name, company }) => name == value.toLowerCase() || company == value.toLowerCase())
        renderDataSearch(rsSearch, 1)
        function numberPageSearch(data) {
            let html = ``
            const rsNumberPage = Math.ceil(data.length / 8)
            for (let i = 0; i < rsNumberPage; i++) {
                html += `<button class='me-1' id='clickSearch${i}'>${i + 1}</button>`
            }
            if (rsNumberPage > 1) {
                document.querySelector('.number-page').innerHTML = html
                for (let i = 0; i < rsNumberPage; i++) {
                    document.querySelector(`#clickSearch${i}`).onclick = function () {
                        renderDataSearch(rsSearch, i)
                    }
                }
            }
            else {
                document.querySelector('.number-page').innerHTML = ''
            }
        }
        numberPageSearch(rsSearch)
    }
    const search = document.querySelector('.search')
    search.addEventListener('keypress', (event) => {

        if (event.key == 'Enter') {
            searchInput(data, search.value)
        }
        document.querySelector('.search1').onclick = function () {
            searchInput(data, search.value)
        }
    })
    document.querySelector('.all-iphone').onclick = function () {
        searchInput(data, 'iphone')
    }
    document.querySelector('.all-samsung').onclick = function () {
        searchInput(data, 'sam sung')
    }
    document.querySelector('.all-xiaomi').onclick = function () {
        searchInput(data, 'xiaomi')
    }
    document.querySelector('.all-oppo').onclick = function () {
        searchInput(data, 'oppo')
    }
    document.querySelector('.all-nokia').onclick = function () {
        searchInput(data, 'nokia')
    }
}
function btnHome() {
    renderAllData(newData, 1)
}

function btnBuy(id) {
    document.querySelector(`.buy${id}`).innerHTML = 'Đã thêm vào giỏ hàng'
    arrBuy[id] = newData[id]
    const newArrBuy = arrBuy.filter(elm => elm)
    document.querySelector('.rs-category').innerHTML = newArrBuy.length
}

function btnCategory() {
    const newArrBuy = arrBuy.filter(elm => elm)
    document.querySelector('.home-page').style.display = 'none'
    const renderCategory = (newArrBuy) => {
        let html = `<div class='container-fluid  p-1'>
                        <div class='row d-flex text-center'>
                                <div class='col-1'>Ảnh</div>
                                <div class='col-3'>Tên điện thoại</div>
                                <div class='col-1'>Giá</div>
                                <div class='col-3'>Số lượng</div>
                                <div class='col-3'>Thành tiền</div>
                                <div class='col-1'></div>
                        </div>`
        const renderDataCategory = (newArrBuy) => {
            const render = newArrBuy.map(({ company, name, price, img, id }, index) => {
                return `<div class='row pt d-flex justify-content-center'>
                                <div class='col-1 text-wrap'><img src='${img}' class="w-100 img-responsive"></div>
                                <div class='col-3 pt-4 text-wrap'>${name}</div>
                                <div class='col-1 pt-4 text-wrap'>${price.toLocaleString()} đ</div>
                                <div class='col-3 pt-4 d-flex'>
                                            <div class='p-0 col-2'><button class=' plus${id} form-control bg-danger' value='${price}' onclick='btnPlus(${id})'><i class=" p-0 fa-solid fa-plus "></i></button></div>
                                            <div class='p-0 col-8'><input class="rsPhone${id} form-control text-center" readonly value='1' type="text"></div>
                                            <div class='p-0 col-2'><button class='col-1 minus${id} form-control bg-warning' value='${price}' onclick='btnMinus(${id})'><i class="fa-solid p-0 fa-minus"></i></button></div>                               
                                </div>
                                <div class='col-3 pt-4 text-wrap'><input class="w-100 rsPhone2${id} form-control text-center" readonly value='${price.toLocaleString()} đ' type="text"> </div>        
                                <div class='col-1 pt-4 text-wrap'><input type='button' onclick='btnDel(${id})'  value="Xóa" class="form-control btn-danger "></button></div>
                            </div>
                        </div>`
            })
            const totalPriceOneAll = newArrBuy.reduce((pre, { price }) => {
                pre += price
                return pre
            }, 0)
            totalPriceAll = totalPriceOneAll
            const newRender = render.join('')
            html += newRender
            html += `<table id="cart" class="table table-hover table-condensed><tfoot>
                    <tr class="visible-xs">
                    </tr>
                    <tr>
                        <td>
                            <button onclick='preHome()' class="btn btn-pre-home btn-warning"><i class="fa fa-angle-left"></i> Tiếp tục mua hàng</button>
                        </td>
                        <td colspan="2" class="hidden-xs"> </td>
                        <td class="total-price hidden-xs text-center">
                            <strong>Tổng tiền ${totalPriceOneAll.toLocaleString()} đ</strong>
                        </td>
                        <td class='btnPay'>
                            <button value='${totalPriceOneAll}' onclick='payAll()' class="rsPay w-75 btn form-control btn-success">Thanh toán <i class="fa fa-angle-right"></i></button>
                        </td>
                    </tr>
                </tfoot>
             </tbody>
            </table>
        </div>`
            document.querySelector(`.category-page`).innerHTML = html

        }
        renderDataCategory(newArrBuy)
        document.querySelector('.category-page').style.display = 'inherit'

    }
    renderCategory(newArrBuy)
}



function btnPlus(id) {
    console.log(totalPriceAll)
    let valueRsPhone = Number(document.querySelector(`.rsPhone${id}`).value)
    valueRsPhone++
    totalPriceAll += Number(document.querySelector(`.plus${id}`).value)
    document.querySelector(`.rsPhone${id}`).value = valueRsPhone
    document.querySelector(`.total-price`).innerHTML = `<strong>Tổng tiền ${totalPriceAll.toLocaleString()} đ</strong>`
    document.querySelector(`.btnPay`).innerHTML = `<button onclick='payAll()' value='${totalPriceAll}' class="rsPay w-75 btn form-control btn-success">Thanh toán <i class="fa fa-angle-right"></i></button>`
    document.querySelector(`.rsPhone2${id}`).value = `${(document.querySelector(`.plus${id}`).value * valueRsPhone).toLocaleString()} đ`
}

function btnMinus(id) {
    if (document.querySelector(`.rsPhone${id}`).value > 0) {
        document.querySelector(`.rsPhone${id}`).value--
        valueRsPhone = Number(document.querySelector(`.rsPhone${id}`).value)
        totalPriceAll -= Number(document.querySelector(`.plus${id}`).value)
        document.querySelector(`.total-price`).innerHTML = `<strong>Tổng tiền ${totalPriceAll.toLocaleString()} đ</strong>`
        document.querySelector(`.rsPhone2${id}`).value = `${(document.querySelector(`.minus${id}`).value * valueRsPhone).toLocaleString()} đ`
        document.querySelector(`.btnPay`).innerHTML = `<button onclick='payAll()' value='${totalPriceAll}' class="rsPay w-75 btn form-control btn-success">Thanh toán <i class="fa fa-angle-right"></i></button>`
    }
    console.log(document.querySelector(`.rsPhone${id}`).value)
}

function preHome() {
    document.querySelector(`.home-page`).style.display = 'inherit'
    document.querySelector(`.category-page`).style.display = 'none'
}

function btnDel(id) {
    arrBuy[id] = null
    const newArrBuy = arrBuy.filter(elm => elm)
    document.querySelector('.rs-category').innerHTML = newArrBuy.length
    document.querySelector(`.buy${id}`).innerHTML = 'Mua'
    btnCategory()
}

function payAll() {
    alert(`Thanh toán thành công : ${(Number(document.querySelector('.rsPay').value)).toLocaleString()} đ`)
}

searchData(newData)

renderAllData(newData, 1)