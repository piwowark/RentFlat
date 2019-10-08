/**
 * Created by BRITENET on 13.09.2019.
 */
({
    searchAccounts : function(component, event, helper){
        let params = event.getParam("arguments");
        let searchedAccounts = component.get("v.searchedAccounts");
        searchedAccounts.length = 0;
        component.set("v.searchedAccounts", params.accounts);
    },
    clear : function(component, event, helper){
        let searchedAccounts = component.get("v.searchedAccounts");
        searchedAccounts.length = 0;
        component.set("v.searchedAccounts", searchedAccounts);
    }
})