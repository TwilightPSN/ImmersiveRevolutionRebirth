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
})