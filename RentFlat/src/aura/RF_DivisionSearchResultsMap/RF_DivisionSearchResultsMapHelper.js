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
                let mapMarkers = [];
                let accounts = response.getReturnValue();
                for (let i = 0; i < accounts.length; i++) {
                    let account = accounts[i];
                    let marker = {
                        'location': {
                            'Street': account.BillingStreet,
                            'City': account.BillingCity,
                            'PostalCode': account.BillingPostalCode
                        },
                        'title': account.Name,
                        'description': (
                            'Phone: ' + account.Phone +
                            '<br/>' +
                            'Website: ' + account.Website
                        ),
                        'icon': 'standard:location'
                    };
                    mapMarkers.push( marker );
                }
                component.set('v.mapDefaultMarkers', mapMarkers);
                component.set('v.mapMarkers', mapMarkers);
            }
        });
        $A.enqueueAction(action);
    },
    selectItem : function(component, item, itemToAdd){
        let accounts = component.get("v.accountsList");
        if(itemToAdd){
            let mapMarkers = [];
            let marker = {
                'location': {
                    'Street': item.BillingStreet,
                    'City': item.BillingCity,
                    'PostalCode': item.BillingPostalCode
                },
                'title': item.Name,
                'description': (
                    'Phone: ' + item.Phone +
                    '<br/>' +
                    'Website: ' + item.Website
                ),
                'icon': 'standard:location'
            };
            mapMarkers.push(marker);
            component.set('v.mapMarkers', mapMarkers);
        } else {
            let defaultMapMarkers = component.get("v.mapDefaultMarkers");
            component.set('v.mapMarkers', defaultMapMarkers);
        }
    }
})