LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("create:zinc_ore")
        .replaceLoot("create:raw_zinc", "create:raw_zinc");
    IRRebirth
        .addBlockLootModifier("create:deepslate_zinc_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot("create:raw_zinc")
    IRRebirth
        .addBlockLootModifier("bno:nether_zinc_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("create:raw_zinc", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_zinc_ore")
        .randomChanceWithEnchantment("minecraft:silk_touch", [1, 0])
        .addLoot(LootEntry.of("create:raw_zinc", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("create:raw_zinc") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/zinc")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("create:raw_zinc") 
});