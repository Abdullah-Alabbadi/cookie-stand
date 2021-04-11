/* eslint-disable indent */
'use strict';

//object literals
const seattle = {
    cookiesName: 'Seatlle Sales',
    min: 23,
    max: 65,
    avg: 6.3,
    hourly: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
    cookiesPerchesperhour: [],
    customerPerHour: [],
    totalCookiesPercheased: 0,


    randomCustomer: function () {

        for (let i = 0; i < this.hourly.length; i++) {
            this.customerPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }

    },

    cookiesPerches: function () {
        for (let i = 0; i < this.customerPerHour.length; i++) {

            this.cookiesPerchesperhour.push(Math.ceil(this.customerPerHour[i] * this.avg));
            this.totalCookiesPercheased += this.cookiesPerchesperhour[i];
        }

    },
    showSales: function () {
        let listSalesCookies = document.getElementById('listSalesCookies');
        let div = document.createElement('div');
        listSalesCookies.appendChild(div);

        let h4 = document.createElement('h4');
        div.appendChild(h4);
        h4.textContent = this.cookiesName;

        let ul = document.createElement('ul');
        div.appendChild(ul);



        for (let i = 0; i < this.customerPerHour.length; i++) {

            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = `${this.hourly[i]} :${this.cookiesPerchesperhour[i]} cookies `;

        }

        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Total : ${this.totalCookiesPercheased} Cookies `;

        let hr = document.createElement('hr');
        div.appendChild(hr);
    }



};


seattle.randomCustomer();
seattle.cookiesPerches();
seattle.showSales();
