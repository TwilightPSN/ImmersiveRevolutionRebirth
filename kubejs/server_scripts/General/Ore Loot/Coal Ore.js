LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("minecraft:coal_ore")
        .replaceLoot("minecraft:coal", "minecraft:coal");
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_coal_ore")
        .addLoot("minecraft:coal")
    IRRebirth
        .addBlockLootModifier("bno:nether_coal_ore")
        .addLoot(LootEntry.of("minecraft:coal", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_coal_ore")
        .addLoot(LootEntry.of("minecraft:coal", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("minecraft:coal") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/coal")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("minecraft:coal") 
});