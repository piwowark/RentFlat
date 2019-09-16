/**
 * Created by BRITENET on 16.09.2019.
 */

public with sharing class RF_Utils {
    public static String getSettingValue(String csName){
        RF_Setting__c csItem = RF_Setting__c.getInstance(csName);
        if(csItem == null){
            return null;
        }
        return csItem.Value__c;
    }
}