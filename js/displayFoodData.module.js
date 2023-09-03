export default async function displayFoodData(qx) {
    $("#loadingScreen").removeClass("d-none")
    $(async function () {
        $("#loadingScreen").fadeOut(1000)
        $("#loadingScreen").fadeOut(1000)
        $("#foodList").addClass("d-none")
        $("#search").addClass("d-none")
        $("#form").addClass("d-none")
        $("#loadingScreen").fadeOut(1000)
        let myreq = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${qx}`)
        console.log(qx);
        let myData = await myreq.json()
        let meals = myData.meals
        let meal = meals[0]
        let { strMeal, strInstructions, strTags, strMealThumb, strCategory, strArea, strYoutube, strSource } = meal
        console.log(strTags);
        $("#selectedFoodData").html(`<div class="col-md-4">
    <img src="${strMealThumb}" class="w-100 rounded-2" alt="${strMeal}">
    <h2>${strMeal}</h2>
</div>
<div class="col-md-8">
    <h2 class="mb-2">Instructions</h2>
    <p>${strInstructions}</p>
    <h4 class="mb-2" ><span class="fw-bolder">Area : </span>${strArea}</h4>
    <h4 class="mb-2" ><span class="fw-bolder">Category : </span>${strCategory}</h4>
    <h4 class="mb-2">Recipes :</h4>
    <ul class="d-flex flex-wrap mb-3" id="ingredients">
 
    </ul>
    <h4 class="mb-2">Tags :</h4>
    <p class="bg-danger-subtle rounded-2 d-inline-block p-1 m-2 text-dark mb-4 ">${strTags}</p>
    <br/>
    <a href="${strSource} " target="_blank" class="btn btn-success" id="sourceWebsite">Source</a>
    <a href="${strYoutube}" target="_blank" class="btn btn-danger" id="youtubeTut">Youtube</a>
   
</div>
</div>
</div>`)

        for (let x = 1; x <= 20; x++) {
            let ingred = meal[`strIngredient${x}`]
            let measur = meal[`strMeasure${x}`]
            let fullIngred = measur + ingred


            if (ingred != null && ingred != "") {
                $("#ingredients").append(` <li class="p-1 m-2 bg-info-subtle text-black rounded-2">${fullIngred}</li>`)
            }
            else {
                break;
            }
        }

        $("#selectedFoodData").removeClass("d-none")
    })
}