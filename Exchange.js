let data = {
    info: "Central Bank of Myanmar",
    description: "Official Website of Central Bank of Myanmar",
    timestamp: "1651564800",
    rates: {
    MMK:"1",
    USD: "1,850.0",
    CNY: "279.94",
    CHF: "1,890.1",
    ZAR: "115.42",
    NPR: "15.111",
    PKR: "9.9650",
    KES: "15.976",
    EGP: "100.11",
    BDT: "21.321",
    THB: "53.654",
    IDR: "12.761",
    KHR: "45.702",
    SGD: "1,335.3",
    SAR: "493.23",
    LAK: "14.942",
    CZK: "78.665",
    JPY: "1,421.5",
    LKR: "5.2217",
    NZD: "1,188.7",
    VND: "8.0563",
    PHP: "35.208",
    KRW: "146.06",
    HKD: "235.73",
    BRL: "363.74",
    CAD: "1,437.3",
    GBP: "2,320.0",
    RSD: "16.579",
    MYR: "424.95",
    ILS: "549.44",
    DKK: "261.34",
    AUD: "1,314.3",
    SEK: "187.13",
    NOK: "196.04",
    BND: "1,335.3",
    EUR: "1,944.2",
    RUB: "26.269",
    KWD: "6,032.3",
    INR: "24.152"
    }
    };
    let from = document.querySelector("#from");
    let to = document.querySelector("#to");
    let formTag = document.querySelector(".form");
    let input  = document.querySelector(".input");
    let resultTag = document.querySelector(".result");
    let table = document.querySelector("#table");
    let tableData = document.querySelector(".table-data")
    let caclBtn = document.querySelector(".cacl-btn");

    function OptionAdd(countryName,countryValue,selectDiv){
        let option_div = document.createElement("option");
        option_div.setAttribute("value", countryValue)
        let text = countryName;
        option_div.append(text);
        selectDiv.append(option_div);
        
    };
    function fromAddOption(option_div){
        from.append(option_div);
        to.append(option_div)
    };

    function addTableValue (inputValue,result){
        let date = new Date().toLocaleString();
        let fromSelected =  inputValue +" " +from.options[from.selectedIndex].innerText;
        let toSelected =  result +" "+to.options[to.selectedIndex].innerText;
         tableData.innerHTML += `
    
      <tr>
        <td >${date}</td>
        <td width="250px">${fromSelected}</td>
        <td width="250px">${toSelected}</td>
      </tr>    
      `
      
    

    };
    function store (){
        localStorage.setItem("record",tableData.innerHTML);
        
    }
    for (const countryName in data.rates) {
        let countryValue = Number(data.rates[countryName].replace(",",""));
        OptionAdd(countryName, countryValue ,from);
        OptionAdd(countryName, countryValue ,to);    
    }
    
    formTag.addEventListener("submit",(e)=>{
        e.preventDefault()
       //get data   
       let inputValue = input.value;
       let fromValue = from.value;
       let toValue = to.value;
       //get data
       //calculation
       let outputValue = (inputValue * fromValue)/ toValue;
       let result = outputValue.toFixed(2);
       //calculation
       //adding table
       addTableValue(inputValue,result);
        store()
       
       
        //adding table
        //adding result
       if(result === "NaN"){
        resultTag.innerText = "Invalid Number";
        resultTag.style.color = "red";
       }else{
        resultTag.innerText = result;
        resultTag.style.color = "";
       }
       
       //adding resuult 
       input.value = "";
       input.focus();
       from.value = 1;
       to.value = 1;
    });
    
 

    (function(){
        let history = localStorage.getItem("record")
        if(history){
            tableData.innerHTML += history;
        }
    })()