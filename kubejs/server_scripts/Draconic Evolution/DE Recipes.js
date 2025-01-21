ServerEvents.recipes(IRRebirth => {
  IRRebirth.shaped(
      Item.of('draconicevolution:draconium_core'), 
      [
        'ABA',
        'CDC',
        'ABA'
      ],
      {
        A: '#forge:ingots/draconium',
        B: 'mekanism:pellet_polonium',
        C: 'mekanism:pellet_plutonium',
        D: 'mekanism:pellet_antimatter'
      }
    ).id('draconicevolution:components/draconium_core')
})