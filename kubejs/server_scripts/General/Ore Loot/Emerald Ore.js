LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:emerald_ore")
        .replaceLoot("minecraft:emerald", "minecraft:emerald");
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_emerald_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot("minecraft:emerald")
    IRRebirth
        .addBlockLootModifier("bno:nether_emerald_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:emerald", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_emerald_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:emerald", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:emerald") 
});