ItemEvents.tooltip((IRRebirth) => {
    let idlist = [
      "buddingcrystals:small_prismarine_bud",
      "buddingcrystals:medium_prismarine_bud",
      "buddingcrystals:large_prismarine_bud",
      "buddingcrystals:small_steel_bud",
      "buddingcrystals:large_steel_bud",
      "buddingcrystals:medium_steel_bud",
      "buddingcrystals:small_certus_quartz_bud",
      "buddingcrystals:medium_certus_quartz_bud",
      "buddingcrystals:large_certus_quartz_bud",
      "buddingcrystals:small_refinedobsidian_bud",
      "buddingcrystals:medium_refinedobsidian_bud",
      "buddingcrystals:large_refinedobsidian_bud",
      "buddingcrystals:small_aluminum_bud",
      "buddingcrystals:medium_aluminum_bud",
      "buddingcrystals:large_aluminum_bud",
      "buddingcrystals:small_glowstone_bud",
      "buddingcrystals:medium_glowstone_bud",
      "buddingcrystals:large_glowstone_bud",
      "buddingcrystals:small_fluix_bud",
      "buddingcrystals:medium_fluix_bud",
      "buddingcrystals:large_fluix_bud",
      "buddingcrystals:small_netherite_bud",
      "buddingcrystals:medium_netherite_bud",
      "buddingcrystals:large_netherite_bud",
      "buddingcrystals:small_gold_bud",
      "buddingcrystals:medium_gold_bud",
      "buddingcrystals:large_gold_bud",
      "buddingcrystals:small_lapis_lazuli_bud",
      "buddingcrystals:medium_lapis_lazuli_bud",
      "buddingcrystals:large_lapis_lazuli_bud",
      "buddingcrystals:small_tin_bud",
      "buddingcrystals:medium_tin_bud",
      "buddingcrystals:large_tin_bud",
      "buddingcrystals:small_fluorite_bud",
      "buddingcrystals:medium_fluorite_bud",
      "buddingcrystals:large_fluorite_bud",
      "buddingcrystals:small_copper_bud",
      "buddingcrystals:medium_copper_bud",
      "buddingcrystals:large_copper_bud",
      "buddingcrystals:small_refinedglowstone_bud",
      "buddingcrystals:medium_refinedglowstone_bud",
      "buddingcrystals:large_refinedglowstone_bud",
      "buddingcrystals:small_awakeneddraconium_bud",
      "buddingcrystals:medium_awakeneddraconium_bud",
      "buddingcrystals:large_awakeneddraconium_bud",
      "buddingcrystals:small_zinc_bud",
      "buddingcrystals:medium_zinc_bud",
      "buddingcrystals:large_zinc_bud",
      "buddingcrystals:small_electrum_bud",
      "buddingcrystals:prismarine_cluster",
      "buddingcrystals:steel_cluster",
      "buddingcrystals:certus_quartz_cluster",
      "buddingcrystals:refinedobsidian_cluster",
      "buddingcrystals:aluminum_cluster",
      "buddingcrystals:glowstone_cluster",
      "buddingcrystals:fluix_cluster",
      "buddingcrystals:netherite_cluster",
      "buddingcrystals:gold_cluster",
      "buddingcrystals:lapis_lazuli_cluster",
      "buddingcrystals:tin_cluster",
      "buddingcrystals:fluorite_cluster",
      "buddingcrystals:copper_cluster",
      "buddingcrystals:refinedglowstone_cluster",
      "buddingcrystals:awakeneddraconium_cluster",
      "buddingcrystals:zinc_cluster",
      "buddingcrystals:electrum_cluster",
      "buddingcrystals:nickel_cluster",
      "buddingcrystals:nether_quartz_cluster",
      "buddingcrystals:salt_cluster",
      "buddingcrystals:hopgraphite_cluster",
      "buddingcrystals:osmium_cluster",
      "buddingcrystals:brass_cluster",
      "buddingcrystals:constantan_cluster",
      "buddingcrystals:lead_cluster",
      "buddingcrystals:bronze_cluster",
      "buddingcrystals:draconium_cluster",
      "buddingcrystals:diamond_cluster",
      "buddingcrystals:uraninite_cluster",
      "buddingcrystals:iron_cluster",
      "buddingcrystals:silver_cluster",
      "buddingcrystals:uranium_cluster",
      "buddingcrystals:redstone_cluster",
      "buddingcrystals:emerald_cluster",
      "buddingcrystals:energizedsteel_cluster",
      "buddingcrystals:blazingcrystal_cluster",
      "buddingcrystals:nioticcrystal_cluster",
      "buddingcrystals:spiritedcrystal_cluster",
      "buddingcrystals:nitrocrystal_cluster",
      "buddingcrystals:coal_cluster",
      "buddingcrystals:cow_cluster",
      "buddingcrystals:sculk_cluster",
      "buddingcrystals:enderman_cluster",
      "buddingcrystals:ghast_cluster",
      "buddingcrystals:witherskeleton_cluster",
      "buddingcrystals:blaze_cluster",
      "buddingcrystals:zombie_cluster",
      "buddingcrystals:skeleton_cluster",
      "buddingcrystals:creeper_cluster",
      "buddingcrystals:slime_cluster",
      "buddingcrystals:wither_cluster",
      "buddingcrystals:magmacube_cluster",
      "buddingcrystals:phantom_cluster",
      "buddingcrystals:flint_cluster",
      "buddingcrystals:glowsquid_cluster",
      "buddingcrystals:squid_cluster",
      "buddingcrystals:acidicredstone_cluster",
      "buddingcrystals:quantumalloy_cluster",
      "buddingcrystals:skysteel_cluster",
      "buddingcrystals:snowgolem_cluster",
      "buddingcrystals:bee_cluster",
      "buddingcrystals:spider_cluster",
      "buddingcrystals:sheep_cluster",
      "buddingcrystals:chicken_cluster",
      "buddingcrystals:chaosdragon_cluster",
      "buddingcrystals:coalcoke_cluster",
      "minecraft:budding_amethyst",
      "minecraft:amethyst_cluster",
    ];
  
    idlist.forEach((item) => {
      IRRebirth.add(item, "Can Acquire with Silk Touch");
    });
    
  });