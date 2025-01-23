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
  IRRebirth.forEachRecipe({ type: 'create:sawing', input: '#forge:stripped_logs', output: '#minecraft:planks' }, IRReplace => {
    let ingredients = IRReplace.originalRecipeIngredients
    let output = IRReplace.originalRecipeResult
    IRRebirth.recipes.createCutting(Item.of(output.id, 3), ingredients[0]).id(IRReplace.getOrCreateId())
  })
  IRRebirth.replaceInput(
    { output: 'minecraft:flint_and_steel' },
    'minecraft:iron_ingot',
    '#forge:ingots/steel'
  )
  IRRebirth.replaceInput(
    { output: 'storagenetwork:kabel' },
    'minecraft:iron_ingot',
    '#forge:plates/brass'
  )
  IRRebirth.replaceInput(
    { output: 'storagenetwork:master' },
    'minecraft:quartz',
    'create:polished_rose_quartz'
  )
  IRRebirth.replaceInput(
    { output: 'storagenetwork:inventory' },
    'minecraft:iron_nugget',
    'create:brass_nugget'
  )
  IRRebirth.replaceInput(
    { output: 'storagenetwork:request' },
    'minecraft:gold_ingot',
    '#forge:plates/brass'
  )
})

