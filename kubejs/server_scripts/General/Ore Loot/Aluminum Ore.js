LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("immersiveengineering:deepslate_aluminum_ore")
        .replaceLoot("immersiveengineering:raw_aluminum", "immersiveengineering:raw_aluminum");
    IRRebirth
        .addBlockLootModifier("immersiveengineering:deepslate_aluminum_ore")
        .addLoot("immersiveengineering:raw_aluminum")
    IRRebirth
        .addBlockLootModifier("bno:nether_aluminum_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_aluminum", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_aluminum_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_aluminum", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("immersiveengineering:raw_aluminum") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/aluminum")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("immersiveengineering:raw_aluminum") 
});