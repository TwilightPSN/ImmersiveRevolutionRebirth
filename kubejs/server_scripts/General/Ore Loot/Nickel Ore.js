LootJS.modifiers((IRRebirth) => {
    IRRebirth
        .addBlockLootModifier("immersiveengineering:nickel_ore")
        .replaceLoot("immersiveengineering:raw_nickel", "immersiveengineering:raw_nickel");
    IRRebirth
        .addBlockLootModifier("immersiveengineering:deepslate_nickel_ore")
        .addLoot("immersiveengineering:raw_nickel")
    IRRebirth
        .addBlockLootModifier("bno:nether_nickel_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_nickel", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_nickel_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_nickel", 3))
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0.2, 1, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0.167, 1, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0.143, 1, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0.125, 1, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0.111, 1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0.1, 1, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.091, 1, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.083, 1, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.077, 1])
        .addLoot("immersiveengineering:raw_nickel") 
    IRRebirth
        .addBlockLootModifier("#forge:ores/nickel")
        .randomChanceWithEnchantment("minecraft:fortune", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071])
        .addLoot("immersiveengineering:raw_nickel") 
});