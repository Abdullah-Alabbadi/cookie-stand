'use strict';

//************************* Class07-Object-Constructor *************************

let datasalesCookies = document.getElementById('datasalesCookies');
let table = document.createElement('table');
datasalesCookies.appendChild(table);
table.setAttribute('border','1');
table.setAttribute('cellpadding','7');
let caption = document.createElement('caption');
table.appendChild(caption);
caption.textContent = 'Salmon Cookies Sales';

let workHours = ['06:00 Am', '07:00 Am', '08:00 Am', '09:00 Am', '10:00 Am', '11:00 Am', '12:00 Pm', '01:00 Pm', '02:00 Pm', '03:00 Pm', '04:00 Pm', '05:00 Pm', '06:00 Pm', '07:00 Pm'];


let salmonCookieObjects = [];
function SalmonCookie (cookiesName, minCustomer, maxCustomer, avgCustomer) {
  this.cookiesName = cookiesName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;

  this.customersPerHour = [];
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesPurchased = 0;

  console.log(this);
  salmonCookieObjects.push(this);
}

let seattle = new SalmonCookie('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookie('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookie('Dubai', 11, 38, 3.7);
let paris = new SalmonCookie('Paris', 20, 38, 2.3);
let lima = new SalmonCookie('Lima', 2, 16, 4.6);

// /* eslint-disable indent */
// 'use strict';

// //object literals create
// const seattle = {
//     cookiesName: 'Seatlle Sales',
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     hourly: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
//     cookiesPerchesperhour: [],
//     customerPerHour: [],
//     totalCookiesPercheased: 0,


//     randomCustomer: function () {

//         for (let i = 0; i < this.hourly.length; i++) {
//             this.customerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }

//     },

//     cookiesPerches: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             this.cookiesPerchesperhour.push(Math.ceil(this.customerPerHour[i] * this.avg));
//             this.totalCookiesPercheased += this.cookiesPerchesperhour[i];
//         }

//     },
//     showSales: function () {
//         let listdatasalesCookies = document.getElementById('listdatasalesCookies');
//         let div = document.createElement('div');
//         listdatasalesCookies.appendChild(div);

//         let h4 = document.createElement('h4');
//         div.appendChild(h4);
//         h4.textContent = this.cookiesName;

//         let ul = document.createElement('ul');
//         div.appendChild(ul);



//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${this.hourly[i]} :${this.cookiesPerchesperhour[i]} cookies `;

//         }

//         let li = document.createElement('li');
//         ul.appendChild(li);
//         li.textContent = `Total : ${this.totalCookiesPercheased} Cookies `;

//         let hr = document.createElement('hr');
//         div.appendChild(hr);
//     }



// };


// seattle.randomCustomer();// calling randomcustomer function
// seattle.cookiesPerches();// calling cookiesPerches function
// seattle.showSales();// calling showSales function





// //object literals create
// const Tokyo = {
//     cookiesName: 'Tokyo Sales',
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     hourly: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
//     cookiesPerchesperhour: [],
//     customerPerHour: [],
//     totalCookiesPercheased: 0,


//     randomCustomer: function () {

//         for (let i = 0; i < this.hourly.length; i++) {
//             this.customerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }

//     },

//     cookiesPerches: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             this.cookiesPerchesperhour.push(Math.ceil(this.customerPerHour[i] * this.avg));
//             this.totalCookiesPercheased += this.cookiesPerchesperhour[i];
//         }

//     },
//     showSales: function () {
//         let listdatasalesCookies = document.getElementById('listdatasalesCookies');
//         let div = document.createElement('div');
//         listdatasalesCookies.appendChild(div);

//         let h4 = document.createElement('h4');
//         div.appendChild(h4);
//         h4.textContent = this.cookiesName;

//         let ul = document.createElement('ul');
//         div.appendChild(ul);



//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${this.hourly[i]} :${this.cookiesPerchesperhour[i]} cookies `;

//         }

//         let li = document.createElement('li');
//         ul.appendChild(li);
//         li.textContent = `Total : ${this.totalCookiesPercheased} Cookies `;

//         let hr = document.createElement('hr');
//         div.appendChild(hr);
//     }



// };


// Tokyo.randomCustomer();// calling randomcustomer function
// Tokyo.cookiesPerches();//calling cookiesPerches function
// Tokyo.showSales();      //calling showSales function








// //object literals create
// const Dubai = {
//     cookiesName: 'Dubai Sales',
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     hourly: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
//     cookiesPerchesperhour: [],
//     customerPerHour: [],
//     totalCookiesPercheased: 0,


//     randomCustomer: function () {

//         for (let i = 0; i < this.hourly.length; i++) {
//             this.customerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }

//     },

//     cookiesPerches: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             this.cookiesPerchesperhour.push(Math.ceil(this.customerPerHour[i] * this.avg));
//             this.totalCookiesPercheased += this.cookiesPerchesperhour[i];
//         }

//     },
//     showSales: function () {
//         let listdatasalesCookies = document.getElementById('listdatasalesCookies');
//         let div = document.createElement('div');
//         listdatasalesCookies.appendChild(div);

//         let h4 = document.createElement('h4');
//         div.appendChild(h4);
//         h4.textContent = this.cookiesName;

//         let ul = document.createElement('ul');
//         div.appendChild(ul);



//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${this.hourly[i]} :${this.cookiesPerchesperhour[i]} cookies `;

//         }

//         let li = document.createElement('li');
//         ul.appendChild(li);
//         li.textContent = `Total : ${this.totalCookiesPercheased} Cookies `;

//         let hr = document.createElement('hr');
//         div.appendChild(hr);
//     }



// };


// Dubai.randomCustomer();// calling randomcustomer function
// Dubai.cookiesPerches();//calling cookiesPerches function
// Dubai.showSales();//calling showSales function







// //object literals create
// const Paris = {
//     cookiesName: 'Paris Sales',
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     hourly: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
//     cookiesPerchesperhour: [],
//     customerPerHour: [],
//     totalCookiesPercheased: 0,


//     randomCustomer: function () {

//         for (let i = 0; i < this.hourly.length; i++) {
//             this.customerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }

//     },

//     cookiesPerches: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             this.cookiesPerchesperhour.push(Math.ceil(this.customerPerHour[i] * this.avg));
//             this.totalCookiesPercheased += this.cookiesPerchesperhour[i];
//         }

//     },
//     showSales: function () {
//         let listdatasalesCookies = document.getElementById('listdatasalesCookies');
//         let div = document.createElement('div');
//         listdatasalesCookies.appendChild(div);

//         let h4 = document.createElement('h4');
//         div.appendChild(h4);
//         h4.textContent = this.cookiesName;

//         let ul = document.createElement('ul');
//         div.appendChild(ul);



//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${this.hourly[i]} :${this.cookiesPerchesperhour[i]} cookies `;

//         }

//         let li = document.createElement('li');
//         ul.appendChild(li);
//         li.textContent = `Total : ${this.totalCookiesPercheased} Cookies `;

//         let hr = document.createElement('hr');
//         div.appendChild(hr);
//     }



// };


// Paris.randomCustomer();// calling randomcustomer function
// Paris.cookiesPerches();//calling cookiesPerches function
// Paris.showSales();//calling showSales function




// //object literals create
// const Lima = {
//     cookiesName: 'Lima Sales',
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     hourly: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
//     cookiesPerchesperhour: [],
//     customerPerHour: [],
//     totalCookiesPercheased: 0,


//     randomCustomer: function () {

//         for (let i = 0; i < this.hourly.length; i++) {
//             this.customerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//         }

//     },

//     cookiesPerches: function () {
//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             this.cookiesPerchesperhour.push(Math.ceil(this.customerPerHour[i] * this.avg));
//             this.totalCookiesPercheased += this.cookiesPerchesperhour[i];
//         }

//     },
//     showSales: function () {
//         let listdatasalesCookies = document.getElementById('listdatasalesCookies');
//         let div = document.createElement('div');
//         listdatasalesCookies.appendChild(div);

//         let h4 = document.createElement('h4');
//         div.appendChild(h4);
//         h4.textContent = this.cookiesName;

//         let ul = document.createElement('ul');
//         div.appendChild(ul);



//         for (let i = 0; i < this.customerPerHour.length; i++) {

//             let li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = `${this.hourly[i]} :${this.cookiesPerchesperhour[i]} cookies `;

//         }

//         let li = document.createElement('li');
//         ul.appendChild(li);
//         li.textContent = `Total : ${this.totalCookiesPercheased} Cookies `;

//         let hr = document.createElement('hr');
//         div.appendChild(hr);
//     }



// };


// Lima.randomCustomer();// calling randomcustomer function
// Lima.cookiesPerches();//calling cookiesPerches function
// Lima.showSales();//calling showSales function

