ServerEvents.recipes(IRRebirth => {
    IRRebirth.recipes.immersiveengineeringArcFurnace([Item.of('ae2:quartz_glass', 2)], '4x #c:glass_blocks', [Item.of('ae2:certus_quartz_dust', 5)])
    IRRebirth.recipes.immersiveengineeringArcFurnace([Item.of('minecraft:netherite_ingot', 1)], '4x #forge:ingots/netherite_scrap', ['4x #forge:ingots/gold'], '3x jaopca:nuggets.netherite_scrap')
    IRRebirth.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":230400,
        "input":{"tag":"forge:storage_blocks/raw_netherite"},
        "results":[{"base_ingredient":{"tag":"forge:ingots/netherite_scrap"},"count":13}],
        "secondaries":[{"chance":0.5,"output":{"tag":"forge:ingots/netherite_scrap"}}],
        "time":900})
    IRRebirth.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":25600,
        "input":{"tag":"forge:raw_materials/netherite"},
        "results":[{"tag":"forge:ingots/netherite_scrap"}],
        "secondaries":[{"chance":0.5,"output":{"tag":"forge:ingots/netherite_scrap"}}],
        "time":100})
})