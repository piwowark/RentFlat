/**
 * Created by BRITENET on 15.09.2019.
 */
({
    selectItem : function(component, item, itemToAdd){
        if(itemToAdd){
            component.set("v.showComponent", itemToAdd);
            component.set("v.accountItem", item);
        } else {
            component.set("v.showComponent", itemToAdd);
        }
    },
    deleteItem : function(component, item, spinner){
        let action = component.get("c.deleteDivision");

        action.setParams({"dataToDelete": item});
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                let updateEvt = component.getEvent("updateResults");
                updateEvt.fire();
                component.set("v.showComponent", false);
            }
            spinner.toggleSpinner(false);
        });
        $A.enqueueAction(action);
    }
})