ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type":"mekanism:metallurgic_infusing",
        "chemicalInput":{"amount":20,"tag":"mekanism:carbon"},
        "itemInput":{"ingredient":{"item":"kubejs:blaze_clay"}},
        "output":{"amount": 8, "item":"powah:dielectric_paste"}
    })
    IRRebirth.custom({
        "type":"mekanism:metallurgic_infusing",
        "chemicalInput":{"amount":20,"tag":"mekanism:gold"},
        "itemInput":{"amount": 2, "ingredient":{"tag":"forge:ingots/netherite_scrap"}},
        "output":{"amount": 1, "item":"mekanism:dust_netherite"}
    }).id('mekanism:processing/netherite/scrap_to_dust')
    IRRebirth.recipes.mekanism.metallurgic_infusing('mekanism:dust_refined_obsidian', '#forge:dusts/obsidian', '100x kubejs:echo').id('mekanism:processing/refined_obsidian/dust/from_obsidian_dust')
    IRRebirth.recipes.mekanism.metallurgic_infusing('create_deep_dark:echo_ingot', '#forge:ingots/netherite', '80x kubejs:echo')
})