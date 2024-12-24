/**
* @File Name : EmailTemplateController.cls
* @Description :
* @Author :
* @Last Modified By :
* @Last Modified On : August 22, 2024
* @Modification Log :
*==============================================================================
* Ver | Date | Author | Modification
*==============================================================================
* 1.0 | August 22, 2024 |   | Initial Version
**/

public class EmailTemplateController {
	@AuraEnabled
	Public static String getMetaData(){
		Map<String, Quote_Email_Template__mdt> mapEd = Quote_Email_Template__mdt.getAll();
		for(String nameEmailDomain : mapEd.keySet()){
			System.debug('nameEmailDomain >>>  '+ mapEd.get(nameEmailDomain));
		}
		return mapEd.get('Quote_Broker_Template').Body__c;
	}
}