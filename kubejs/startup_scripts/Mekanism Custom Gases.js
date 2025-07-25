const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')

StartupEvents.registry('mekanism:gas', IRRebirth => {
    IRRebirth.createCustom('kubejs:aluminum_gas', () => new $Gas($GasBuilder.builder().tint(0xC7C0CA)))
    IRRebirth.createCustom('kubejs:refined_obsidian_gas', () => new $Gas($GasBuilder.builder().tint(0x8F5CA5)))
    IRRebirth.createCustom('kubejs:certus_quartz_gas', () => new $Gas($GasBuilder.builder().tint(0x9FC5E8)))
    IRRebirth.createCustom('kubejs:steel_gas', () => new $Gas($GasBuilder.builder().tint(0x6D6D6D)))
    IRRebirth.createCustom('kubejs:prismarine_gas', () => new $Gas($GasBuilder.builder().tint(0x94CAB7)))
    IRRebirth.createCustom('kubejs:lapis_gas', () => new $Gas($GasBuilder.builder().tint(0x4662B4)))
    IRRebirth.createCustom('kubejs:gold_gas', () => new $Gas($GasBuilder.builder().tint(0xF7F35B)))
    IRRebirth.createCustom('kubejs:netherite_gas', () => new $Gas($GasBuilder.builder().tint(0x605C52)))
    IRRebirth.createCustom('kubejs:fluix_gas', () => new $Gas($GasBuilder.builder().tint(0x674EA7)))
    IRRebirth.createCustom('kubejs:glowstone_gas', () => new $Gas($GasBuilder.builder().tint(0xF6B26B)))
    IRRebirth.createCustom('kubejs:uraninite_gas', () => new $Gas($GasBuilder.builder().tint(0x6DD63F)))
    IRRebirth.createCustom('kubejs:iron_gas', () => new $Gas($GasBuilder.builder().tint(0xC3C3C3)))
    IRRebirth.createCustom('kubejs:silver_gas', () => new $Gas($GasBuilder.builder().tint(0x97A4AC)))
    IRRebirth.createCustom('kubejs:uranium_gas', () => new $Gas($GasBuilder.builder().tint(0xAAC9A0)))
    IRRebirth.createCustom('kubejs:redstone_gas', () => new $Gas($GasBuilder.builder().tint(0x6F2424)))
    IRRebirth.createCustom('kubejs:emerald_gas', () => new $Gas($GasBuilder.builder().tint(0x4CDF4C)))
    IRRebirth.createCustom('kubejs:nether_quartz_gas', () => new $Gas($GasBuilder.builder().tint(0xF4EBD2)))
    IRRebirth.createCustom('kubejs:nickel_gas', () => new $Gas($GasBuilder.builder().tint(0xD4DFD1)))
    IRRebirth.createCustom('kubejs:electrum_gas', () => new $Gas($GasBuilder.builder().tint(0xBF9000)))
    IRRebirth.createCustom('kubejs:bronze_gas', () => new $Gas($GasBuilder.builder().tint(0xF2C18F)))
    IRRebirth.createCustom('kubejs:draconium_gas', () => new $Gas($GasBuilder.builder().tint(0x9852EC)))
    IRRebirth.createCustom('kubejs:diamond_gas', () => new $Gas($GasBuilder.builder().tint(0x57FFE9)))
    IRRebirth.createCustom('kubejs:lead_gas', () => new $Gas($GasBuilder.builder().tint(0x799491)))
    IRRebirth.createCustom('kubejs:constantan_gas', () => new $Gas($GasBuilder.builder().tint(0xB06237)))
    IRRebirth.createCustom('kubejs:brass_gas', () => new $Gas($GasBuilder.builder().tint(0xF2AB4D)))
    IRRebirth.createCustom('kubejs:graphite_gas', () => new $Gas($GasBuilder.builder().tint(0x383838)))
    IRRebirth.createCustom('kubejs:tin_gas', () => new $Gas($GasBuilder.builder().tint(0xDDDDDD)))
    IRRebirth.createCustom('kubejs:zinc_gas', () => new $Gas($GasBuilder.builder().tint(0x90C3B3)))
    IRRebirth.createCustom('kubejs:awakened_draconium_gas', () => new $Gas($GasBuilder.builder().tint(0xFF8700)))
    IRRebirth.createCustom('kubejs:refined_glowstone_gas', () => new $Gas($GasBuilder.builder().tint(0xE5CA79)))
    IRRebirth.createCustom('kubejs:copper_gas', () => new $Gas($GasBuilder.builder().tint(0xD27513)))
    IRRebirth.createCustom('kubejs:energized_steel_gas', () => new $Gas($GasBuilder.builder().tint(0x9F9473)))
    IRRebirth.createCustom('kubejs:blazing_gas', () => new $Gas($GasBuilder.builder().tint(0xFFCB00)))
    IRRebirth.createCustom('kubejs:niotic_gas', () => new $Gas($GasBuilder.builder().tint(0x00C7FF)))
    IRRebirth.createCustom('kubejs:spirited_gas', () => new $Gas($GasBuilder.builder().tint(0x6BFD49)))
    IRRebirth.createCustom('kubejs:nitro_gas', () => new $Gas($GasBuilder.builder().tint(0xFD4949)))
    IRRebirth.createCustom('kubejs:carbon_gas', () => new $Gas($GasBuilder.builder().tint(0x454545)))
    IRRebirth.createCustom('kubejs:fluorite_gas', () => new $Gas($GasBuilder.builder().tint(0xD4E5E5)))
    IRRebirth.createCustom('kubejs:amethyst_gas', () => new $Gas($GasBuilder.builder().tint(0xAD64D8)))
    IRRebirth.createCustom('kubejs:sky_steel_gas', () => new $Gas($GasBuilder.builder().tint(0x424242)))
    IRRebirth.createCustom('kubejs:quantum_alloy_gas', () => new $Gas($GasBuilder.builder().tint(0x803C9D)))
})