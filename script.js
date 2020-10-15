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
	console.log("hi");
	$(
		".dollar-box input[data-value='100'], .gift-box input[data-value='One-Time']"
	)
		.parent()
		.addClass("active");
}

setAmounts();
setGiftTypes();

initMiniDonationFormValues();

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
	$("a[href^='#']").click(function (e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;
		$("body, html").animate(
			{
				scrollTop: position - 60
			},
			700
		);
	});
	
	$(".dollar-handles .dollar-box input").on("click", function (e) {
		e.preventDefault();
		let amount = $(this).data("value");
		console.log(amount);
		
		$(".dollar-box input").each(function() {
			
		})
		
		// $(".dollar-box").removeClass("active");
		
		
		// console.log("hi" + $(this).data("value"));
		// $(this).parent().addClass("acitve");
	});
});

function headerHeight(element) {
	var headerHeightValue = element.outerHeight();
	console.log("checked height");
	return headerHeightValue;
}

$("main").css("margin-top", headerHeight($("header")) + "px");

if ($(document).scrollTop() > 300) {
	$("header").addClass("reduced");
	$(".scrollToTop").fadeIn();
}

$(document).on("scroll", function () {
	if ($(document).scrollTop() > 200) {
		$(".scrollToTop").fadeIn("slow");
		$("header").addClass("reduced");
		$("button.hamburger").addClass("reduced");
		//$("#content").css("margin-top", headerHeight($("header")) + "px");
	} else {
		$(".scrollToTop").fadeOut("slow");
		$("header").removeClass("reduced");
		$("button.hamburger").removeClass("reduced");
		//$("#content").css("margin-top", headerHeight($("header")) + "px");
	}
});
