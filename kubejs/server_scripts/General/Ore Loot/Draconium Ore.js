LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .replaceLoot("draconicevolution:draconium_dust", "kubejs:raw_draconium");
    IRRebirth
        .addBlockLootModifier("draconicevolution:deepslate_draconium_ore")
        .addLoot("kubejs:raw_draconium")
    IRRebirth
        .addBlockLootModifier("draconicevolution:nether_draconium_ore")
        .addLoot(LootEntry.of("kubejs:raw_draconium", 2));
    IRRebirth
        .addBlockLootModifier("draconicevolution:end_draconium_ore")
        .addLoot(LootEntry.of("kubejs:raw_draconium", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("kubejs:raw_draconium") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("kubejs:raw_draconium") 
});