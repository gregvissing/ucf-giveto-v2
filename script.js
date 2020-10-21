// ScrollTrigger.create({ start: 'top -80', end: 99999, toggleClass: {className: 'main-header--reduced', targets: '.main-header'}});
   
$(function () {
	$("input.SearchTextBox").attr("placeholder", "Search");

	var $div1 = $("#search");
	$(".search > a").on("click", function (e) {
		e.preventDefault();

		$div1.toggleClass("isOpen").slideToggle();
		var isOut = $div1.hasClass("isOpen");
		$div1.animate({ marginTop: isOut ? "" : "-55px" }, 300);
	});
});

$(document).ready(function () {
	
	var searchIcon = $('<svg class="searchIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.14 49.94"><g><path class="cls-1" d="M24.46,0A21.88,21.88,0,0,1,37.87,4.66c3.72,3,5.76,6.73,5.17,11.66a24.31,24.31,0,0,0,0,4.18c.24,4.74-1.9,8.31-5.54,11.05-5,3.75-10.68,4.84-16.77,4.3a15.07,15.07,0,0,1-3.41-.62c-1.12-.37-1.59,0-2.13,1-2.21,3.87-4.5,7.7-6.79,11.53a4.37,4.37,0,0,1-4.69,2.15A4.46,4.46,0,0,1,.09,46.3a4.78,4.78,0,0,1,.73-3.54C3.06,39,5.26,35.21,7.53,31.46a1.15,1.15,0,0,0-.19-1.71,11.19,11.19,0,0,1-3.55-7.86A68.13,68.13,0,0,1,4,13.08c.5-4.4,3.26-7.41,6.89-9.68C14.74,1,19,0,24.46,0Zm-2,25.8c6.28,0,11-1.67,14.18-4.63,4-3.74,4.14-9,.26-12.87A17.26,17.26,0,0,0,26.27,3.56C21,3,16,3.81,11.59,7c-5.7,4.13-5.82,10.62-.29,15A18.58,18.58,0,0,0,22.45,25.8Zm-4.53,6.05a.58.58,0,0,0,.22.12c6.27,1.39,12.17.65,17.45-3.22a9.58,9.58,0,0,0,3.76-5.42C33.09,28.81,25.9,30,18.24,28.74ZM15,29.78c-.29-.32-.61-.92-.89-.9a2,2,0,0,0-1.4.71c-3,4.91-5.88,9.85-8.81,14.78-.41.7-.72,1.45.14,2s1.35-.17,1.76-.85l8.64-14.6C14.65,30.6,14.79,30.27,15,29.78Zm-4-3.78L7.53,23.26l-.29.2,2.37,4.09Z"></path></g></svg>');	
	$("#menu li.search span").prepend(searchIcon);
	
	function setAmounts() {
		let oneTimeDonationAmounts = [50, 100, 250, 500, 1000];
		let monthlyDonationAmounts = [10, 20, 30, 50, 84];
		let pledgeDonationAmounts = [100, 250, 500, 1000];

		var dollarHandles = document.querySelector(".dollar-handles");

		var arrAmounts = oneTimeDonationAmounts;
		arrAmounts.forEach((element) => {
			console.log(element);

			var amountBox = document.createElement("div"),
				amountInput = document.createElement("input");

			amountBox.classList.add("dollar-box");
			amountInput.classList.add("btnDonAmount");
			amountInput.setAttribute("type", "button");
			amountInput.setAttribute("data-value", element);
			amountInput.value = "$" + element;

			amountBox.appendChild(amountInput);

			dollarHandles.appendChild(amountBox);
		});
	}

	function setGiftTypes() {
		let arrGiftTypes = ["One-Time", "Monthly", "Pledge"];

		var giftHandles = document.querySelector(".gift-type-container");

		arrGiftTypes.forEach((element) => {
			console.log(element);

			var giftBox = document.createElement("div"),
				giftInput = document.createElement("input");

			giftBox.classList.add("gift-box");
			giftInput.classList.add("btnGiftType");
			giftInput.setAttribute("type", "button");
			giftInput.setAttribute("data-value", element);
			giftInput.value = element;

			giftBox.appendChild(giftInput);

			giftHandles.appendChild(giftBox);
		});
	}

	function initMiniDonationFormValues() {
		$(
			".dollar-box input[data-value='100'], .gift-box input[data-value='One-Time']"
		)
			.parent()
			.addClass("active");
	}

	function updateUrl(url, key, value) {
		if (value !== undefined) {
			value = encodeURI(value);
		}
		var hashIndex = url.indexOf("#") | 0;
		if (hashIndex === -1) hashIndex = url.length | 0;
		var urls = url.substring(0, hashIndex).split("?");
		var baseUrl = urls[0];
		var parameters = "";
		var outPara = {};
		if (urls.length > 1) {
			parameters = urls[1];
		}
		if (parameters !== "") {
			parameters = parameters.split("&");
			for (k in parameters) {
				var keyVal = parameters[k];
				keyVal = keyVal.split("=");
				var ekey = keyVal[0];
				var evalue = "";
				if (keyVal.length > 1) {
					evalue = keyVal[1];
				}
				outPara[ekey] = evalue;
			}
		}

		if (value !== undefined) {
			outPara[key] = value;
		} else {
			delete outPara[key];
		}
		parameters = [];
		for (var k in outPara) {
			parameters.push(k + "=" + outPara[k]);
		}

		var finalUrl = baseUrl;

		if (parameters.length > 0) {
			finalUrl += "?" + parameters.join("&");
		}

		return finalUrl + url.substring(hashIndex);
	}

	function setURLparams() {
		var donateUrl = $("a.donate").attr("href");
		var amountUrl = $(".dollar-box.active input").data("value");
		var typeUrl = $(".gift-box.active input").data("value");

		console.log(amountUrl);
		var myURL = donateUrl;

// 		myURL = updateUrl(myURL, "amount", amountUrl);
// 		myURL = updateUrl(myURL, "type", typeUrl);
// 		console.log("added location..." + myURL);

// 		$("a.donate").attr("href", myURL);
	}
	
	$("#custom-amount").on("click", function (e) {
		e.preventDefault();
		$(".dollar-box").removeClass("active");
		$(this).focus();
	});
	
	$(".dollar-handles .dollar-box input").on("click", function () {
		// e.preventDefault();
		console.log("hi dollarbox!");
		let amount = $(this).data("value");
		
		$(".dollar-box input").each(function() {
			var thisAmount = $(this).data("value")
			if (thisAmount == amount) {
				$(this).parent().addClass("active");
			} else {
				$(this).parent().removeClass("active");
			}
		});
		
		setURLparams();
	});

	setAmounts();
	setGiftTypes();

	initMiniDonationFormValues();
	setURLparams();
	
	
	// $("a[href^='#']").click(function (e) {
	// 	e.preventDefault();
	// 	var position = $($(this).attr("href")).offset().top;
	// 	$("body, html").animate(
	// 		{
	// 			scrollTop: position - 60
	// 		},
	// 		700
	// 	);
	// });	
});

function headerHeight(element) {
	var headerHeightValue = element.outerHeight();
	// console.log("checked height");
	return headerHeightValue;
}

$("main").css("margin-top", headerHeight($("header")) + "px");

if ($(document).scrollTop() > 300) {
	// $("header").addClass("reduced");
	$(".scrollToTop").fadeIn();
}

$(document).on("scroll", function () {
	if ($(document).scrollTop() > 200) {
		$(".scrollToTop").fadeIn("slow");
		// $("header").addClass("reduced");
		$("button.hamburger").addClass("reduced");
		//$("#content").css("margin-top", headerHeight($("header")) + "px");
	} else {
		$(".scrollToTop").fadeOut("slow");
		// $("header").removeClass("reduced");
		$("button.hamburger").removeClass("reduced");
		//$("#content").css("margin-top", headerHeight($("header")) + "px");
	}
});
