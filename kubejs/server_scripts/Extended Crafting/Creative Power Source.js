ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBBBBBA",
          "BCCDADCCB",
          "BCAEFEACB",
          "BGHAIAHGB",
          "BAFIJIFAB",
          "BGHAIAHGB",
          "BCAEFEACB",
          "BCCDADCCB",
          "ABBBBBBBA"
        ],
        "key": {
          "A": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "B": {
            "item": "extendedcrafting:the_ultimate_block"
          },
          "C": {
            "type": "forge:nbt",
            "item": "mekanism:ultimate_energy_cube",
            "count": 1,
            "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"256000000\"}]}}"
          },
          "D": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:spiritedcrystal\"}"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:nitro_crystal\"}"
          },
          "F": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:blazing_crystal\"}"
          },
          "G": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:niotic_crystal\"}"
          },
          "H": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:awakened_draconium\"}"
          },
          "I": {
            "item": "draconicevolution:reactor_core"
          },
          "J": {
            "item": "draconicevolution:dragon_heart"
          }
        },
        "result": {
          "item": "draconicevolution:creative_op_capacitor"
        }
      })
})