LootJS.modifiers((IRRebirth) => {
    //Uranium
    IRRebirth
        .addBlockLootModifier("mekanism:deepslate_uranium_ore")
        .addLoot("mekanism:raw_uranium")
    IRRebirth
        .addBlockLootModifier("bno:nether_uranium_ore")
        .addLoot(LootEntry.of("mekanism:raw_uranium", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_uranium_ore")
        .addLoot(LootEntry.of("mekanism:raw_uranium", 3));
    //Tin
    IRRebirth
        .addBlockLootModifier("mekanism:deepslate_tin_ore")
        .addLoot("mekanism:raw_tin")
    IRRebirth
        .addBlockLootModifier("bno:nether_tin_ore")
        .addLoot(LootEntry.of("mekanism:raw_tin", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_tin_ore")
        .addLoot(LootEntry.of("mekanism:raw_tin", 3));
    //Lead
    IRRebirth
        .addBlockLootModifier("mekanism:deepslate_lead_ore")
        .addLoot("mekanism:raw_lead")
    IRRebirth
        .addBlockLootModifier("bno:nether_lead_ore")
        .addLoot(LootEntry.of("mekanism:raw_lead", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_lead_ore")
        .addLoot(LootEntry.of("mekanism:raw_lead", 3));
    //Nickel
    IRRebirth
        .addBlockLootModifier("immersiveengineering:deepslate_ore_nickel")
        .addLoot("immersiveengineering:raw_nickel")
    IRRebirth
        .addBlockLootModifier("bno:nether_nickel_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_nickel", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_nickel_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_nickel", 3));
    //Aluminum
    IRRebirth
        .addBlockLootModifier("immersiveengineering:deepslate_ore_aluminum")
        .addLoot("immersiveengineering:raw_aluminum")
    IRRebirth
        .addBlockLootModifier("bno:nether_aluminum_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_aluminum", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_aluminum_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_aluminum", 3));
    //Silver
    IRRebirth
        .addBlockLootModifier("immersiveengineering:deepslate_ore_silver")
        .addLoot("immersiveengineering:raw_silver")
    IRRebirth
        .addBlockLootModifier("bno:nether_silver_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_silver", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_silver_ore")
        .addLoot(LootEntry.of("immersiveengineering:raw_silver", 3));
    //Gold
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_gold_ore")
        .addLoot("minecraft:raw_gold")
    IRRebirth
        .addBlockLootModifier("minecraft:nether_gold_ore")
        .replaceLoot("minecraft:gold_nugget", "minecraft:raw_gold");
    IRRebirth
        .addBlockLootModifier("minecraft:nether_gold_ore")
        .addLoot(LootEntry.of("minecraft:raw_gold", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_gold_ore")
        .addLoot(LootEntry.of("minecraft:raw_gold", 3));
    //Copper
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_copper_ore")
        .addLoot("minecraft:raw_copper")
    IRRebirth
        .addBlockLootModifier("bno:nether_copper_ore")
        .addLoot(LootEntry.of("minecraft:raw_copper", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_copper_ore")
        .addLoot(LootEntry.of("minecraft:raw_copper", 3));
    //Iron
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_iron_ore")
        .addLoot("minecraft:raw_iron")
    IRRebirth
        .addBlockLootModifier("bno:nether_iron_ore")
        .addLoot(LootEntry.of("minecraft:raw_iron", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_iron_ore")
        .addLoot(LootEntry.of("minecraft:raw_iron", 3));
    //Zinc
    IRRebirth
        .addBlockLootModifier("create:deepslate_zinc_ore")
        .addLoot("create:raw_zinc")
    IRRebirth
        .addBlockLootModifier("bno:nether_zinc_ore")
        .addLoot(LootEntry.of("create:raw_zinc", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_zinc_ore")
        .addLoot(LootEntry.of("create:raw_zinc", 3));
    //Emerald
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_emerald_ore")
        .addLoot("minecraft:emerald")
    IRRebirth
        .addBlockLootModifier("bno:nether_emerald_ore")
        .addLoot(LootEntry.of("minecraft:emerald", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_emerald_ore")
        .addLoot(LootEntry.of("minecraft:emerald", 3));
    //Diamond
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_diamond_ore")
        .addLoot("minecraft:diamond")
    IRRebirth
        .addBlockLootModifier("bno:nether_diamond_ore")
        .addLoot(LootEntry.of("minecraft:diamond", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_diamond_ore")
        .addLoot(LootEntry.of("minecraft:diamond", 3));
    //Coal
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_coal_ore")
        .addLoot("minecraft:coal")
    IRRebirth
        .addBlockLootModifier("bno:nether_coal_ore")
        .addLoot(LootEntry.of("minecraft:coal", 2));
    IRRebirth
        .addBlockLootModifier("beo:end_coal_ore")
        .addLoot(LootEntry.of("minecraft:coal", 3));
    //Lapis
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_lapis_ore")
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 10))
    IRRebirth
        .addBlockLootModifier("bno:nether_lapis_ore")
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 15));
    IRRebirth
        .addBlockLootModifier("beo:end_lapis_ore")
        .addLoot(LootEntry.of("minecraft:lapis_lazuli", 20));
    //Redstone
    IRRebirth
        .addBlockLootModifier("minecraft:deepslate_redstone_ore")
        .addLoot(LootEntry.of("minecraft:redstone", 5))
    IRRebirth
        .addBlockLootModifier("bno:nether_redstone_ore")
        .addLoot(LootEntry.of("minecraft:redstone", 10));
    IRRebirth
        .addBlockLootModifier("beo:end_redstone_ore")
        .addLoot(LootEntry.of("minecraft:redstone", 15));
    //Draconium
    IRRebirth
        .addBlockLootModifier("#forge:ores/draconium")
        .replaceLoot("draconicevolution:draconium_dust", "kubejs:raw_draconium");
    IRRebirth
        .addBlockLootModifier('draconicevolution:deepslate_draconium_ore')
        .addLoot("kubejs:raw_draconium")
    IRRebirth
        .addBlockLootModifier('draconicevolution:nether_draconium_ore')
        .addLoot(LootEntry.of("kubejs:raw_draconium", 2))
    IRRebirth
        .addBlockLootModifier('draconicevolution:end_draconium_ore')
        .addLoot(LootEntry.of("kubejs:raw_draconium", 3))
});