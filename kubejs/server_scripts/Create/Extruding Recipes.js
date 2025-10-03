ServerEvents.recipes(IRRebirth => {
    IRRebirth.recipes.createMechanicalExtruderExtruding("minecraft:obsidian", [
        "minecraft:water",
        "minecraft:lava"
    ]).catalyst('minecraft:magma_block').requiredBonks(3)
    IRRebirth.recipes.createMechanicalExtruderExtruding("ae2:sky_stone_block", [
        "minecraft:water",
        "minecraft:lava"
    ]).catalyst('ae2:sky_stone_block').requiredBonks(5)
    IRRebirth.recipes.createMechanicalExtruderExtruding("minecraft:sculk", [
        "create_deep_dark:molten_echo",
        "mekanism:heavy_water"
    ]).catalyst('minecraft:sculk_catalyst').requiredBonks(10)
    IRRebirth.recipes.createMechanicalExtruderExtruding("minecraft:end_stone", [
        "minecraft:water",
        "minecraft:lava"
    ]).catalyst('draconicevolution:infused_obsidian').requiredBonks(10)
})