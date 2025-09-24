ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type":"mekanism:metallurgic_infusing",
        "chemicalInput":{"amount":20,"tag":"mekanism:carbon"},
        "itemInput":{"ingredient":{"item":"kubejs:blaze_clay"}},
        "output":{"amount": 8, "item":"powah:dielectric_paste"}
    })
    IRRebirth.custom({
        "type":"mekanism:metallurgic_infusing",
        "chemicalInput":{"amount":10,"tag":"mekanism:gold"},
        "itemInput":{"amount": 1, "ingredient":{"tag":"forge:ingots/netherite_scrap"}},
        "output":{"amount": 1, "item":"mekanism:dust_netherite"}
    }).id('mekanism:processing/netherite/scrap_to_dust')
    IRRebirth.recipes.mekanism.metallurgic_infusing('mekanism:dust_refined_obsidian', '#forge:dusts/obsidian', '100x kubejs:echo').id('mekanism:processing/refined_obsidian/dust/from_obsidian_dust')
    IRRebirth.recipes.mekanism.metallurgic_infusing('create_deep_dark:echo_ingot', '#forge:ingots/netherite', '80x kubejs:echo')
    IRRebirth.recipes.mekanism.metallurgic_infusing(Item.of('ae2:fluix_glass_cable', 2), 'ae2:quartz_fiber', '20x kubejs:fluix')
    IRRebirth.recipes.mekanism.metallurgic_infusing('mekanism:basic_control_circuit', 'immersiveengineering:component_electronic_adv', '20x mekanism:redstone').id('mekanism:control_circuit/basic')
    IRRebirth.recipes.mekanism.metallurgic_infusing('mekanism:alloy_infused', 'immersiveengineering:rs_engineering', '20x mekanism:redstone').id('mekanism:metallurgic_infusing/alloy/infused')
})