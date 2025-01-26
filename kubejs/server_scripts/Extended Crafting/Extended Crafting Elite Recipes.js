ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:black_iron_slate"
        },
        "ingredients": [
          {
            "tag": "forge:ingots/hop_graphite"
          },
          {
            "tag": "forge:ingots/hop_graphite"
          },
          {
            "item": "extendedcrafting:luminessence"
          },
          {
            "item": "extendedcrafting:luminessence"
          }
        ],
        "result": {
            "item": "extendedcrafting:elite_component"
        },
        "tier": "CHAOTIC",
        "total_energy": 450000000
      }).id('extendedcrafting:elite_component')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "tag": "forge:ingots/black_iron"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:elite_component"
          },
          {
            "item": "extendedcrafting:elite_component"
          },
          {
            "item": "extendedcrafting:elite_component"
          },
          {
            "item": "extendedcrafting:elite_component"
          }
        ],
        "result": {
            "item": "extendedcrafting:elite_catalyst"
        },
        "tier": "CHAOTIC",
        "total_energy": 450000000
      }).id('extendedcrafting:elite_catalyst')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:advanced_table"
        },
        "ingredients": [
          {
            "item": "extendedcrafting:elite_component"
          },
          {
            "item": "extendedcrafting:elite_component"
          },
          {
            "item": "extendedcrafting:elite_component"
          },
          {
            "item": "extendedcrafting:elite_component"
          },
          {
            "item": "extendedcrafting:elite_catalyst"
          },
          {
            "item": "draconicevolution:chaotic_core"
          }
        ],
        "result": {
            "item": "extendedcrafting:elite_table"
        },
        "tier": "CHAOTIC",
        "total_energy": 450000000
      }).id('extendedcrafting:elite_table')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "extendedcrafting:elite_table"
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
            "item": "extendedcrafting:elite_auto_table"
        },
        "tier": "CHAOTIC",
        "total_energy": 450000000
      }).id('extendedcrafting:elite_auto_table')
})