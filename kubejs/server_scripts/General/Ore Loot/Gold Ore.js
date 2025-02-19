LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:gold_ore")
        .replaceLoot("minecraft:raw_gold", "minecraft:raw_gold");
    IRRebirth
        .addBlockLootModifier("minecraft:nether_gold_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .replaceLoot("minecraft:gold_nugget", "minecraft:raw_gold");
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_gold_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot("minecraft:raw_gold")
    IRRebirth
        .addBlockLootModifier("minecraft:nether_gold_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:raw_gold", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_gold_ore")
        .addLoot(LootEntry.of("minecraft:raw_gold", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("minecraft:raw_gold") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/gold")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:raw_gold") 
});