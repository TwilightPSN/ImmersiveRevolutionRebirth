ServerEvents.recipes(IRRebirth => {
    IRRebirth.recipes.createMechanicalExtruderExtruding("minecraft:obsidian", [
        "minecraft:water",
        "minecraft:lava"
    ]).catalyst('minecraft:magma_block')
    IRRebirth.recipes.createMechanicalExtruderExtruding("ae2:sky_stone_block", [
        "minecraft:water",
        "minecraft:lava"
    ]).catalyst('ae2:sky_stone_block')
})