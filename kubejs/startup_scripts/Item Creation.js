StartupEvents.registry('item', IRRebirth => {
    IRRebirth.create('blaze_clay')
        .displayName('Blazing Clay')
        .tooltip('Clay with a Firey Like Color')
    IRRebirth.create('fluix_wire')
        .tag('forge:wires')
        .tag('forge:wires/fluix')
        .tag('immersiveengineering:circuits/solder')
    IRRebirth.create('certus_wire')
        .tag('forge:wires')
        .tag('forge:wires/certus')
        .tag('immersiveengineering:circuits/solder')
    IRRebirth.create('fluix_plate')
        .tag('forge:plates')
        .tag('forge:plates/fluix')
    IRRebirth.create('certus_plate')
        .tag('forge:plates')
        .tag('forge:plates/certus')
    IRRebirth.create('osmium_plate')
        .tag('forge:plates')
        .tag('forge:plates/osmium')
    IRRebirth.create('osmium_rod')
        .tag('forge:rods/all_metal')
        .tag('forge:rods/osmium')
    IRRebirth.create('bronze_plate')
        .tag('forge:plates')
        .tag('forge:plates/bronze')
    IRRebirth.create('bronze_rod')
        .tag('forge:rods/all_metal')
        .tag('forge:rods/bronze')
    IRRebirth.create('refined_glowstone_plate')
        .tag('forge:plates')
        .tag('forge:plates/refined_glowstone')
    IRRebirth.create('refined_glowstone_rod')
        .tag('forge:rods/all_metal')
        .tag('forge:rods/refined_glowstone')
    IRRebirth.create('refined_obsidian_plate')
        .tag('forge:plates')
        .tag('forge:plates/refined_obsidian')
    IRRebirth.create('refined_obsidian_rod')
        .tag('forge:rods/all_metal')
        .tag('forge:rods/refined_obsidian')
    IRRebirth.create('tin_plate')
        .tag('forge:plates')
        .tag('forge:plates/tin')
    IRRebirth.create('tin_rod')
        .tag('forge:rods/all_metal')
        .tag('forge:rods/tin')
    IRRebirth.create('graphite_plate')
        .displayName('HOP Graphite Plate')
        .tag('forge:plates')
        .tag('forge:plates/hop_graphite')
    IRRebirth.create('acidic_redstone')
        .displayName('Acidic Redstone Dust')
        .tag('forge:dusts')
        .tooltip('Potent Redstone')
    IRRebirth.create('dust_mold')
        .displayName('Metal Press Mold: Dust')
    IRRebirth.create('diamond_plate')
        .tag('forge:plates')
        .tag('forge:plates/diamond')
    IRRebirth.create('diamond_rod')
        .tag('forge:rods/diamond')
    IRRebirth.create('end_key')
        .displayName('End Portal Key')
        .tag('irrebirth:portal_keys')
        .tooltip('Used to activate a personal End Portal')
        .unstackable()
        .glow(true)
        .rarity('Epic')
    IRRebirth.create('nether_key')
        .displayName('Nether Portal Key')
        .tag('irrebirth:portal_keys')
        .tooltip('Used to activate the Nether Portal')
        .unstackable()
        .glow(true)
        .rarity('Epic')
    IRRebirth.create('end_mining_key')
        .displayName('End Mining Dimension Key')
        .tag('irrebirth:portal_keys')
        .tooltip('Used to activate the End Mining Portal')
        .unstackable()
        .glow(true)
        .rarity('Epic')
    IRRebirth.create('nether_mining_key')
        .displayName('Nether Mining Dimension Key')
        .tag('irrebirth:portal_keys')
        .tooltip('Used to activate the Nether Mining Portal')
        .unstackable()
        .glow(true)
        .rarity('Epic')
    IRRebirth.create('mining_key')
        .displayName('Mining Dimension Key')
        .tag('irrebirth:portal_keys')
        .tooltip('Used to activate the Mining Portal')
        .unstackable()
        .glow(true)
        .rarity('Epic')
    IRRebirth.create('void_key')
        .displayName('Void Dimension Key')
        .tag('irrebirth:portal_keys')
        .tooltip('Used to activate the Void Portal')
        .unstackable()
        .glow(true)
        .rarity('Epic')
    IRRebirth.create('hop_graphite_nugget')
        .displayName('HOP Graphite Nugget')
        .tag('forge:nuggets')
        .tag('forge:nuggets/hop_graphite')
        .tag('silentgear:gold_digger')
        .tag('balm:nuggets')
})