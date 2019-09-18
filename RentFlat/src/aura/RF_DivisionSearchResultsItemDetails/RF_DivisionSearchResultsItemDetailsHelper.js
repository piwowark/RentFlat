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
    deleteItem : function(component, item){
        let action = component.get("c.deleteDivision");

        action.setParams({"dataToDelete": item});
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                let updateEvt = component.getEvent("updateResults");
                updateEvt.fire();
                component.set("v.showSpinner", false);
                component.set("v.showComponent", false);
            }
        });
        $A.enqueueAction(action);
    }
})