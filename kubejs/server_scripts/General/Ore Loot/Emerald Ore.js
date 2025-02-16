LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_emerald_ore")
        .addLoot("minecraft:emerald")
    IRRebirth
        .addBlockLootModifier("bno:nether_emerald_ore")
        .addLoot(LootEntry.of("minecraft:emerald", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_emerald_ore")
        .addLoot(LootEntry.of("minecraft:emerald", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("minecraft:emerald") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/emerald")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:emerald") 
});