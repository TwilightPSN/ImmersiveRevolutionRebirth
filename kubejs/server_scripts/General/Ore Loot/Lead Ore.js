LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("mekanism:deepslate_lead_ore")
        .addLoot("mekanism:raw_lead")
    IRRebirth
        .addBlockLootModifier("bno:nether_lead_ore")
        .addLoot(LootEntry.of("mekanism:raw_lead", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_lead_ore")
        .addLoot(LootEntry.of("mekanism:raw_lead", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("mekanism:raw_lead") 
});