var wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.appendChild(wrapper);


	var formBox = document.createElement('form');
	formBox.className = "form__box";
	wrapper.appendChild(formBox);

		var formList = document.createElement('ol');
		formList.className = "form__list";
		formBox.appendChild(formList);

			var formItem = document.createElement('li');
			formItem.className = "form__item";			
			formList.appendChild(formItem);

			var formHead = document.createElement('h3');
			formHead.className = "form__head";
			formHead.innerHTML = "Вопрос №1";
			formItem.appendChild(formHead);

				var formSubList = document.createElement('ul');
				formSubList.className = "form__sub-list";
				formItem.appendChild(formSubList);

					var formSubItem = document.createElement('li');
					formSubItem.className = "form__sub-item";
					formSubList.appendChild(formSubItem);

						var formLabel = document.createElement('label');
						formLabel.className = "form__label";
						formSubItem.appendChild(formLabel);

							var forminput = document.createElement('input');
							forminput.className = "form__input";							
							forminput.type = "checkbox";
							forminput.name = "quest1"
							formLabel.appendChild(forminput);

							var formText = document.createElement('span');
							formText.innerHTML = "Вариант ответа №1";
							formLabel.appendChild(formText);

					var formSubItem2 = formSubItem.cloneNode(true);
					formSubItem2.querySelector('span').innerHTML = "Вариант ответа №2";
					formSubList.appendChild(formSubItem2);

					var formSubItem3 = formSubItem.cloneNode(true);
					formSubItem3.querySelector('span').innerHTML = "Вариант ответа №3";
					formSubList.appendChild(formSubItem3);

			var formItem2 = formItem.cloneNode(true);
			formItem2.className = "form__item2";
			formItem2.querySelector('h3').innerHTML = "Вопрос №2";
			formList.appendChild(formItem2);

			var formItem3 = formItem.cloneNode(true);
			formItem3.className = "form__item2";
			formItem3.querySelector('h3').innerHTML = "Вопрос №3";
			formList.appendChild(formItem3);

var formSend = document.createElement('input');
formSend.className = "form__send";
formSend.type = "submit";
formSend.value = "Проверить мои результаты";
formBox.appendChild(formSend);