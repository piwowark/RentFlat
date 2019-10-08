/**
 * Created by BRITENET on 18.09.2019.
 */
({
    toggleSpinner : function(component, event, helper){
        let params = event.getParam("arguments");
        component.set("v.Spinner", params.showSpinner);
    }
})