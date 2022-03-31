// new Taucharts.Chart({
//     data: data(),
//     type: 'line',
//     x: 'i',
//     y: 'val',
//     color: 'team',
//     guide: {
//     	showAnchors: 'always',
//         interpolate: 'smooth-keep-extremum',
//         color:{
//             brewer:['#0000FF', 'rgb(0, 255, 0)', '#0000FF']
//         },
//         showGridLines:false,
//     },

//     plugins: [
//         Taucharts.api.plugins.get('tooltip')()
//     ]
// }).renderTo('#line-chart');


// function data() {
// 	return [
//     {i: 0, val: 10, type: 'A'},
//     {i: 5, val: 20, type: 'A'},
//     {i: 10, val: 15, type: 'A'},
//     {i: 20, val: 5, type: 'A'},
//     {i: 30, val: 25, type: 'A'},
//   ]
// }

// var data = [
//     { process: 'sales', stage: 'visit', count: 100 },
//     { process: 'sales', stage: 'trial', count: 50  },
//     { process: 'sales', stage: 'buy',   count: 15  },
// ];

// var chart = new Taucharts.Chart({
//    type : 'horizontal-stacked-bar',
//     y : 'process',
//     x : 'count',
//     color: 'stage',
//     data: data,
//      guide: {
//         color:{
//             brewer:['#2c1da1', '#8f1f56', '#ff0000']
//         },
//         showGridLines:false,
//     },
//      plugins: [
//         Taucharts.api.plugins.get('tooltip')()
//     ]
// }).renderTo('#bar-chart');

// const myArray = [
//   {
//     name:"passum",
//     value:2
//   },
//   {
//     name:"Robert",
//     value:3
//   },
//   {
//     name:"Tornado",
//     value:4
//   },
// ]


let content = document.querySelector(".content-show")
let cardOne = document.querySelector("#card-1")
let cardTwo = document.querySelector("#card-2")
 content.insertAdjacentHTML("beforeend",'new para')
 let url = "https://jsonplaceholder.typicode.com/users"


async function fetchData(){
    let url = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(url)
    const data = await response.json()
    htmlData(data)
    return data
         // cardTwo.insertAdjacentHTML("beforeend",`${data[1].name}`)
}

 fetchData().then(data =>{
     $.ajax({
type: "POST",
url: "index.html",
data:{data:data
},

success: function (text) {
$('#card-1').html(text);
},
error: function (xhr, ajaxOptions, thrownError) {
alert(xhr.status + " " + thrownError);
},

})
 })
 function htmlData(data){
      cardOne.innerHTML += `<li><a href="#">Item ${data[1].company.name}</a></li>`
      cardTwo.innerHTML += `<li><a href="#">Item ${data[2].company.name}</a></li>`
     // cardOne.insertAdjacentHTML("beforeend",'testing 123')
     // cardOne.style.color = "red"
     // cardTwo.insertAdjacentHTML("beforeend",`${data[0].name}`)
     // cardTwo.style.color = "red"
     console.log(data)
 }



// fetch(url)
//  .then(response =>{
//     return response.json()
//  })
//  .then(data=>{
//     console.log(data)
//     return 
//  })
tippy('p', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
});

