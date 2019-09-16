/**
 * Created by BRITENET on 13.09.2019.
 */
({
    searchEventHandle : function(component, event, helper){
        let dataToSearch = event.getParam("item");
        helper.searchDivision(component, dataToSearch);
    },
    clear : function(component, event, helper){
        let searchedAccounts = component.get("v.searchedAccounts");
        searchedAccounts.length = 0;
        component.set("v.searchedAccounts", searchedAccounts);
    }
})