import displayFood from "./displayFood.module.js";
export default async function Ingredients() {
    $("#loadingScreen").removeClass("d-none")
    $(async function () {
        $("#loadingScreen").fadeOut(1000)
        $("#foodList").addClass("d-none")
        $("#search").addClass("d-none")
        $("#selectedFoodData").addClass("d-none")
        $("#form").addClass("d-none")
        let myReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let data = await myReq.json()
        let { meals } = data
        console.log(meals);
        $("#foodList").empty()
        let descreption = ""
        for (let i = 0; i < 20; i++) {
            let { strIngredient, strDescription } = meals[i]

            if (strDescription.length >= 100) {
                descreption = strDescription.slice(0, 100)
            }
            else {
                descreption = strDescription
            }
            $("#foodList").append(`<div class="col-md-3 ">
        <div class="food-item text-center position-relative rounded-2 rounded" idmeal=${strIngredient}>
            <i class="fa-solid fa-drumstick-bite fa-4x text-white"></i>
            <h2 class="text-white py-3">${strIngredient}</h2>
            <p class="py-3 text-white">${descreption}</p>
      
        </div>
    </div>`)
            $("#foodList").removeClass("d-none")
        };
        $(".food-item").click(async function () {
            let area = $(this).attr("idmeal")
            let meals = await ingredientsReq(area)
            await displayFood(meals)


        });
    })
}
async function ingredientsReq(x) {
    let myReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`)
    let data = await myReq.json()
    let { meals } = data
    return meals

}