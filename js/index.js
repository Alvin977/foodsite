
import Area from "./Area.module.js"
import Category from "./Categories.module.js"
import Regestration from "./Regestration.module.js"
import Ingredients from "./Ingredients.module.js"
import displayFood from "./displayFood.module.js"
import search, { searchReq } from "./search.module.js"

$(function () {
    $("#loadingScreen").fadeOut(1000)
    let leftSpace = $("#navContent").outerWidth()
    $("#sideNav").css("left", -leftSpace)
    let ulHeight = $("#navContent ul").outerHeight() + "px"
    $("#navBtn").click(function () {
        let lefty = $("#sideNav").css("left")
        if (lefty != "0px") {
            $("#navBtn").empty().html('<i class="fa-solid fa-x fa-2x"></i>')
            $("#navContent ul").css("transform", "translateY(0)")
            $("#sideNav").animate({ left: "0" }, 500)
        }
        else {
            $("#navBtn").empty().html(' <i class="fa-solid fa-bars fa-2x"></i>')
            $("#navContent ul").css("transform", "translateY(" + ulHeight + ")")
            $("#sideNav").animate({ left: -leftSpace }, 500)
        }

    });



    (async function () {
        let meals = await searchReq(`s=`)
        displayFood(meals)
    })()


    $(".list-v li").click(async function () {
        let quest = $(this).html()
        if (quest == "Search") {
            await search()
        }
        else if (quest == "Categories") {
            await Category()
        }
        else if (quest == "Area") {
            await Area()
        }
        else if (quest == "Ingredients") {
            await Ingredients()
        }
        else if (quest == "Contact Us") {
             Regestration()
        }
        
    })

})
