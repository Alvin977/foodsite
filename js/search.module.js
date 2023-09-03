import displayFood from "./displayFood.module.js"

export default async function search() {
    $("#loadingScreen").removeClass("d-none")
    $(async function () {
        $("#loadingScreen").fadeOut(1000)
        $("#search").removeClass("d-none").addClass("d-flex")
        $("#foodList").addClass("d-none")
        $("#selectedFoodData").addClass("d-none")
        $("#form").addClass("d-none")

        $("#search input").click(function () {
            let iid = $(this).attr("id")
            if (iid == "searchByName") {
                $(`#${iid}`).keyup(async function () {
                    let value = $(this).val()
                    console.log(value);
                    let meals = await searchReq(`s=${value}`)
                    displayFood(meals)
                    $("#foodList").removeClass("d-none")
                })
            }
            else if (iid == "searchByFirst") {
                $(`#${iid}`).keyup(async function () {
                    let value = $(this).val()
                    console.log(value);
                    let meals = await searchReq(`f=${value}`)
                    displayFood(meals)
                })
            }
        })
    })
}
export async function searchReq(x) {
    let myReq = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${x}`)
    let data = await myReq.json()
    let { meals } = data
    return meals

}
