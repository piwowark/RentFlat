/**
 * Created by BRITENET on 13.09.2019.
 */
({
    searchAccounts : function(component, event, helper){
        let params = event.getParam("arguments");
        helper.searchDivision(component, params.accounts);
    },
    selectItemEventHandle : function(component, event, helper){
        let item = event.getParam("item");
        let itemToAdd = event.getParam("itemToAdd");
        helper.selectItem(component, item, itemToAdd);
    },
    clear : function(component, event, helper){
        let mapMarkers = [];
        component.set('v.mapMarkers', mapMarkers);
    }
})