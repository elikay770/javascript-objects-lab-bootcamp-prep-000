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

delete recipes.salad

