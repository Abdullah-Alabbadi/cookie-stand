'use strict';

let dataSalesCookies = document.getElementById('dataSalesCookies');
let maintable = document.createElement('table');
dataSalesCookies.appendChild(maintable);
maintable.setAttribute('border', '15');
maintable.setAttribute('cellpadding', '11');
let caption = document.createElement('caption');
maintable.appendChild(caption);
caption.textContent = 'Salmon Cookies Sales';


let workTime = ['06:00 Am', '07:00 Am', '08:00 Am', '09:00 Am', '10:00 Am', '11:00 Am', '12:00 Pm', '01:00 Pm', '02:00 Pm', '03:00 Pm', '04:00 Pm', '05:00 Pm', '06:00 Pm', '07:00 Pm'];
let salmonCookieObjects = [];
function DifferantPlace(cookiesName, minCustomer, maxCustomer, avgCustomer) {
  this.cookiesName = cookiesName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;

  this.customersPerHour = [];
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesPurchased = 0;

  salmonCookieObjects.push(this);
}

//creating the objects
let seattle = new DifferantPlace('Seattle', 23, 65, 6.3);
let tokyo = new DifferantPlace('Tokyo', 3, 24, 1.2);
let dubai = new DifferantPlace('Dubai', 11, 38, 3.7);
let paris = new DifferantPlace('Paris', 20, 38, 2.3);
let lima = new DifferantPlace('Lima', 2, 16, 4.6);


//create function using prototypes
DifferantPlace.prototype.randomNumber = function () {
  for (let i = 0; i < workTime.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
  }
};

DifferantPlace.prototype.cookiesPurchased = function () {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
    this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
  }
};

DifferantPlace.prototype.render = function () {
  let dataSalesCookies = document.getElementById('dataSalesCookies');
  let div = document.createElement('div');
  dataSalesCookies.appendChild(div);

  let ul = document.createElement('ul');
  div.appendChild(ul);

  let h4 = document.createElement('h4');
  div.appendChild(h4);
  h4.textContent = this.cookiesName;

  for (let i = 0; i < this.customersPerHour.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${workTime[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
  }


  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
  let hr = document.createElement('hr');
  div.appendChild(hr);
};




for (let i = 0; i < salmonCookieObjects.length; i++) {
  salmonCookieObjects[i].randomNumber();
  salmonCookieObjects[i].cookiesPurchased();
  // salmonCookieObjects[i].render();
}

// for test console.log(salmonCookieObjects[0].cookiesPurchasedPerHour[0]);


function renderTablehead() {
  let thead = document.createElement('thead');
  maintable.appendChild(thead);
  thead.setAttribute('bgcolor', 'e8d3d3');

  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let thStart = document.createElement('th');

  tr.appendChild(thStart);
  thStart.setAttribute('bgcolor', '#e8d3d3');
  thStart.textContent = 'Marketplace/Worktime';
  for (let i = 0; i < workTime.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = workTime[i];
  }
  let thEnd = document.createElement('th');
  tr.appendChild(thEnd);
  thEnd.setAttribute('bgcolor', '#e8d3d3');
  thEnd.textContent = 'Daily Location Total';
}


function renderTablebody() {
  let tbody = document.createElement('tbody');
  tbody.setAttribute('bgcolor', '#e8d3d3');
  maintable.appendChild(tbody);
  for (let i = 0; i < salmonCookieObjects.length; i++) {

    let trTbody = document.createElement('tr');
    tbody.appendChild(trTbody);

    let tdTbodyForName = document.createElement('td');
    trTbody.appendChild(tdTbodyForName);
    tdTbodyForName.setAttribute('bgcolor', '#e8d3d3');
    tdTbodyForName.textContent = salmonCookieObjects[i].cookiesName;

    for (let j = 0; j < salmonCookieObjects[i].cookiesPurchasedPerHour.length; j++) {

      let tdTbody = document.createElement('td');
      trTbody.appendChild(tdTbody);
      tdTbody.textContent = salmonCookieObjects[i].cookiesPurchasedPerHour[j];

    }

    let tdTbodyForTotal = document.createElement('td');
    trTbody.appendChild(tdTbodyForTotal);
    tdTbodyForTotal.setAttribute('bgcolor', '#e8d3d3');
    tdTbodyForTotal.textContent = salmonCookieObjects[i].totalCookiesPurchased;
  }
}

function renderTablefoot() {

  let totalDailydataSalesCookies = 0;

  let tfoot = document.createElement('tfoot');
  maintable.appendChild(tfoot);
  tfoot.setAttribute('bgcolor', '#e8d3d3');

  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let tdTfootForAllTotal = document.createElement('th');
  tr.appendChild(tdTfootForAllTotal);
  tdTfootForAllTotal.textContent = 'Total';
  tdTfootForAllTotal.setAttribute('bgcolor', '#e8d3d3');

  for (let i = 0; i < workTime.length; i++) {
    let totalHoursdataSalesCookies = 0;
    for (let j = 0; j < salmonCookieObjects.length; j++) {
      totalHoursdataSalesCookies += salmonCookieObjects[j].cookiesPurchasedPerHour[i];
    }
    totalDailydataSalesCookies += totalHoursdataSalesCookies;
    let td = document.createElement('th');
    tr.appendChild(td);
    td.textContent = totalHoursdataSalesCookies;
  }

  let tdTotalDailydataSalesCookies = document.createElement('th');
  tr.appendChild(tdTotalDailydataSalesCookies);
  tdTotalDailydataSalesCookies.textContent = totalDailydataSalesCookies;
  tdTotalDailydataSalesCookies.setAttribute('bgcolor', '#e8d3d3');

}



renderTablehead(seattle,tokyo,dubai,paris,lima);
renderTablebody(seattle,tokyo,dubai,paris,lima);
renderTablefoot(seattle,tokyo,dubai,paris,lima);



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
//         let listdataSalesCookies = document.getElementById('listdataSalesCookies');
//         let div = document.createElement('div');
//         listdataSalesCookies.appendChild(div);

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
//         let listdataSalesCookies = document.getElementById('listdataSalesCookies');
//         let div = document.createElement('div');
//         listdataSalesCookies.appendChild(div);

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
//         let listdataSalesCookies = document.getElementById('listdataSalesCookies');
//         let div = document.createElement('div');
//         listdataSalesCookies.appendChild(div);

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
//         let listdataSalesCookies = document.getElementById('listdataSalesCookies');
//         let div = document.createElement('div');
//         listdataSalesCookies.appendChild(div);

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
//         let listdataSalesCookies = document.getElementById('listdataSalesCookies');
//         let div = document.createElement('div');
//         listdataSalesCookies.appendChild(div);

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

