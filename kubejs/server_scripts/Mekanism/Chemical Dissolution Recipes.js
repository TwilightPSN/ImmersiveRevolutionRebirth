ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "mekanism:dissolution",
        "gasInput": {
          "amount": 2,
          "gas": "mekanism:sulfuric_acid"
        },
        "itemInput": {
          "ingredient": {
            "tag": "forge:storage_blocks/raw_draconium"
          }
        },
        "output": {
          "amount": 6000,
          "chemicalType": "slurry",
          "slurry": "jaopca:mekanism_dirty.draconium"
        }
      })
    IRRebirth.custom({
        "type": "mekanism:dissolution",
        "gasInput": {
          "amount": 1,
          "gas": "mekanism:sulfuric_acid"
        },
        "itemInput": {
            "amount": 3,
          "ingredient": {
            "tag": "forge:raw_materials/draconium"
          }
        },
        "output": {
          "amount": 2000,
          "chemicalType": "slurry",
          "slurry": "jaopca:mekanism_dirty.draconium"
        }
      })
})