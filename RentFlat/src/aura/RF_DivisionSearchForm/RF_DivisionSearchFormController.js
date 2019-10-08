/**
 * Created by BRITENET on 13.09.2019.
 */
({
    searchClick : function(component, event, helper){
        if(event.getParam("arguments") === undefined){
            component.set("v.isSearched", true);
        }
        if(component.get("v.isSearched")){
            component.set("v.dataToSearch",{'sobjectType':'Account',
                                            'Name':component.find("AccountName").get("v.value"),
                                            'AccountNumber':component.find("AccountNumber").get("v.value"),
                                            'Phone':component.find("Phone").get("v.value")});
            let account = component.get("v.dataToSearch");
            let searchDivision = component.getEvent("searchAccounts");
            searchDivision.setParams({ "item": account });
            console.log('Fire Event');
            searchDivision.fire();
        }
    },
    clearClick : function(component, event, helper){
        component.set("v.isSearched", false);
        let clearEvt = component.getEvent("clearEvent");
        clearEvt.fire();
        component.find("AccountName").set("v.value", "");
        component.find("AccountNumber").set("v.value", "");
        component.find("Phone").set("v.value", "");
    }
})