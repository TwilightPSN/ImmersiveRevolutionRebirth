ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type":"immersiveengineering:crusher",
        "energy":3200,
        "input":{"item":"minecraft:obsidian"},
        "result":{"count":2,"item":"mekanism:dust_obsidian"},
        "secondaries":[{"chance":0.25, "output":{"item":"mekanism:dust_obsidian"}}]})
    IRRebirth.custom({
        "type":"immersiveengineering:crusher",
        "energy":54000,
        "input":{"tag":"forge:storage_blocks/raw_netherite"},
        "result":{"base_ingredient":{"item":"jaopca:create_crushed.netherite_scrap"},"count":12},"secondaries":[]})
    IRRebirth.custom({
        "type":"immersiveengineering:crusher",
        "energy":6000,
        "input":{"tag":"forge:raw_materials/netherite"},
        "result":{"item":"jaopca:create_crushed.netherite_scrap"},
        "secondaries":[{"chance":0.33333334,"output":{"item":"jaopca:create_crushed.netherite_scrap"}}]})
})