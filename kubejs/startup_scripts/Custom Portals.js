const CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder")

StartupEvents.postInit((IRRebirth) => {
	CustomPortalBuilder.beginPortal()
		["frameBlock(net.minecraft.world.level.block.Block)"](ResourceLocation.tryParse("kubejs:nether_frame_bricks"))
		.destDimID(ResourceLocation.tryParse("minecraft:the_nether"))
		.returnDim(ResourceLocation.tryParse("minecraft:overworld"), true)
		.lightWithItem(ResourceLocation.tryParse("kubejs:nether_key"))
		.tintColor(223, 127, 40)
		.registerPortal();
	CustomPortalBuilder.beginPortal()
		["frameBlock(net.minecraft.world.level.block.Block)"](ResourceLocation.tryParse("kubejs:end_frame_bricks"))
		.destDimID(ResourceLocation.tryParse("minecraft:the_end"))
		.returnDim(ResourceLocation.tryParse("minecraft:overworld"), true)
		.lightWithItem(ResourceLocation.tryParse("kubejs:end_key"))
		.tintColor(166, 108, 149)
        .flatPortal()
		.registerPortal();
	CustomPortalBuilder.beginPortal()
		["frameBlock(net.minecraft.world.level.block.Block)"](ResourceLocation.tryParse("kubejs:mining_frame_bricks"))
		.destDimID(ResourceLocation.tryParse("jamd:mining"))
		.returnDim(ResourceLocation.tryParse("minecraft:overworld"), true)
		.lightWithItem(ResourceLocation.tryParse("kubejs:mining_key"))
		.tintColor(108, 162, 166)
		.registerPortal();
	CustomPortalBuilder.beginPortal()
		["frameBlock(net.minecraft.world.level.block.Block)"](ResourceLocation.tryParse("kubejs:nether_mining_frame_bricks"))
		.destDimID(ResourceLocation.tryParse("jamd:nether"))
		.returnDim(ResourceLocation.tryParse("minecraft:overworld"), true)
		.lightWithItem(ResourceLocation.tryParse("kubejs:nether_mining_key"))
		.tintColor(77, 73, 77)
		.registerPortal();
	CustomPortalBuilder.beginPortal()
		["frameBlock(net.minecraft.world.level.block.Block)"](ResourceLocation.tryParse("kubejs:end_mining_frame_bricks"))
		.destDimID(ResourceLocation.tryParse("jamd:end"))
		.returnDim(ResourceLocation.tryParse("minecraft:overworld"), true)
		.lightWithItem(ResourceLocation.tryParse("kubejs:end_mining_key"))
		.tintColor(232, 244, 178)
		.registerPortal();
	CustomPortalBuilder.beginPortal()
		["frameBlock(net.minecraft.world.level.block.Block)"](ResourceLocation.tryParse("kubejs:void_frame_bricks"))
		.destDimID(ResourceLocation.tryParse("javd:void"))
		.returnDim(ResourceLocation.tryParse("minecraft:overworld"), true)
		.lightWithItem(ResourceLocation.tryParse("kubejs:void_key"))
		.tintColor(100, 12, 140)
		.registerPortal();
});