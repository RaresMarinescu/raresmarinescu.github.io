let vec2 = [];
function calcul() {
	numar = document.getElementById("input").value;
	document.getElementById("h1").innerHTML = "";
	
	var vec = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", 
		 "4f", "5d", "6p", "7s", "5f", "6d", "7p"];
	vec2 = vec;
	
	ind = 0;
	plm(numar, 0);
	for (let i = 0; i < ind; i++) {
  		document.getElementById("h1").innerHTML += vec2[i];
		document.getElementById("h1").innerHTML += " ";
	} 
}

function plm(numar, index) {
	if(numar == 0) {
		ind = index;
		return index;
	}
	if(vec2[index][1] == 's') {
		if(numar >=2) {
			numar -= 2;
			vec2[index] += '2';
			plm(numar, index+1);
		}
		else {
			vec2[index] += numar;
			numar -= numar;
			plm(numar, index+1);
		}
	}
	else if(vec2[index][1] == 'p') {
		if(numar >=6) {
			numar -= 6;
			vec2[index] += '6';
			plm(numar, index+1);
		}
		else {
			vec2[index] += numar;
			numar -= numar;
			plm(numar, index+1);
		}
	}
	else if(vec2[index][1] == 'd') {
		if(numar >=10) {
			numar -= 10;
			vec2[index] += 10;
			plm(numar, index+1);
		}
		else {
			if(numar == 4) {
				vec2[index-1] = vec2[index-1][0]+vec2[index-1][1]+1;
				vec2[index] += '5';
			}
			else if(numar == 9) {
				vec2[index-1] = vec2[index-1][0]+vec2[index-1][1]+1;
				vec2[index] += '10';
			}
			else {
				vec2[index] += numar;
			}
			numar -= numar;
			plm(numar, index+1);
		}
	}
	else if(vec2[index][1] == 'f') {
		if(numar >=14) {
			numar -= 14;
			vec2[index] += '14';
			plm(numar, index+1);
		}
		else {
			vec2[index] += numar;
			numar -= numar;
			plm(numar, index+1);
		}
	}
	
}
