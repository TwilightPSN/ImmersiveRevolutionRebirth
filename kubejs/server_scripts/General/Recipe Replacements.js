ServerEvents.recipes(IRRebirth => {

  IRRebirth.replaceInput(
    { input: 'minecraft:crafting_table' },
    'minecraft:crafting_table',
    '#forge:workbenches'
  )
  IRRebirth.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, IRReplace => {
    let ingredients = IRReplace.originalRecipeIngredients
    let output = IRReplace.originalRecipeResult
    IRRebirth.shapeless(Item.of(output.id, 2), ingredients[0]).id(IRReplace.getOrCreateId())
  })
  IRRebirth.replaceInput(
    { output: 'minecraft:flint_and_steel' },
    'minecraft:iron_ingot',
    '#forge:ingots/steel'
  )
})

