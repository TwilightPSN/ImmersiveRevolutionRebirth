LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_iron_ore")
        .addLoot("minecraft:raw_iron")
    IRRebirth
        .addBlockLootModifier("bno:nether_iron_ore")
        .addLoot(LootEntry.of("minecraft:raw_iron", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_iron_ore")
        .addLoot(LootEntry.of("minecraft:raw_iron", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("minecraft:raw_iron") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/iron")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:raw_iron") 
});