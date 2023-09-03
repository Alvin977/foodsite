import displayFood from "./displayFood.module.js";
export default async function Area() {
    $("#loadingScreen").removeClass("d-none")
    $(async function () {
        $("#loadingScreen").fadeOut(1000)
        $("#foodList").addClass("d-none")
        $("#search").addClass("d-none")
        $("#selectedFoodData").addClass("d-none")
        $("#form").addClass("d-none")
        let myReq = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let data = await myReq.json()
        let { meals } = data
        console.log(meals);
        $("#foodList").empty()
        meals.forEach(el => {
            let { strArea } = el
            $("#foodList").append(`<div class="col-md-3 ">
        <div class="food-item text-center position-relative rounded-2 rounded" idmeal=${strArea}>
            <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
            <h2 class="text-white">${strArea}</h2>
      
        </div>
    </div>`)
        });
        $("#foodList").removeClass("d-none")
        $(".food-item").click(async function () {
            let area = $(this).attr("idmeal")
            let meals = await areaReq(area)
            await displayFood(meals)


        });
    })
}
async function areaReq(x) {
    let myReq = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`)
    let data = await myReq.json()
    let { meals } = data
    return meals

}