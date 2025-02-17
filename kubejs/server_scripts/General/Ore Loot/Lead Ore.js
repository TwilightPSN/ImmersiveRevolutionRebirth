LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("mekanism:lead_ore")
        .replaceLoot("mekanism:raw_lead", "mekanism:raw_lead");
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
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("mekanism:raw_lead") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/lead")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("mekanism:raw_lead") 
});