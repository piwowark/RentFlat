/**
 * Created by BRITENET on 16.09.2019.
 */

public with sharing class RF_DivisionSearchHandler {
    public static List<Account> searchDivisions(Account dataToSearch){
        List<Account> divisions = new List<Account>();
        String recordTypeId = RF_Utils.getSettingValue('RF_DivisionRecordTypeId');
        String queryString = 'select Id, Name, AccountNumber, AccountSource, Active__c, ' +
                'AnnualRevenue, BillingCity, BillingCountry, BillingPostalCode, BillingState, BillingStreet, ' +
                'CleanStatus, Description, ' +
                'Fax, Industry, Jigsaw, JigsawCompanyId, ' +
                'LastModifiedDate, MasterRecordId, NaicsCode, NaicsDesc, NumberOfEmployees, NumberofLocations__c,' +
                'OwnerId, Ownership, ParentId, Phone, Rating, RecordTypeId, ShippingCity, ShippingCountry, ShippingPostalCode, ' +
                'ShippingState, ShippingStreet, Site, ' +
                'Tradestyle, Type, UpsellOpportunity__c, Website, YearStarted ' +
                'from Account ' +
                'where RecordTypeId = \'' + recordTypeId + '\'';
        String accountName = dataToSearch.Name;
        String accountNumber = dataToSearch.AccountNumber;
        String phone = dataToSearch.Phone;
        if(!String.isBlank(accountName)){
            accountName = String.escapeSingleQuotes(accountName);
            queryString += ' and Name like \'' + accountName + '%\'';
        }
        if(!String.isBlank(accountNumber)){
            accountNumber = String.escapeSingleQuotes(accountNumber);
            queryString += ' and AccountNumber like \'' + accountNumber + '%\'';
        }
        if(!String.isBlank(phone)){
            phone = String.escapeSingleQuotes(phone);
            queryString += ' and Phone like \'' + phone + '%\'';
        }
        divisions = Database.query(queryString);
        return divisions;
    }
}