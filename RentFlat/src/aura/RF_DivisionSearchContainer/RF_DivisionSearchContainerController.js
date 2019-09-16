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
    }
})