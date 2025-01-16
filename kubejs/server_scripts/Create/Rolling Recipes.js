ServerEvents.recipes(IRRebirth => {

    function rolling (output, input, count) {
      IRRebirth.custom({
        "type":"createaddition:rolling",
        "input": Ingredient.of(input).toJson(),
        "result": Item.of(count+'x '+output).toJson()
      })
    }
    
    rolling('create:sand_paper', '#forge:sand/colorless', 1)
    rolling('create:red_sand_paper', '#forge:sand/red', 1)
    IRRebirth.remove({ type: 'createaddition:rolling'})
    rolling('immersiveengineering:stick_iron', '#forge:ingots/iron', 1)
    rolling('immersiveengineering:stick_steel', '#forge:ingots/steel', 1)
    rolling('immersiveengineering:stick_aluminum', '#forge:ingots/aluminum', 1)
    rolling('createaddition:copper_rod', '#forge:ingots/copper', 1)
    rolling('createaddition:gold_rod', '#forge:ingots/gold', 1)
    rolling('createaddition:electrum_rod', '#forge:ingots/electrum', 1)
    rolling('createaddition:brass_rod', '#forge:ingots/brass', 1)
    rolling('immersiveengineering:wire_copper', '#forge:plates/copper', 1)
    rolling('immersiveengineering:wire_electrum', '#forge:plates/electrum', 1)
    rolling('immersiveengineering:wire_aluminum', '#forge:plates/aluminum', 1)
    rolling('immersiveengineering:wire_lead', '#forge:plates/lead', 1)
    rolling('immersiveengineering:wire_steel', '#forge:plates/steel', 1)
    rolling('immersiveengineering:hemp_fabric', 'immersiveengineering:wirecoil_structure_rope', 1)
    rolling('createaddition:straw', 'minecraft:bamboo', 1)
})