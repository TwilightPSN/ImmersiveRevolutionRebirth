BlockEvents.modification(IRRebirth => {
    IRRebirth.modify('/buddingcrystals:small_.*_bud/', block => {
        block.setDestroySpeed(-1);
        block.setExplosionResistance(-1);
    });
    IRRebirth.modify('/buddingcrystals:medium_.*_bud/', block => {
        block.setDestroySpeed(-1);
        block.setExplosionResistance(-1);
    });
    IRRebirth.modify('/buddingcrystals:large_.*_bud/', block => {
        block.setDestroySpeed(-1);
        block.setExplosionResistance(-1);
    });
});