ServerEvents.recipes(IRRebirth => {
    IRRebirth.shaped(
        Item.of('more_immersive_wires:ae_coil', 8), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: '#forge:wires/fluix',
          B: 'immersiveengineering:stick_treated'
        }
      )
    IRRebirth.shaped(
        Item.of('more_immersive_wires:ae_dense_coil', 4), 
        [
          'AAA',
          'ABA',
          'AAA'
        ],
        {
          A: 'more_immersive_wires:ae_coil',
          B: 'immersiveengineering:stick_treated'
        }
      )
    IRRebirth.shaped(
        Item.of('more_immersive_wires:ae_relay', 2), 
        [
          ' A ',
          ' C ',
          'BAB'
        ],
        {
          A: '#forge:plates/fluix',
          B: '#forge:plates/steel',
          C: '#forge:wires/fluix'
        }
      )
    IRRebirth.shaped(
        Item.of('more_immersive_wires:ae_connector', 2), 
        [
          'AAA',
          'ABA',
          'CBC'
        ],
        {
          A: '#forge:wires/fluix',
          B: '#forge:plates/fluix',
          C: '#forge:plates/steel'
        }
      )
    IRRebirth.shaped(
        Item.of('more_immersive_wires:ae_dense_connector', 2), 
        [
          'AAA',
          'ABA',
          'CBC'
        ],
        {
          A: 'more_immersive_wires:ae_dense_coil',
          B: 'more_immersive_wires:ae_connector',
          C: '#forge:plates/steel'
        }
      )
    IRRebirth.shaped(
      Item.of('more_immersive_wires:ae_dense_relay', 2), 
        [
          'AAA',
          'ABA',
          'CBC'
        ],
        {
          A: 'more_immersive_wires:ae_dense_coil',
          B: 'more_immersive_wires:ae_relay',
          C: '#forge:plates/steel'
        }
     )
        IRRebirth.shaped(
            Item.of('ae2:drive', 1), 
            [
              'ABA',
              'C C',
              'ABA'
            ],
            {
              A: '#forge:plates/certus',
              B: 'ae2:engineering_processor',
              C: 'more_immersive_wires:ae_coil'
            }
          )
        IRRebirth.shaped(
            Item.of('ae2:charger', 1), 
            [
              'ABA',
              'CD ',
              'ABA'
            ],
            {
              A: '#forge:plates/fluix',
              B: '#forge:rods/steel',
              C: '#forge:plates/certus',
              D: 'ae2:charged_certus_quartz_crystal'
            }
          ).id('ae2:network/blocks/crystal_processing_charger')
        IRRebirth.shapeless(
            Item.of('fulleng:terminal', 1), 
            [
              'ae2:formation_core',
              '#ae2:illuminated_panel',
              'ae2:logic_processor',
              'ae2:annihilation_core'
            ]
          ).id('ae2:network/parts/terminals')
        IRRebirth.shapeless(
            Item.of('fulleng:pattern_access_terminal', 1), 
            [
              '#ae2:illuminated_panel',
              'ae2:engineering_processor',
              '#ae2:pattern_provider'
            ]
          ).id('ae2:network/parts/terminals_pattern_access')
        IRRebirth.shapeless(
            Item.of('fulleng:requester_terminal', 1), 
            [
              '#ae2:illuminated_panel',
              'ae2:logic_processor',
              'merequester:requester'
            ]
          ).id('merequester:requester_terminal')
        IRRebirth.shapeless(
            Item.of('fulleng:crafting_terminal', 1), 
            [
              'ae2:terminal',
              '#forge:workbenches',
              'ae2:calculation_processor'
            ]
          ).id('ae2:network/parts/terminals_crafting')
        IRRebirth.shapeless(
            Item.of('fulleng:pattern_encoding_terminal', 1), 
            [
              'ae2:engineering_processor',
              'ae2:crafting_terminal'
            ]
          ).id('ae2:network/parts/terminals_pattern_encoding')
        IRRebirth.shapeless(
            Item.of('fulleng:pattern_encoding_terminal', 1), 
            [
              'ae2:engineering_processor',
              'fulleng:crafting_terminal'
            ]
          ).id('ae2:network/parts/terminals_pattern_encoding_full')
})