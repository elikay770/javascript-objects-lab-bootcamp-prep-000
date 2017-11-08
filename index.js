var recipes = {'type' : 'ingredient'}

function Objects(recipes, key , value){

  recipes[key] = value

return recipes
}

const recipes = { eggs : 3}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({} , object, { [key] : value})

}

