import displayFood from "./displayFood.module.js";

export default async function Category() {
    $("#loadingScreen").removeClass("d-none")
    $(async function () {
        $("#loadingScreen").fadeOut(1000)
        $("#foodList").addClass("d-none")
        $("#search").addClass("d-none")
        $("#selectedFoodData").addClass("d-none")
        $("#form").addClass("d-none")
        let myReq = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let data = await myReq.json()
        let { categories } = data
        console.log(categories);
        console.log("000");
        console.log(categories);
        let descreption = ""
        $("#foodList").empty()
        categories.forEach(el => {
            let { strCategory, strCategoryThumb, strCategoryDescription } = el
            let descrept = strCategoryDescription.split("[1]")[0]
            if (descrept.length >= 100) {
                descreption = descrept.slice(0, 100)
            }
            else {
                descreption = descrept
            }
            console.log(descreption);
            $("#foodList").append(`<div class="col-md-3 ">
        <div class="food-item text-center position-relative rounded-2 rounded" idmeal=${strCategory}>
            <img src="${strCategoryThumb}" class="w-100 " alt="${strCategory}">
            <div class="item-cover rounded-2 rounded d-flex flex-column align-items-center">
                <h4 class="px-2 fa-2x">${strCategory}</h4>
                <p>${descreption}</p>
            </div>
        </div>
    </div>`)
        });
        $("#foodList").removeClass("d-none")
        $(".food-item").click(async function () {
            let Category = $(this).attr("idmeal")
            let meals = await categReq(Category)
            await displayFood(meals)


        });
    })

}
async function categReq(x) {
    let myReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
    let data = await myReq.json()
    let { meals } = data
    return meals

}