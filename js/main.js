"use strict";

const strelkaAbSv = document.getElementById("chevronAbSv");
const abSvBl = document.getElementById("aboutServiceBlock");
const abSv = document.getElementById("aboutServiceBlocks");

let ab_Sv = abSv.clientHeight;
abSvBl.onclick = function () {
	if (ab_Sv == 0) {
		let g = setInterval(function () {
			abSv.style.height = ab_Sv + "px";
			ab_Sv++;
			if (ab_Sv == 56) {
				clearInterval(g);
				strelkaAbSv.setAttribute("class", "fas fa-chevron-up");
			}
		}, 1);
	} else {
		let g = setInterval(function () {
			abSv.style.height = ab_Sv + "px";
			ab_Sv--;
			if (ab_Sv == -1) {
				clearInterval(g);
				ab_Sv = 0;
				strelkaAbSv.setAttribute("class", "fas fa-chevron-down");
			}
		}, 1);
	}
};

const strelkaFUr = document.getElementById("chevronForUsers");
const fUrBl = document.getElementById("forUsersBlock");
const fUr = document.getElementById("forUsersBlocks");

let f_Ur = fUr.clientHeight;
fUrBl.onclick = function () {
	if (f_Ur == 0) {
		let g = setInterval(function () {
			fUr.style.height = f_Ur + "px";
			f_Ur++;
			if (f_Ur == 122) {
				clearInterval(g);
				strelkaFUr.setAttribute("class", "fas fa-chevron-up");
			}
		}, 1);
	} else {
		let g = setInterval(function () {
			fUr.style.height = f_Ur + "px";
			f_Ur--;
			if (f_Ur == -1) {
				clearInterval(g);
				f_Ur = 0;
				strelkaFUr.setAttribute("class", "fas fa-chevron-down");
			}
		}, 1);
	}
};

const strelkaHp = document.getElementById("chevronHp");
const hpBl = document.getElementById("hpBlock");
const hp = document.getElementById("hpBlocks");

let h_p = hp.clientHeight;
hpBl.onclick = function () {
	if (h_p == 0) {
		let g = setInterval(function () {
			hp.style.height = h_p + "px";
			h_p++;
			if (h_p == 89) {
				clearInterval(g);
				strelkaHp.setAttribute("class", "fas fa-chevron-up");
			}
		}, 1);
	} else {
		let g = setInterval(function () {
			hp.style.height = h_p + "px";
			h_p--;
			if (h_p == -1) {
				clearInterval(g);
				h_p = 0;
				strelkaHp.setAttribute("class", "fas fa-chevron-down");
			}
		}, 1);
	}
};

