LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_redstone_ore")
        .addLoot(LootEntry.of("minecraft:redstone", 5))
    IRRebirth
        .addBlockLootModifier("bno:nether_redstone_ore")
        .addLoot(LootEntry.of("minecraft:redstone", 10));
    IRRebirth
        .addBlockLootModifier("beo:end_redstone_ore")
        .addLoot(LootEntry.of("minecraft:redstone", 15))
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
    IRRebirth
        .addBlockLootModifier("#forge:ores/redstone")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot(LootEntry.of("minecraft:redstone", 3)) 
});