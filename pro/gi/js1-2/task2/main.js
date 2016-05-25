		var arrName = [];

		var anyName;

		var userName;


		for (var i = 0; i < 5; i++) {
			anyName = prompt('enter any name', "");
			arrName.push(anyName);
		}

		userName = prompt('enter your name', "");
		 
		for (var i =0; i < arrName.length; i++){
			if (arrName[i] == userName) {
				alert(userName + ' вы успешно вошли');				
			} else {				
				alert('нет совпадения');				
			}
		}
		






		


