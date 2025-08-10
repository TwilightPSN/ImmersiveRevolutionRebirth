LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:iron_ore")
        .replaceLoot("minecraft:raw_iron", "minecraft:raw_iron");
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_iron_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot("minecraft:raw_iron")
    IRRebirth
        .addBlockLootModifier("bno:nether_iron_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:raw_iron", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_iron_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:raw_iron", 3))
    IRRebirth
        .addBlockLootModifier("deeperdarker:sculk_stone_iron_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("minecraft:raw_iron", 4))
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:raw_iron") 
});