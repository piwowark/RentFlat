/**
 * Created by BRITENET on 13.09.2019.
 */
({
    searchEventHandle : function(component, event, helper){
        let dataToSearch = event.getParam("item");
        helper.searchDivision(component, dataToSearch);
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