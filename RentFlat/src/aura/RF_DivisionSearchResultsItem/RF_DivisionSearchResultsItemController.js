/**
 * Created by BRITENET on 13.09.2019.
 */
({
    selectItem : function(component, event, helper) {
        let button = component.find("ButtonWithData");
        $A.util.toggleClass(button, "active");
        let isClicked = component.get("v.isClicked");
        component.set("v.isClicked", !isClicked);
        let account = component.get("v.accountItem");
        let selectItemEvent = $A.get("e.c:RF_DivisionSearchSelectItemEvent");
        selectItemEvent.setParams({ "item": account });
        selectItemEvent.setParams({ "itemToAdd": component.get("v.isClicked") });
        selectItemEvent.fire();
    },
    selectItemEventHandle : function(component, event, helper) {
        let componentItem = component.get("v.accountItem");
        let eventItem = event.getParam("item");
        let isClicked = component.get("v.isClicked");
        if(eventItem.Id != componentItem.Id){
            if(isClicked){
                let button = component.find("ButtonWithData");
                $A.util.toggleClass(button, "active");
                component.set("v.isClicked", !isClicked);
            }
        }
    }
})