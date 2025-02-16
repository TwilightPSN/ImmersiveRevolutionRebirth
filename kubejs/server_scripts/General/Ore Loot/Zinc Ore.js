LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("create:deepslate_zinc_ore")
        .addLoot("create:raw_zinc")
    IRRebirth
        .addBlockLootModifier("bno:nether_zinc_ore")
        .addLoot(LootEntry.of("create:raw_zinc", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_zinc_ore")
        .addLoot(LootEntry.of("create:raw_zinc", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.20, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.10, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 0.071])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("create:raw_zinc") 
});