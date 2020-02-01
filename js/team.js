 var members = JSON.parse(teamMembers);
 console.log(members);
for (i = 0; i < members.length; i++) {
	var temp = `<div class='membersList' onclick= SetDetail(` + i +`)>
					<img class='membersPic' src=`+ members[i].image +` alt='hh'>
					<p class='memberName'>`+ members[i].name +`</p><div class='divMemberDetail' id='membersDetail`+ members[i].MemberId +`'>
					</div></div>`;
	 console.log(temp);
	document.getElementById("teamMembers").innerHTML += temp;
}
function SetDetail(ID){
	console.log(members[ID]);
	var detail=`<div class='divDetailItem'><p class='detailTitle'>Last Name: </p><p>`+ members[ID].family +
	`</p></div><div class='divDetailItem'><p class='detailTitle'>Tel: </p><p>`+ members[ID].tel +
	`</p></div><div class='divDetailItem'><p class='detailTitle'>Email: </p><p>`+ members[ID].email + `</p></div>`;

	  
	console.log(detail);
	// "<div>"+ members[ID].family +"<div><div>"+ members[ID].email 
	// +"<div><div>"+ members[ID].tel +"<div>";
	console.log(detail);
	var divDetail = "membersDetail" + members[ID].MemberId;
	for (i = 0; i < members.length; i++) {
		var divs_Detail = "membersDetail" + members[i].MemberId;
		document.getElementById(divs_Detail).style.display = "none";
	}
	console.log(divDetail);
	document.getElementById(divDetail).innerHTML = detail;
	document.getElementById(divDetail).style.display = "block";

}
    