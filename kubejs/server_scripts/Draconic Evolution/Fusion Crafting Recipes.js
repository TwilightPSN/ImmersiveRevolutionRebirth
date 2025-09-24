ServerEvents.recipes(IRRebirth => {
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "draconicevolution:basic_crafting_injector"
        },
        "ingredients": [
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "tag": "forge:storage_blocks/draconium"
          },
          {
            "tag": "forge:storage_blocks/draconium"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "mekanism:pellet_polonium"
          },
          {
            "item": "mekanism:pellet_polonium"
          }
        ],
        "result": {
            "item": "draconicevolution:wyvern_crafting_injector"
        },
        "tier": "DRACONIUM",
        "total_energy": 5000000
      }).id('draconicevolution:machines/wyvern_crafting_injector')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "type": "draconicevolution:ingredient_stack",
            "count" : 2,
        "items": [
            {
            "tag": "forge:storage_blocks/draconium",
            }
        ]
        },
        "ingredients": [
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:draconium_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:dragon_heart"
          },
          {
            "tag": "forge:storage_blocks/refined_glowstone"
          },
          {
            "tag": "forge:storage_blocks/refined_obsidian"
          },
          {
            "item": "mekanism:teleportation_core"
          }
        ],
        "result": {
            "item": "draconicevolution:awakened_draconium_block",
            "count": 2
        },
        "tier": "WYVERN",
        "total_energy": 125000000
      }).id('draconicevolution:awakened_draconium_block')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "mekanism:pellet_antimatter"
        },
        "ingredients": [
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "tag": "forge:storage_blocks/draconium_awakened"
          },
          {
            "tag": "forge:storage_blocks/draconium_awakened"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "mekanism:pellet_polonium"
          },
          {
            "item": "minecraft:nether_star"
          },
          {
            "item": "minecraft:nether_star"
          }
        ],
        "result": {
            "item": "draconicevolution:awakened_core"
        },
        "tier": "WYVERN",
        "total_energy": 25000000
      }).id('draconicevolution:components/awakened_core')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "draconicevolution:wyvern_crafting_injector"
        },
        "ingredients": [
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "tag": "forge:storage_blocks/draconium_awakened"
          },
          {
            "item": "mekanism:pellet_antimatter"
          },
          {
            "item": "minecraft:nether_star"
          }
        ],
        "result": {
            "item": "draconicevolution:awakened_crafting_injector"
        },
        "tier": "WYVERN",
        "total_energy": 37000000
      }).id('draconicevolution:machines/awakened_crafting_injector')
      IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
            "item": "draconicevolution:awakened_crafting_injector"
        },
        "ingredients": [
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "draconicevolution:awakened_core"
          },
          {
            "item": "minecraft:dragon_egg"
          },
          {
            "item": "mekanism:pellet_antimatter"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "minecraft:nether_star"
          }
        ],
        "result": {
            "item": "draconicevolution:chaotic_crafting_injector"
        },
        "tier": "DRACONIC",
        "total_energy": 78000000
      }).id('draconicevolution:machines/chaotic_crafting_injector')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "type": "draconicevolution:ingredient_stack",
          "count": 4,
          "items": [
            {
              "item": "draconicevolution:wyvern_relay_crystal"
            }
          ]
        },
        "ingredients": [
          {
            "item": "draconicevolution:wyvern_energy_core"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "draconicevolution:wyvern_core"
          },
          {
            "item": "mekanism:pellet_plutonium"
          },
          {
            "item": "draconicevolution:wyvern_energy_core"
          },
          {
            "item": "draconicevolution:wyvern_energy_core"
          },
          {
            "item": "mekanism:pellet_polonium"
          },
          {
            "item": "mekanism:pellet_polonium"
          },
          {
            "item": "mekanism:pellet_antimatter"
          },
          {
            "item": "draconicevolution:wyvern_energy_core"
          }
        ],
        "result": {
          "count": 4,
          "item": "draconicevolution:draconic_relay_crystal"
        },
        "tier": "DRACONIC",
        "total_energy": 12800000
      }).id('draconicevolution:machines/draconic_relay_crystal')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "item": "draconicevolution:chaos_shard"
        },
        "ingredients": [
          {
            "tag": "forge:ingots/draconium_awakened"
          },
          {
            "tag": "forge:ingots/draconium"
          },
          {
            "tag": "forge:ingots/draconium_awakened"
          },
          {
            "tag": "forge:ingots/draconium"
          },
          {
            "tag": "forge:ingots/draconium_awakened"
          },
          {
            "tag": "forge:ingots/draconium"
          },
          {
            "tag": "forge:ingots/draconium_awakened"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          }
        ],
        "result": {
          "item": "draconicevolution:reactor_core"
        },
        "tier": "CHAOTIC",
        "total_energy": 640000000
      }).id('draconicevolution:machines/reactor_core')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "item": "draconicevolution:reactor_prt_stab_frame"
        },
        "ingredients": [
          {
            "item": "draconicevolution:draconic_energy_core"
          },
          {
            "item": "draconicevolution:reactor_prt_rotor_full"
          },
          {
            "item": "draconicevolution:reactor_prt_focus_ring"
          },
          {
            "tag": "forge:ingots/draconium_awakened"
          },
          {
            "tag": "forge:ingots/draconium_awakened"
          },
          {
            "item": "draconicevolution:chaotic_core"
          },
          {
            "tag": "forge:ingots/draconium_awakened"
          },
          {
            "item": "draconicevolution:large_chaos_frag"
          }
        ],
        "result": {
          "item": "draconicevolution:reactor_stabilizer"
        },
        "tier": "CHAOTIC",
        "total_energy": 160000000
      }).id('draconicevolution:machines/reactor_stabilizer')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "item": "draconicevolution:wyvern_core"
        },
        "ingredients": [
          {
            "tag": "forge:ingots/draconium"
          },
          {
            "item": "draconicevolution:reactor_prt_in_rotor"
          },
          {
            "item": "draconicevolution:reactor_prt_in_rotor"
          },
          {
            "item": "draconicevolution:reactor_prt_in_rotor"
          },
          {
            "tag": "forge:ingots/draconium"
          },
          {
            "tag": "forge:ingots/draconium"
          },
          {
            "item": "mekanism:pellet_antimatter"
          },
          {
            "item": "draconicevolution:reactor_prt_in_rotor"
          },
          {
            "tag": "forge:ingots/draconium"
          }
        ],
        "result": {
          "item": "draconicevolution:reactor_injector"
        },
        "tier": "CHAOTIC",
        "total_energy": 160000000
      }).id('draconicevolution:machines/reactor_injector')
    IRRebirth.custom({
        "type": "draconicevolution:fusion_crafting",
        "catalyst": {
          "item": "minecraft:budding_amethyst"
        },
        "ingredients": [
          {
            "item": "draconicevolution:chaotic_core"
          },
          {
            "item": "draconicevolution:chaotic_core"
          },
          {
            "item": "draconicevolution:chaotic_core"
          },
          {
            "item": "draconicevolution:chaotic_core"
          }
        ],
        "result": {
          "item": "buddingcrystals:budding_chaos_dragon"
        },
        "tier": "CHAOTIC",
        "total_energy": 1250000000
      }).id('buddingcrystals:budding_chaos_dragon')
})