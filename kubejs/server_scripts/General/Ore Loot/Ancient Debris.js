LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .replaceLoot("minecraft:ancient_debris", LootEntry.of("kubejs:raw_netherite", 4));
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("kubejs:raw_netherite") 
    IRRebirth
        .addBlockLootModifier("minecraft:ancient_debris")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("kubejs:raw_netherite") 
});