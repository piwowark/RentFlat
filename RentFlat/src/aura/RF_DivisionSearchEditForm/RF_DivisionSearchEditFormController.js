/**
 * Created by BRITENET on 16.09.2019.
 */
({
    handleSubmit : function(component, event, helper){
    },
    handleSuccess : function(component, event, helper){
        component.set("v.showModal", false);
<<<<<<< HEAD
                   let updateEvt = component.getEvent("updateResults");
                   updateEvt.fire();
                   let toastEvent = $A.get("e.force:showToast");
                   toastEvent.setParams({
                       "message": $A.get("$Label.c.RF_SaveSuccessfulLabel"),
                       "type":"success"
                   });
=======
        let updateEvt = component.getEvent("updateResults");
        updateEvt.fire();
        let toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": $A.get("$Label.c.RF_SaveSuccessfulLabel"),
            "type":"success"
        });
>>>>>>> 6fe267be015c88e7b7c69c6bb16ec5a02c7c1cd1
        toastEvent.fire();
    },
    handleError : function(component, event, helper){
        let toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": $A.get("$Label.c.RF_SaveFailedLabel"),
            "type":"error"
        });
        toastEvent.fire();
    },
    showEditForm : function(component, event, helper){
        let params = event.getParam("arguments");
        component.set("v.accountItem", params.accountItem);
        component.set("v.modalTitle", params.modalTitle);
        component.set("v.disabled", false);
        component.set("v.showModal", true);
    },
    closeModal : function(component, event, helper){
        component.set("v.showModal", false);
    }
})