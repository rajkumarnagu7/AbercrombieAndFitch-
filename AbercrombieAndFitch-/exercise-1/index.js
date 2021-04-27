// Write Javascript code!
const appDiv = document.getElementById('app');


const apiUrl = 'https://5dc588200bbd050014fb8ae1.mockapi.io/assessment';



function someFunc(value){
    console.log(value);
    alert("Id: "+value.id +", "+"Created on: "+new Date(value.createdAt));
    }

const options = {
  optionTemplate: `<div>
  {{#each this}}
  <ul>
  <li>
  <b>{{name}}</b>
  <img  src="{{avatar}}">
  <button onclick="someFunc({{{json this}}})">View Details</button> 
  </li> 
  </ul>
  {{/each}}
  </div>`
};

Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context).replace(/"/g, '&quot;');
});

function render(data) {
    const template = options.optionTemplate;
    const compiled = Handlebars.compile(template);
    var html = compiled(data);
appDiv.innerHTML = html;
  }

  var arr=[];

async function getFilmsUsingAwaitSyntax() {
    const response = await fetch(apiUrl);
    if (response && response.status >= 200 && response.status < 400) {
  
      const data = await response.json();
      //createItems(data);
      if(data!=undefined){
        render(data);
        arr=data;
        console.log(arr);
        
      }

  
    } else {
      console.log('error');
    }
  }

getFilmsUsingAwaitSyntax();
