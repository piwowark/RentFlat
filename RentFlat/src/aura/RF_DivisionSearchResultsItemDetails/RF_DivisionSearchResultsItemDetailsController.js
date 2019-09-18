/**
 * Created by BRITENET on 15.09.2019.
 */
({
    selectItemEventHandle : function(component, event, helper){
        let item = event.getParam("item");
        let itemToAdd = event.getParam("itemToAdd");
        helper.selectItem(component, item, itemToAdd);
    },
    showEditForm : function(component, event, helper){
        let showEdit = component.getEvent("showEditForm");
        showEdit.setParams({ "accountItem":component.get("v.accountItem"), "modalTitle": $A.get("$Label.c.RF_EditDivisionLabel")});
        showEdit.fire();
    },
    clear : function(component, event, helper){
        component.set("v.showComponent", false);
    },
    deleteAccount : function(component, event, helper){
        component.set("v.showSpinner", true);
        let accountItem = component.get("v.accountItem");
        helper.deleteItem(component, accountItem);
    },

})