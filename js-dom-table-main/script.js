// function buildTable() {
//     const rows = document.getElementById('custom_rows').value;
//     const cols = document.getElementById('custom_col').value;
//     const mybutton = document.querySelector('button');

//     const table = "<table>";
//     table += "<tbody>";
  
//     for (i = 0; i < custom_rows; i++) {
//       table += "<tr>";
  
//       for (j = 0; j < custom_col; j++) {
//         table += "<td>&nbsp;</td>";
//       }
  
//       table += "</tr>";
//     }
  
//     table += "</tbody>";
//     table += "</table>";
  
//     document.getElementById("tableHolder").innerHTML = table;
//   }

//   mybutton.addEventListener('click',buildTable )


// 1. pasizymiu elementus and kintamuju
const my_custom_rows = document.getElementById('custom_rows');
const my_custom_col = document.getElementById('custom_col');
const my_button = document.querySelector('button');

//2. deklaruoju funkcija

const createTable = () => {
  console.log("funkcija veikia");
  // pirmas ciklas kurs eilutes
  console.log(my_custom_rows.value);
  // pirmo ciklo viduje kurs stulpelius
  console.log(my_custom_col.value);
  // lentele turiu sukurti viena karta, funkcijai startavus
  const my_table = document.createElement('table');
  document.body.appendChild(my_table);
  for(let i=0; i < my_custom_rows.value; i++){
    //kuriu eilutes
    const my_rows = document.createElement('tr');
    //idedu eilutes i lentele
    my_table.appendChild(my_rows);
    //kiekvienos eilutes viduje kuriu stulpelius
    for(let j =0; j < my_custom_col.value; j++){
      //kuriu td elementus
      const my_col = document.createElement('td');
      // irasome teksta, kad matytume rezultata html dokumente
      my_col.innerText = "stulpelis";
      //pridedu stulpeliu eilute, tik tada atsiras html jie
      my_rows.appendChild(my_col);
    }

  }
}

//3. kvieciu funkcija, aprasau mygtukui event
my_button.addEventListener('click',createTable )