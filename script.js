var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    
    // Get all the countries with a population of less than 2 lakhs using Filter function
    var res=JSON.parse(request.response);
    let bres=res.filter((foo)=>foo.population<200000 );
    console.log(bres);
// Get all the countries from Asia continent /region using Filter function
    let dream=res.filter((ele)=>ele.region=="Asia");
    console.log(dream);
// Print the country which uses US Dollars as currency
    let ccurren=res.filter((ele)=>ele.currencies[0].name==="United States dollar");
    console.log(ccurren);

    // Print the total population of countries using reduce function

    let add= res.reduce((ele,acc)=>ele+acc.population);
     
    console.log(+" "+add);
}
