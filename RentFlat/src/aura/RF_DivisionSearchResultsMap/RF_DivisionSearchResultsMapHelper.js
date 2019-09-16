/**
 * Created by BRITENET on 14.09.2019.
 */
({
    searchDivision : function(component, accounts){
        let mapMarkers = [];
        for (let i = 0; i < accounts.length; i++) {
            console.log("item " + i);
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