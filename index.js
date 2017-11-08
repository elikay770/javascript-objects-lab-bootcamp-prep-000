var recipes = {'type' : 'ingredient'}

function Objects(recipes, key , value){

  recipes[key] = value

return recipes
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({} , object, { [key] : value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
  }

var recipes = { omelette : 'eggs' , salad : 'lettuce'}
function  deleteFromObjectByKey(object, key){
return delete recipes.salad
}

var recipestwo = { omelette : 'eggs' , salad : 'lettuce'};
function destructivelyDeleteFromObjectByKey(object, key) {

retur delete recipestwo.salad
}
