var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({} , object, { [key] : value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
  }

function  deleteFromObjectByKey(object, key){

  const newObj = Object.assign({}, object)

    delete newObj[key]

    return newObj

}




function destructivelyDeleteFromObjectByKey(object, key) {
  var recipestwo = { omelette : 'eggs' , salad : 'lettuce'};
  var recipesthree = Object.assign({} , recipestwo);
return delete recipesthree.salad

}
