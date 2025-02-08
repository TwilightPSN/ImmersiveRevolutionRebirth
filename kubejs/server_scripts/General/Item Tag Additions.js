ServerEvents.tags("item", (IRRebirth) => {
    IRRebirth.add("sophisticatedstorage:chestupgrades", [
      "sophisticatedstorage:iron_to_gold_tier_upgrade",
      "sophisticatedstorage:iron_to_diamond_tier_upgrade",
      "sophisticatedstorage:iron_to_netherite_tier_upgrade",
      "sophisticatedstorage:gold_to_diamond_tier_upgrade",
      "sophisticatedstorage:gold_to_netherite_tier_upgrade",
      "sophisticatedstorage:diamond_to_netherite_tier_upgrade",
      "sophisticatedstorage:copper_to_netherite_tier_upgrade",
      "sophisticatedstorage:copper_to_diamond_tier_upgrade",
      "sophisticatedstorage:copper_to_gold_tier_upgrade",
      "sophisticatedstorage:copper_to_iron_tier_upgrade",
      "sophisticatedstorage:basic_to_netherite_tier_upgrade",
      "sophisticatedstorage:basic_to_diamond_tier_upgrade",
      "sophisticatedstorage:basic_to_gold_tier_upgrade",
      "sophisticatedstorage:basic_to_iron_tier_upgrade",
      "sophisticatedstorage:basic_to_copper_tier_upgrade",
    ]);  
    craftingTables.forEach((table) =>
      IRRebirth.add("forge:workbenches", [
        "biomeswevegone:green_enchanted_crafting_table",
        "biomeswevegone:holly_crafting_table",
        "biomeswevegone:ironwood_crafting_table",
        "biomeswevegone:jacaranda_crafting_table",
        "biomeswevegone:mahogany_crafting_table",
        "biomeswevegone:maple_crafting_table",
        "biomeswevegone:palm_crafting_table",
        "biomeswevegone:pine_crafting_table",
        "biomeswevegone:rainbow_eucalyptus_crafting_table",
        "biomeswevegone:redwood_crafting_table",
        "biomeswevegone:sakura_crafting_table",
        "biomeswevegone:skyris_crafting_table",
        "biomeswevegone:white_mangrove_crafting_table",
        "biomeswevegone:willow_crafting_table",
        "biomeswevegone:witch_hazel_crafting_table",
        "biomeswevegone:zelkova_crafting_table",
        "biomeswevegone:florus_crafting_table",
        "biomeswevegone:fir_crafting_table",
        "biomeswevegone:ebony_crafting_table",
        "biomeswevegone:blue_enchanted_crafting_table",
        "biomeswevegone:baobab_crafting_table",
        "biomeswevegone:aspen_crafting_table",
        "biomeswevegone:cypress_crafting_table",
        "biomeswevegone:cika_crafting_table",
        "biomeswevegone:minecraft:crafting_table",
      ])
    );
    IRRebirth.add("forge:plates", "createdeco:andesite_sheet");
    IRRebirth.add("forge:plates/andesite_alloy", "createdeco:andesite_sheet");  
});