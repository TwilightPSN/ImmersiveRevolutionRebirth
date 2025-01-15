ServerEvents.recipes(IRRebirth => {
	IRRebirth.recipes.create.sequenced_assembly([
		Item.of('immersiveengineering:cokebrick', 27),
	], ['#forge:sandstone'], [
		IRRebirth.recipes.createDeploying('kubejs:partial_coke_brick', ['kubejs:partial_coke_brick', 'minecraft:clay_ball']),
		IRRebirth.recipes.createDeploying('kubejs:partial_coke_brick', ['kubejs:partial_coke_brick', 'minecraft:brick']),
		IRRebirth.recipes.createDeploying('kubejs:partial_coke_brick', ['kubejs:partial_coke_brick', 'immersiveengineering:dust_coke']),
		IRRebirth.recipes.createPressing('kubejs:partial_coke_brick', 'kubejs:partial_coke_brick'),
		IRRebirth.recipes.createCutting('kubejs:partial_coke_brick', 'kubejs:partial_coke_brick')
	]).transitionalItem('kubejs:partial_coke_brick').loops(9)
})