LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("mekanism:deepslate_tin_ore")
        .addLoot("mekanism:raw_tin")
    IRRebirth
        .addBlockLootModifier("bno:nether_tin_ore")
        .addLoot(LootEntry.of("mekanism:raw_tin", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_tin_ore")
        .addLoot(LootEntry.of("mekanism:raw_tin", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("mekanism:raw_tin") 
});