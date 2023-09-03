import displayFoodData from "./displayFoodData.module.js";
import { searchReq } from "./search.module.js";

export default async function displayFood(meals) {
    $(async function () {
        $("#loadingScreen").fadeOut(1000)
        $("#search").addClass("d-none")
        $("#selectedFoodData").addClass("d-none")
        $("#form").addClass("d-none")
        $("#foodList").empty()
        console.log(meals);
        meals.forEach(el => {
            let { idMeal, strMeal, strMealThumb } = el
            $("#foodList").append(`<div class="col-md-3 test">
        <div class="food-item position-relative rounded-2 rounded" idmeal=${idMeal}>
            <img src="${strMealThumb}" class="w-100 test" alt="${strMeal}">
            <div class="item-cover rounded-2 rounded">
                <h4 class="px-2 fa-2x">${strMeal}</h4>
            </div>
        </div>
    </div>`)
        });
        $("#foodList").removeClass("d-none")
        $(".food-item").click(function () {
            console.log("hello");
            let id = $(this).attr("idmeal")
            console.log(id);
            $("#foodList").addClass("d-none")
            $("#selectedFoodData").removeClass("d-none")
            displayFoodData(id)
        });
    })
};