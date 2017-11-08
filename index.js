var recipes = {'type' : 'ingredient'}

function Objects(recipes, key , value){

  recipes[key] = value

return recipes
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({} , object, { [key] : value})

}
