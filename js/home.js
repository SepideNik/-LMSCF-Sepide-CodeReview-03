function calculateCoverage(){	
	
	var age = document.getElementById("age").value;
	var Horsepower = document.getElementById("Horsepower").value;
	var CtryId = document.getElementById("Country").value;
	var result = calculateInsurancePerCountry(Horsepower,age,CtryId);    
    document.getElementById("result").innerHTML = result;
 }
function getCountryByCode(CtryId) {
	var CountryList = JSON.parse(Countries);
  	return CountryList.filter(
		function(data){ return data.Id == Number(CtryId)}
  	);
}
function calculateInsurancePerCountry(horse_power, age, CtryId){

	var name = document.getElementById("name").value;
	var item = getCountryByCode(CtryId);
	console.log(item);
	console.log(Number(horse_power));
	console.log(Number(item[0].Multiply));
	console.log(Number(age));
	console.log(Number(item[0].AgePlus));
	console.log(Number(item[0].Division));

	try{
		var rslt = Number(horse_power) * 
		Number(item[0].Multiply) / (Number(age) + Number(item[0].AgePlus))  
		+ Number(item[0].Division);
		return name + ", your insurance costs is " + Math.round(rslt) + "€";
	}catch{
		return name + ", your entered data is incorrect";
	}

}