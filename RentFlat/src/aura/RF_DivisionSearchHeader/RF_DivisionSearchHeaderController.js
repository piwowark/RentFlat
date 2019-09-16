/**
 * Created by BRITENET on 16.09.2019.
 */
({
    showEditForm : function(component, event, helper){
        let showEdit = component.getEvent("showEditForm");
        showEdit.setParams({"modalTitle": $A.get("$Label.c.RF_NewDivisionLabel")});
        showEdit.fire();
    }
})