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
})