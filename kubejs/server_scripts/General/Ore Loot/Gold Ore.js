LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:nether_gold_ore")
        .replaceLoot("minecraft:gold_nugget", "minecraft:raw_gold");
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_gold_ore")
        .addLoot("minecraft:raw_gold")
    IRRebirth
        .addBlockLootModifier("minecraft:nether_gold_ore")
        .addLoot(LootEntry.of("minecraft:raw_gold", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_gold_ore")
        .addLoot(LootEntry.of("minecraft:raw_gold", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:raw_gold") 
});