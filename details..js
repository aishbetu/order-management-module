// getting data of same tr object
let DetailedOrder = JSON.parse(sessionStorage.getItem('userdetailObj'));

// assigning tr object data to new object
const testing = {
    "order_no": DetailedOrder.order_no,
    "order_date": DetailedOrder.order_date,
    "status": DetailedOrder.status,
    "total_amount": DetailedOrder.total_amount,
    "total_qty": DetailedOrder.total_qty,
    "totalproducts": DetailedOrder.totalproducts,
    "user_name": DetailedOrder.user_name,
    "city": DetailedOrder.city,
};

//Card to render tr data
let orderDetailsCard = $('#detailCard').html();
let orderDetailsCardScript = Handlebars.compile(orderDetailsCard);
let orderDetailsCardHtml = orderDetailsCardScript(testing);
$(document.body).append(orderDetailsCardHtml);
