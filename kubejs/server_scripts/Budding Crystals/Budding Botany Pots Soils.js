ServerEvents.recipes((IRRebirth) => {

    //function to simplify soil creation
  let BotanySoil = (soil) =>
    IRRebirth.recipes.botanypots.soil(soil, { block: soil }, [soil], -1, 1);

  //all buddingcrystals buddings
  // also found fluorite as duplicated
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
    "budding_hopgraphite",
    "budding_salt",
    "budding_nether_quartz",
    "budding_nickel",
    "budding_electrum",
    "budding_zinc",
    "budding_awakeneddraconium",
    "budding_refinedglowstone",
    "budding_copper",
    "budding_fluorite",
    "budding_lapis_lazuli",
    "budding_gold",
    "budding_netherite",
    "budding_fluix",
    "budding_glowstone",
    "budding_aluminum",
    "budding_refinedobsidian",
    "budding_certus_quartz",
    "budding_steel",
    "budding_tin",
    "budding_energizedsteel",
    "budding_blazingcrystal",
    "budding_nioticcrystal",
    "budding_spiritedcrystal",
    "budding_nitrocrystal",
    "budding_coal",
    "minecraft:budding_amethyst",
    "budding_skeleton",
    "budding_creeper",
    "budding_zombie",
    "budding_blaze",
    "budding_witherskeleton",
    "budding_ghast",
    "budding_enderman",
    "budding_sculk",
    "budding_cow",
    "budding_sheep",
    "budding_spider",
    "budding_bee",
    "budding_snowgolem",
    "budding_skysteel",
    "budding_quantumalloy",
    "budding_acidicredstone",
    "budding_squid",
    "budding_glowsquid",
    "budding_flint",
    "budding_slime",
    "budding_wither",
    "budding_magmacube",
    "budding_phantom",
    "budding_chicken",
    "budding_chaosdragon",
    "budding_coalcoke",
  ];

  
  listSoil.forEach((soil) => {
    BotanySoil("buddingcrystals:" + soil);
  });


  BotanySoil("minecraft:budding_amethyst");
});
