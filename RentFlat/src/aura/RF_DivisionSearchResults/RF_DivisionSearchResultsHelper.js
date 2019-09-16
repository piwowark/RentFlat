/**
 * Created by BRITENET on 14.09.2019.
 */
({
    searchDivision : function(component, dataToSearch){
        let action = component.get("c.searchDivisions");
        action.setParams({"dataToSearch": dataToSearch});
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                let searchedAccounts = component.get("v.searchedAccounts");
                searchedAccounts.length = 0;
                Array.prototype.push.apply(searchedAccounts, response.getReturnValue());
                component.set("v.searchedAccounts", searchedAccounts);
            }
        });
        $A.enqueueAction(action);
    }
})