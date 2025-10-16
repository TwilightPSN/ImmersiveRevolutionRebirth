ServerEvents.recipes((IRRebirth) => {
  let BotanySoil = (soil) =>
    IRRebirth.recipes.botanypots.soil(soil, { block: soil }, [soil], -1, 1);
  let listSoil = [
    "budding_prismarine",
    "budding_emerald",
    "budding_redstone",
    "budding_uranium",
    "budding_silver",
    "budding_iron",
    "budding_uraninite",
    "budding_diamond",
    "budding_draconium",
    "budding_bronze",
    "budding_lead",
    "budding_constantan",
    "budding_brass",
    "budding_osmium",
    "budding_hop_graphite",
    "budding_nether_quartz",
    "budding_nickel",
    "budding_electrum",
    "budding_zinc",
    "budding_awakened_draconium",
    "budding_refined_glowstone",
    "budding_copper",
    "budding_fluorite",
    "budding_lapis_lazuli",
    "budding_gold",
    "budding_netherite",
    "budding_fluix",
    "budding_glowstone",
    "budding_aluminum",
    "budding_refined_obsidian",
    "budding_certus_quartz",
    "budding_steel",
    "budding_tin",
    "budding_energized_steel",
    "budding_blazing_crystal",
    "budding_niotic_crystal",
    "budding_spirited_crystal",
    "budding_nitro_crystal",
    "budding_coal",
    "budding_skeleton",
    "budding_creeper",
    "budding_zombie",
    "budding_blaze",
    "budding_wither_skeleton",
    "budding_ghast",
    "budding_enderman",
    "budding_sculk",
    "budding_cow",
    "budding_sheep",
    "budding_spider",
    "budding_bee",
    "budding_snow_golem",
    "budding_sky_steel",
    "budding_quantum_alloy",
    "budding_squid",
    "budding_glow_squid",
    "budding_slime",
    "budding_wither",
    "budding_magma_cube",
    "budding_phantom",
    "budding_chicken",
    "budding_chaos_dragon",
    "budding_ender_dragon",
    "budding_pig",
    "budding_rabbit"
  ];

  
  listSoil.forEach((soil) => {
    BotanySoil("buddingcrystals:" + soil);
  });


  BotanySoil("minecraft:budding_amethyst");
  BotanySoil('tconstruct:budding_ender_slime_crystal');
  BotanySoil('tconstruct:budding_ichor_slime_crystal');
  BotanySoil('tconstruct:budding_sky_slime_crystal');
  BotanySoil('tconstruct:budding_earth_slime_crystal');
});
