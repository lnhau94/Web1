// const tmpDateFrom = [];
// const tmpDateTo = [];
// const tmpMonthPicker = [];
import {orders} from './data.js'
// let orders = localStorage.getItem('orders')?JSON.parse(localStorage.getItem('orders')):[];



export const handleEventStatistics = () => {
  let buttonStatisticProduct
  let buttonStatisticRevenue
  let buttonStatisticRevenueYear
  let fromDate
  let toDate
  let submitDate
  let submitYear
  let inputYear
  buttonStatisticProduct = document.querySelector(".huy-button-statistic-product");
  buttonStatisticRevenue = document.querySelector(".huy-button-statistic-revenue");
  buttonStatisticRevenueYear = document.querySelector(".huy-button-statistic-revenue-year");
  fromDate = document.querySelector(".huy-input-date-from");
  toDate = document.querySelector(".huy-input-date-to");
  submitDate = document.querySelector(".huy-submit-date");
  submitYear = document.querySelector(".huy-submit-year");
  inputYear = document.querySelector(".huy-input-year");
  buttonStatisticProduct.addEventListener("click", () => {
    document.querySelector(".huy-date-picker").classList.remove("huy-date-picker-on");
    document.querySelector(".huy-year-picker").classList.remove("huy-year-picker-on");
    document.querySelector(".huy-table-header-statistic-revenue").classList.remove("huy-table-header-statistic-revenue-on");
    document.querySelector(".huy-graph-revenue").classList.remove("huy-graph-revenue-on");
    document.querySelector(".huy-date-picker").classList.add("huy-date-picker-on");
    document.querySelector(".huy-table-header-statistic-product").classList.add("huy-table-header-statistic-product-on");
  });
  buttonStatisticRevenue.addEventListener("click", () => {
    document.querySelector(".huy-date-picker").classList.remove("huy-date-picker-on");
    document.querySelector(".huy-year-picker").classList.remove("huy-year-picker-on");
    document.querySelector(".huy-table-header-statistic-product").classList.remove("huy-table-header-statistic-product-on");
    document.querySelector(".huy-graph-revenue").classList.remove("huy-graph-revenue-on");
    document.querySelector(".huy-date-picker").classList.add("huy-date-picker-on");
    document.querySelector(".huy-table-header-statistic-revenue").classList.add("huy-table-header-statistic-revenue-on");
  });
  buttonStatisticRevenueYear.addEventListener("click", () => {
    document.querySelector(".huy-date-picker").classList.remove("huy-date-picker-on");
    document.querySelector(".huy-date-picker").classList.remove("huy-date-picker-on");
    document.querySelector(".huy-table-header-statistic-revenue").classList.remove("huy-table-header-statistic-revenue-on");
    document.querySelector(".huy-table-header-statistic-product").classList.remove("huy-table-header-statistic-product-on");
    document.querySelector(".huy-year-picker").classList.add("huy-year-picker-on");
  });
  submitYear.addEventListener("click", () => {
    let tmpData = [0,0,0,0,0,0,0,0,0,0,0,0];
    let Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    if (inputYear.value == "") {
      alert("Please enter year");
    } 
    else {
      for(let i = 0; i < orders.length; i++) {
        if (orders[i]['state'] == "process" && orders[i]['date'].getFullYear() == Number(inputYear.value)){
          let tmpMonth = orders[i]['date'].getMonth();
          tmpData[tmpMonth] += orders[i]['totalPrice'];
        }
      }
      const dataGraph = {
        labels: Months,
        datasets: [{
          label: 'Doanh thu theo từng tháng trong năm',
          data: tmpData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 153, 204, 0.2)',
            'rgba(191, 64, 64, 0.2)',
            'rgba(255, 102, 26, 0.2)',
            'rgba(230, 0, 115, 0.2)',
            'rgba(26, 26, 255, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 153, 204)',
            'rgb(191, 64, 64)',
            'rgb(255, 102, 30)',
            'rgb(230, 0, 115)',
            'rgb(26, 26, 255)'
          ],
          borderWidth: 1
        }]
      };
      new Chart("huyChart", {
        type: 'bar',
        data: dataGraph,
        options: {
          tooltips: {
            callbacks: {
              label: (item) => `Doanh thu ${item.yLabel} VND`,
            },
          },
          scales: {
            y: {
              beginAtZero: true
            },
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Revenues',
                fontSize: 20
              },
              ticks: {
                // fontSize: 40
                beginAtZero: true
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Months',
                fontSize: 20
              },
              // ticks: {
              //   fontSize: 40
              //   beginAtZero: true
              // }
            }]
          }
        },
      });
      document.querySelector(".huy-graph-revenue").classList.add("huy-graph-revenue-on");
      document.querySelector(".huy-table-revenue").innerHTML = ''
      document.querySelector(".huy-table-revenue").innerHTML = `
      <tr>
        <th>Month</th>
        <th>Revenue</th>
      </tr>
      `
      for (let i=0; i < Months.length; i++){
        document.querySelector(".huy-table-revenue").innerHTML += `
        <tr>
          <th>${Months[i]}</th>
          <th>${tmpData[i]} VND</th>
        </tr>
        ` 
      }
    }

    // console.log(typeof(inputYear.value));
    // console.log(tmpData);
    // for (let i = 1; i <= Months.length; i++) {
    //   console.log(i);
    //   // console.log(i+1);
    //   // console.log((new Date().getMonth() + 1));
    // }
  });
}