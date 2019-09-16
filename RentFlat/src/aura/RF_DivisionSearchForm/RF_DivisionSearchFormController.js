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
            let searchDivision = $A.get("e.c:RF_SearchDivisionSearchEvent");
            searchDivision.setParams({ "item": account });
            searchDivision.fire();
        }
    },
    clearClick : function(component, event, helper){
        component.set("v.isSearched", false);
        let clearEvt = component.getEvent("clearEvent");
        console.log(clearEvt);
        clearEvt.fire();
        component.set("v.dataToSearch",{'sobjectType':'Account','Name':'','AccountNumber':'','Phone':''});
    }
})