window.addEventListener("DOMContentLoaded", function (e) {
	let singed = true;

	if (singed) {
		document.querySelector(".head__profile").style.display = "flex";
	} else {
		document.querySelector(".head__singIn").style.display = "block";
		document.querySelector(".head__botton").style.display = "none";
		document.querySelector(".head__right").style.width = "350px";
	}

	const showHideElem = (trigger, hidden, clas) => {
		const triggerElem = document.querySelectorAll(trigger),
			hiddenElem = document.querySelectorAll(hidden);

		for (let i = 0; i < triggerElem.length; i++) {
			triggerElem[i].addEventListener("click", (e) => {
				showHide(i, e);
			});
		}

		function showHide(index, e) {
			if (innerWidth <= 1040 && innerWidth >= 551) {
				if (clas === "activeProfile") {
					let parent = triggerElem[index].offsetParent;

					if (parent.classList.contains(clas) === true) {
						parent.classList.remove(clas);
					} else {
						if (
							e.target.parentElement.classList.contains("head__logine") === true
						) {
							document
								.querySelector(".head__bell")
								.classList.remove("activeBell");
							document
								.querySelector(".head__media_modal")
								.classList.remove("activeModal");
						}

						parent.classList.add(clas);
					}
				} else {
					if (triggerElem[index].classList.contains(clas) === true) {
						triggerElem[index].classList.remove(clas);
					} else {
						for (let i = 0; i < triggerElem.length; i++) {
							triggerElem[i].classList.remove(clas);
						}
						if (triggerElem[index].classList.contains("head__bell") === true) {
							document
								.querySelector(".head__right")
								.classList.remove("activeProfile");
							document
								.querySelector(".head__media_modal")
								.classList.remove("activeModal");
						}

						triggerElem[index].classList.add(clas);
					}
				}
				console.log("asd");
			} else if (innerWidth <= 550) {
				let mobileBell = document.querySelector(".mobile__bell_modal");
				try {
					document.querySelector("#remove__mobile").remove();
				} catch (e) {
					// statements
				}
				if (triggerElem[0].classList.contains("head__bell") === true) {
					if (mobileBell.classList.contains("active__mobile_bell") === true) {
						mobileBell.classList.remove("active__mobile_bell");
					} else {
						mobileBell.classList.add("active__mobile_bell");
					}
				}

				if (
					triggerElem[index].classList.contains("media__active_hide") === true
				) {
					triggerElem[index].classList.remove("media__active_hide");
				} else {
					for (var i = 0; i < triggerElem.length; i++) {
						triggerElem[i].classList.remove("media__active_hide");
					}
					triggerElem[index].classList.add("media__active_hide");
				}
			} else {
				console.log("asd");
				let clicked = document.querySelectorAll(".clickedElem");

				if (clas === "activeProfile") {
					let parent = triggerElem[index].offsetParent;

					if (parent.classList.contains(clas) === true) {
						parent.classList.remove(clas);
					} else {
						for (let i = 0; i < clicked.length; i++) {
							clicked[i].classList.remove("active");
							clicked[i].classList.remove("activeBell");
							clicked[i].classList.remove("activeProfile");
						}
						parent.classList.add(clas);
					}
				} else {
					if (triggerElem[index].classList.contains(clas) === true) {
						triggerElem[index].classList.remove(clas);
					} else {
						for (let i = 0; i < clicked.length; i++) {
							clicked[i].classList.remove("active");
							clicked[i].classList.remove("activeBell");
							clicked[i].classList.remove("activeProfile");
						}

						triggerElem[index].classList.add(clas);
					}
				}
			}
		}
	};
	const showModal = (open, close, elem) => {
		const openElem = document.querySelector(open),
			closeElem = document.querySelectorAll(close),
			element = document.querySelector(elem);

		openElem.addEventListener("click", openModal);
		for (let i = 0; i < closeElem.length; i++) {
			closeElem[i].addEventListener("click", closeModal);
		}

		function openModal() {
			element.classList.add("activeModal");

			document.querySelector(".head__right").classList.remove("activeProfile");
			document.querySelector(".head__bell ").classList.remove("activeBell");
			document
				.querySelector(".mobile__bell_modal ")
				.classList.remove("active__mobile_bell");
		}
		function closeModal() {
			element.classList.remove("activeModal");
		}
	};

	const checkTextLength = (iteam) => {
		const text = document.querySelectorAll(iteam);

		for (let i = 0; i < text.length; i++) {
			let despText = text[i].textContent.replace(/\s+/g, " ").trim();
			let textArrow = despText.split(" ");

			if (textArrow[0].length > 13) {
				let longName = textArrow[0].split("");
				let newText = longName.splice(0, 13);

				text[i].textContent = newText.toString().replace(/,/g, "") + "...";
			} else {
				let textArrow2 = despText.split("");
				if (textArrow2.length > 13) {
					let space = textArrow2.indexOf(" ");
					let newText = textArrow2.splice(0, space + 2);

					text[i].textContent = newText.toString().replace(/,/g, "") + ".";
				}
			}
		}
	};
	const checkNumberLenght = (iteam) => {
		const number = document.querySelector(iteam);

		if (+number.textContent >= 100) {
			number.textContent = "99+";
		}
	};

	checkTextLength(".head__name");
	showHideElem(".head__bottom", ".hide__link", "active");
	showHideElem(".head__bell", ".hide__bell_modal", "activeBell");
	showHideElem(".head__logine", ".head__hide", "activeProfile");
	showHideElem(
		".media__hide_button",
		".media__hide_links",
		"media__active_hide"
	);

	showModal(".head__burger", ".close", ".head__media_modal");

	checkNumberLenght(".head__bell p");
	checkNumberLenght(".head__chat p");

	/* *********** FINANCE SECTION *********** */
	const calculateTotalIncomeAndExpenses = (
		itemsToCalculate,
		resultContainer
	) => {
		const prices = document.querySelectorAll(itemsToCalculate);
		const result = document.querySelector(resultContainer);

		if (prices && result) {
			var tmpRes = 0;
			prices.forEach((price) => {
				tmpRes += parseInt(price.textContent.replace("$", ""));
			});
			result.textContent = tmpRes + " $";
		}
	};
	calculateTotalIncomeAndExpenses("#_income-box li span", "#total-income");
	calculateTotalIncomeAndExpenses("#_expenses-box li span", "#total-expenses");

	/* *********** END FINANCE SECTION *********** */

	/* *********** TRANSLATE SECTION *********** */
	const calculateTotalIncomeAndPaid = (itemsToCalculate) => {
		const prices = document.querySelectorAll(itemsToCalculate);

		if (prices) {
			var tmpRes = 0;
			prices.forEach((price) => {
				tmpRes += parseInt(price.textContent.replace("$", ""));
			});
			return tmpRes;
		}
	};
	const calculateTotalResut = (resultContainer, period) => {
		const resContainer = document.querySelector(resultContainer);
		if (resContainer) {
			if (period == "30days") {
				// calculate total (incomes - paid) for 30 days
				resContainer.textContent =
					calculateTotalIncomeAndPaid(".profit-section-incomes-for-30days") -
					calculateTotalIncomeAndPaid(".profit-section-paid-for-30days") +
					" $";
			} else {
				// calculate total (incomes - paid) for whole time
				resContainer.textContent =
					calculateTotalIncomeAndPaid(
						".profit-section-incomes-for-whole-time"
					) -
					calculateTotalIncomeAndPaid(".profit-section-paid-for-whole-time") +
					" $";
			}
		}
	};
	calculateTotalResut(".profit-section-total-for-30days", "30days");
	calculateTotalResut(".profit-section-total-for-whole-time", "wholetime");

	// datetimepicker settings
	$("#datepicker").datetimepicker({
		timepicker: false,
		format: "d.m.Y",
		lang: "ru",
		onChangeDateTime: function (dp, $date) {
			console.log($date.val());
		},
	});

	/* *********** END TRANSLATE SECTION *********** */

	/* *********** REQUEST SECTION *********** */
	// toolkit settings
	const infoShowBtn = document.getElementById("info_show_btn");
	const infoBox = document.getElementsByClassName("inner-info");
	if (infoShowBtn) {
		infoShowBtn.addEventListener("click", () => {
			infoBox[0].classList.toggle("show-inner-info");
			infoShowBtn.classList.toggle("show_index");
		});
	}
	/* *********** END REQUEST SECTION *********** */

});