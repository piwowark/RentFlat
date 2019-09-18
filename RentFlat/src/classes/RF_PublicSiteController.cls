/**
 * Created by BRITENET on 17.09.2019.
 */

public with sharing class RF_PublicSiteController {
    public Boolean isFromOfferPoll {
        get{
            return !ApexPages.currentPage().getParameters().isEmpty();
        }
    }

    public String defaultLeadOwnerId{
        get{
            return RF_Utils.getSettingValue('RF_DefaultLeadOwnerId');
        }
    }
}