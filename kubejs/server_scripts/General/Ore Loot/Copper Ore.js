LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:copper_ore")
        .replaceLoot("minecraft:raw_copper", "minecraft:raw_copper");
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_copper_ore")
        .addLoot("minecraft:raw_copper")
    IRRebirth
        .addBlockLootModifier("bno:nether_copper_ore")
        .addLoot(LootEntry.of("minecraft:raw_copper", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_copper_ore")
        .addLoot(LootEntry.of("minecraft:raw_copper", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("minecraft:raw_copper") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/copper")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:raw_copper") 
});