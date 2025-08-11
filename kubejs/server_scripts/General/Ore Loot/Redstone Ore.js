LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:redstone_ore")
        .replaceLoot("minecraft:redstone", LootEntry.of("minecraft:redstone", 5));
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_redstone_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:redstone", 5))
    IRRebirth
        .addBlockLootModifier("bno:nether_redstone_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:redstone", 10));
    IRRebirth
        .addBlockLootModifier("beo:end_redstone_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:redstone", 15))
    IRRebirth
        .addBlockLootModifier("deeperdarker:sculk_stone_redstone_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:redstone", 20))
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
});