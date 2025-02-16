LootJS.modifiers((IRRebirth) => {
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
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("mekanism:raw_uranium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/uranium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("mekanism:raw_uranium") 
});