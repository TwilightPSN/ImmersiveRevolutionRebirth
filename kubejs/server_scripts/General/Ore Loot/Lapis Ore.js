LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:lapis_ore")
        .replaceLoot("minecraft:lapis_lazuli", LootEntry.of("minecraft:lapis_lazuli", 5));
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_lapis_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 10))
    IRRebirth
        .addBlockLootModifier("bno:nether_lapis_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 15));
    IRRebirth
        .addBlockLootModifier("beo:end_lapis_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 20))
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lapis")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 3)) 
});