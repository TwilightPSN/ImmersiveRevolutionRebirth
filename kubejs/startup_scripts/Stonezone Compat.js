StartupEvents.init(IRRebirth => {
    try {
        let StoneTypeRegistry = Java.loadClass('net.mehvahdjukaar.stone_zone.api.set.stone.StoneTypeRegistry');
        let VanillaRockChildKeys = Java.loadClass('net.mehvahdjukaar.stone_zone.api.set.VanillaRockChildKeys');
        
        let stoneReg = StoneTypeRegistry.INSTANCE;
        console.info('Loaded Stone Zone StoneTypeRegistry');
        
        stoneReg.addSimpleFinder('kubejs', 'acidic_redstone_block')
        stoneReg.addSimpleFinder('kubejs', 'cobbled_andesite')
        stoneReg.addSimpleFinder('kubejs', 'raw_draconium_block')
        stoneReg.addSimpleFinder('kubejs', 'raw_netherite_block')
        stoneReg.addSimpleFinder('immersiveengineering', 'coke')
        stoneReg.addSimpleFinder('immersiveengineering', 'hempcrete')
        stoneReg.addSimpleFinder('immersiveengineering', 'concrete')
        stoneReg.addSimpleFinder('immersiveengineering', 'duroplast')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_copper')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_aluminum')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_lead')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_silver')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_nickel')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_uranium')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_constantan')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_electrum')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_steel')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_iron')
        stoneReg.addSimpleFinder('immersiveengineering', 'sheetmetal_gold')
        
        console.info('Successfully added Kubejs Blocks to Stone Zone compatibility');
    } catch (e) {
        console.warn('Failed to register kubejs blocks type: ' + e.toString());
    }
});