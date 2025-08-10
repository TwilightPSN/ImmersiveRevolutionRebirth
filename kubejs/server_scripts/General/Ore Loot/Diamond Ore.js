LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:diamond_ore")
        .replaceLoot("minecraft:diamond", "minecraft:diamond");
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_diamond_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot("minecraft:diamond")
    IRRebirth
        .addBlockLootModifier("bno:nether_diamond_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:diamond", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_diamond_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:diamond", 3))
    IRRebirth
        .addBlockLootModifier("deeperdarker:sculk_stone_diamond_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:diamond", 4))
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("minecraft:diamond") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/diamond")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:diamond") 
});