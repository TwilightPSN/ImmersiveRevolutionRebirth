LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("immersiveengineering:silver_ore")
        .replaceLoot("immersiveengineering:raw_silver", "immersiveengineering:raw_silver");
    IRRebirth
        .addBlockLootModifier("immersiveengineering:deepslate_silver_ore")
        .addLoot("immersiveengineering:raw_silver")
    IRRebirth
        .addBlockLootModifier("bno:nether_silver_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_silver", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_silver_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_silver", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("immersiveengineering:raw_silver") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/silver")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("immersiveengineering:raw_silver") 
});