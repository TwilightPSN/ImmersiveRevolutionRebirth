ServerEvents.recipes(IRRebirth => {
  IRRebirth.replaceInput({ input: 'minecraft:crafting_table' },'minecraft:crafting_table','#forge:workbenches')
  IRRebirth.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, IRReplace => {
    let ingredients = IRReplace.originalRecipeIngredients
    let output = IRReplace.originalRecipeResult
    IRRebirth.shapeless(Item.of(output.id, 2), ingredients[0]).id(IRReplace.getOrCreateId())
  })
  IRRebirth.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, IRReplace => {
    let ingredients = IRReplace.originalRecipeIngredients
    let output = IRReplace.originalRecipeResult
    IRRebirth.shaped(ingredients[0], ['S', 'S'], { S: output })
  })
  IRRebirth.replaceInput({ output: 'minecraft:flint_and_steel' },'minecraft:iron_ingot','#forge:ingots/steel')
  IRRebirth.replaceInput({ output: 'storagenetwork:kabel' },'minecraft:iron_ingot','#forge:plates/brass')
  IRRebirth.replaceInput({ output: 'storagenetwork:master' },'minecraft:quartz','create:polished_rose_quartz')
  IRRebirth.replaceInput({ output: 'storagenetwork:inventory' },'minecraft:iron_nugget','create:brass_nugget')
  IRRebirth.replaceInput({ output: 'storagenetwork:request' },'minecraft:gold_ingot','#forge:plates/brass')
  IRRebirth.replaceInput({ output: 'functionalstorage:copper_upgrade' },'minecraft:copper_ingot','#forge:plates/copper')
  IRRebirth.replaceInput({ output: 'functionalstorage:copper_upgrade' },'#forge:chests/wooden','sophisticatedstorage:copper_chest')
  IRRebirth.replaceInput({ output: 'functionalstorage:gold_upgrade' },'minecraft:gold_ingot','#forge:plates/gold')
  IRRebirth.replaceInput({ output: 'functionalstorage:gold_upgrade' },'#forge:chests/wooden','sophisticatedstorage:gold_chest')
  IRRebirth.replaceInput({ output: 'functionalstorage:diamond_upgrade' },'minecraft:diamond','#forge:plates/diamond')
  IRRebirth.replaceInput({ output: 'functionalstorage:diamond_upgrade' },'#forge:chests/wooden','sophisticatedstorage:diamond_chest')
  IRRebirth.replaceInput({ output: 'functionalstorage:netherite_upgrade' },'minecraft:netherite_ingot','#forge:storage_blocks/netherite')
  IRRebirth.replaceInput({ input: 'createdeco:zinc_sheet' },'createdeco:zinc_sheet','#forge:plates/zinc')
  IRRebirth.replaceInput({ input: 'createaddition:zinc_sheet' },'createaddition:zinc_sheet','#forge:plates/zinc')
  IRRebirth.replaceInput({ output: 'storagenetwork:import_filter_kabel'}, 'minecraft:barrel', 'create:smart_chute')
  IRRebirth.replaceOutput({output: 'agricraft:coal_pebble'}, 'agricraft:coal_pebble', 'pickletweaks:coal_piece')
})