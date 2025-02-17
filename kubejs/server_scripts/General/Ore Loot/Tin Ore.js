LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("mekanism:tin_ore")
        .replaceLoot("mekanism:raw_tin", "mekanism:raw_tin");
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
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("mekanism:raw_tin") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/tin")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("mekanism:raw_tin") 
});