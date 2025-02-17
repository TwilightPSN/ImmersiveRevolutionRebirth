LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("mekanism:uranium_ore")
        .replaceLoot("mekanism:raw_uranium", "mekanism:raw_uranium");
    IRRebirth
        .addBlockLootModifier("mekanism:deepslate_uranium_ore")
        .addLoot("mekanism:raw_uranium")
    IRRebirth
        .addBlockLootModifier("bno:nether_uranium_ore")
        .addLoot(LootEntry.of("mekanism:raw_uranium", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_uranium_ore")
        .addLoot(LootEntry.of("mekanism:raw_uranium", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("mekanism:raw_uranium") 
});