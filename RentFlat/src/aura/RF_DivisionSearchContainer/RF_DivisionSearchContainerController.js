/**
 * Created by BRITENET on 16.09.2019.
 */
({
    showEditForm : function(component, event, helper){
        let editForm = component.find("EditForm");
        let accountItem = event.getParam("accountItem");
        let modalTitle = event.getParam("modalTitle");
        editForm.showEditForm(accountItem, modalTitle);
    },
    clearEvt : function(component, event, helper){
        let results = component.find("Results");
        let resultsMap = component.find("ResultsMap");
        let itemDetails = component.find("ItemDetails");
        results.clear();
        resultsMap.clear();
        itemDetails.clear();
    },
    updateResultsEvent : function(component, event, helper){
        let searchForm = component.find("SearchForm");
        searchForm.updateResults();
    },
    showSpinner : function(component, event, helper){
        component.set("v.Spinner", true);
    },
    hideSpinner : function(component, event, helper){
        component.set("v.Spinner", false);
    },
    searchAccounts : function(component, event, helper){
        let dataToSearch = event.getParam("item");
        let action = component.get("c.searchDivisions");
        action.setParams({"dataToSearch": dataToSearch});
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === "SUCCESS"){
                let accounts = response.getReturnValue();
                let results = component.find("Results");
                let resultsMap = component.find("ResultsMap");
                results.searchAccounts(accounts);
                console.log('aura methods runs1');
                resultsMap.searchAccounts(accounts);
                console.log('aura methods runs2');
            }
        });
        $A.enqueueAction(action);
    }
})