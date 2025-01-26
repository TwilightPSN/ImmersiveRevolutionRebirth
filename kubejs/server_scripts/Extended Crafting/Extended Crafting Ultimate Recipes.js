ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:black_iron_slate"
        },
        "ingredients": [
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "extendedcrafting:luminessence"
          },
          {
            "item": "extendedcrafting:luminessence"
          }
        ],
        "result": {
            "item": "extendedcrafting:ultimate_component"
        },
        "tier": "CHAOTIC",
        "total_energy": 13500000000
      }).id('extendedcrafting:ultimate_component')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "tag": "forge:ingots/black_iron"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:ultimate_component"
          },
          {
            "item": "extendedcrafting:ultimate_component"
          },
          {
            "item": "extendedcrafting:ultimate_component"
          },
          {
            "item": "extendedcrafting:ultimate_component"
          }
        ],
        "result": {
            "item": "extendedcrafting:ultimate_catalyst"
        },
        "tier": "CHAOTIC",
        "total_energy": 13500000000
      }).id('extendedcrafting:ultimate_catalyst')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:elite_table"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:ultimate_component"
          },
          {
            "item": "extendedcrafting:ultimate_component"
          },
          {
            "item": "extendedcrafting:ultimate_component"
          },
          {
            "item": "extendedcrafting:ultimate_component"
          },
          {
            "item": "extendedcrafting:ultimate_catalyst"
          },
          {
            "item": "draconicevolution:chaotic_core"
          }
        ],
        "result": {
            "item": "extendedcrafting:ultimate_table"
        },
        "tier": "CHAOTIC",
        "total_energy": 13500000000
      }).id('extendedcrafting:ultimate_table')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:ultimate_table"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:black_iron_ingot"
          },
          {
            "item": "extendedcrafting:redstone_component"
          },
          {
            "item": "extendedcrafting:redstone_component"
          },
          {
            "item": "extendedcrafting:crystaltine_component"
          },
          {
            "item": "extendedcrafting:crystaltine_component"
          }
        ],
        "result": {
            "item": "extendedcrafting:ultimate_auto_table"
        },
        "tier": "CHAOTIC",
        "total_energy": 13500000000
      }).id('extendedcrafting:ultimate_auto_table')
})