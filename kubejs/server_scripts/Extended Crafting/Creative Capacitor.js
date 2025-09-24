ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABBBBBBBA",
          "BCCDADCCB",
          "BCAEEEACB",
          "BFEAGAEFB",
          "BAEGHGEAB",
          "BFEAGAEFB",
          "BCAEEEACB",
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
            "item": "draconicevolution:chaotic_core"
          },
          "E": {
            "type": "forge:nbt",
            "item": "extendedcrafting:singularity",
            "count": 1,
            "nbt": "{Id:\"extendedcrafting:awakened_draconium\"}"
          },
          "F": {
            "item": "draconicevolution:dragon_heart"
          },
          "G": {
            "item": "draconicevolution:chaotic_capacitor"
          },
          "H": {
            "item": "draconicevolution:chaos_shard"
          }
        },
        "result": {
          "item": "draconicevolution:creative_capacitor"
        }
      })
})