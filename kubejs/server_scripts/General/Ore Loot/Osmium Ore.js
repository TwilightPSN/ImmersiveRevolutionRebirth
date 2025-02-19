LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("mekanism:osmium_ore")
        .replaceLoot("mekanism:raw_osmium", "mekanism:raw_osmium");
    IRRebirth
        .addBlockLootModifier("mekanism:deepslate_osmium_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot("mekanism:raw_osmium")
    IRRebirth
        .addBlockLootModifier("bno:nether_osmium_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("mekanism:raw_osmium", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_osmium_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("mekanism:raw_osmium", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("mekanism:raw_osmium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/osmium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("mekanism:raw_osmium") 
});