// Order Details JSON MIMIC
const orderDetails = [
    {
        "order_no": 1,
        "order_date": "2018-06-07",
        "totalproducts": 5,
        "total_amount": 150,
        "total_qty": 2,
        "status": "approved",
        "user_name": "Jimmy",
        "city": "Brooklyn"
    },
    {
        "order_no": 2,
        "order_date": "2018-05-08",
        "totalproducts": 1,
        "total_amount": 550,
        "total_qty": 4,
        "status": "pending",
        "user_name": "Alice",
        "city": "Manhattan"
    },
    {
        "order_no": 3,
        "order_date": "2018-01-03",
        "totalproducts": 3,
        "total_amount": 850,
        "total_qty": 5,
        "status": "pending",
        "user_name": "Aishwary",
        "city": "New Delhi"
    },
    {
        "order_no": 4,
        "order_date": "2019-05-08",
        "totalproducts": 8,
        "total_amount": 540,
        "total_qty": 5,
        "status": "approved",
        "user_name": "Stephen",
        "city": "St Petersburg"
    },
    {
        "order_no": 5,
        "order_date": "2019-08-05",
        "totalproducts": 11,
        "total_amount": 690,
        "total_qty": 8,
        "status": "approved",
        "user_name": "Rakesh",
        "city": "Agra"
    },
    {
        "order_no": 6,
        "order_date": "2020-01-09",
        "totalproducts": 3,
        "total_amount": 345,
        "total_qty": 1,
        "status": "pending",
        "user_name": "Rajat",
        "city": "Merrut"
    },
    {
        "order_no": 7,
        "order_date": "2020-02-01",
        "totalproducts": 8,
        "total_amount": 990,
        "total_qty": 4,
        "status": "approved",
        "user_name": "Varun",
        "city": "Noida"
    },
    {
        "order_no": 8,
        "order_date": "2020-05-24",
        "totalproducts": 2,
        "total_amount": 150,
        "total_qty": 1,
        "status": "pending",
        "user_name": "Ashish",
        "city": "Noida"
    },
    {
        "order_no": 9,
        "order_date": "2020-06-11",
        "totalproducts": 9,
        "total_amount": 478,
        "total_qty": 3,
        "status": "pending",
        "user_name": "Ibrahim",
        "city": "Kabul"
    },
    {
        "order_no": 10,
        "order_date": "2019-08-19",
        "totalproducts": 15,
        "total_amount": 1120,
        "total_qty": 9,
        "status": "approved",
        "user_name": "Priya",
        "city": "Gurugram"
    },
];

// Product Details JSON MIMIC
const products = [
    {
        "Product_name": "iPhone 12",
        "Product_code": "MC12A",
        "Category": "Electronics",
        "Sub_category": "Mobiles",
        "Brand": "Apple",
        "MRP": 82000,
        "Qty": 1500,
        "Amount": 123000000
    },
    {
        "Product_name": "Galaxy S21",
        "Product_code": "SM2EP",
        "Category": "Electronics",
        "Sub_category": "Mobiles",
        "Brand": "Samsung",
        "MRP": 61000,
        "Qty": 1500,
        "Amount": 91500000
    },
    {
        "Product_name": "Probook 4520",
        "Product_code": "PB45F",
        "Category": "Electronics",
        "Sub_category": "Computers/Laptops",
        "Brand": "H.P.",
        "MRP": 56000,
        "Qty": 1800,
        "Amount": 91500000
    },
    {
        "Product_name": "Bravia 82i",
        "Product_code": "BV5632",
        "Category": "Electronics",
        "Sub_category": "Televisions",
        "Brand": "Sony",
        "MRP": 121000,
        "Qty": 900,
        "Amount": 108900000
    },
    {
        "Product_name": "Mi 10",
        "Product_code": "X1749M",
        "Category": "Electronics",
        "Sub_category": "Mobiles",
        "Brand": "Xiaami",
        "MRP": 51999,
        "Qty": 900,
        "Amount": 50450000
    },
    {
        "Product_name": "iPad Pro",
        "Product_code": "A35647PR",
        "Category": "Electronics",
        "Sub_category": "Tablets",
        "Brand": "Apple",
        "MRP": 10000,
        "Qty": 900,
        "Amount": 90000000
    },
];

// storing user data as object from table
const usersData = [];

// For Detail Order Report
let orderDetail = $('#orderDetails').html();
let orderDetailScript = Handlebars.compile(orderDetail);
let orderDetailHtml = orderDetailScript(orderDetails);
$(document.body).append(orderDetailHtml);

// For Product Details Report
let productDetail = $('#productDetails').html();
let productDetailScript = Handlebars.compile(productDetail);
let productDetailHtml = productDetailScript(products)
$(document.body).append(productDetailHtml);

var userObj = {};

$('.view-data').click(function(){
    var row = $(this).closest("tr");

    userObj = {
        "order_no": row.find('#order-no').text(),
        "order_date": row.find('#order-date').text(),
        "totalproducts": row.find('#total-products').text(),
        "total_amount": row.find('#total-amount').text(),
        "total_qty": row.find('#total-qty').text(),
        "status": row.find('#status').text(),
        "user_name": row.find('#user-name').text(),
    };
    sessionStorage.setItem('userdetailObj', JSON.stringify(userObj));
    // console.log(userObj);
});


// const objexist = (orderDetails, userObj) => {
//     for(let i = 0; i < orderDetails.length; i++){
//         if(orderDetails[i].order_no === userObj.order_no){
//             return true;
//         }
//     }
// };
//
// console.log(objexist(orderDetails, userObj));