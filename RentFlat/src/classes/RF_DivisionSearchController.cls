public class RF_DivisionSearchController {
	@AuraEnabled
    public static List<Account> searchDivisions(Account dataToSearch){
        return RF_DivisionSearchHandler.searchDivisions(dataToSearch);
    }

    @AuraEnabled
    public static void deleteDivision(Account dataToDelete){
        List<Account> divisions = new List<Account>();
        divisions = [select Id from Account where Id = :dataToDelete.Id];
        if(!divisions.isEmpty()){
            delete divisions[0];
        }
    }
}