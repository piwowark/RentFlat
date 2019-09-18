/**
 * Created by BRITENET on 18.09.2019.
 */

global class RF_NewLeadPostToChatter {

    @InvocableMethod
    public static void postToChatter(List<Lead> newLeads){
        Lead newLead = newLeads[0];
        ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
        ConnectApi.MessageBodyInput messageBodyInput = new ConnectApi.MessageBodyInput();

        messageBodyInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();

        ConnectApi.TextSegmentInput textSegmentInput1 = new ConnectApi.TextSegmentInput();
        textSegmentInput1.text = newLead.CreatedBy.FirstName + ' ' + newLead.CreatedBy.FirstName + 'has created a new Lead - ';
        messageBodyInput.messageSegments.add(textSegmentInput1);

        ConnectApi.EntityLinkSegmentInput entityLinkSegmentInputContact = new ConnectApi.EntityLinkSegmentInput();
        entityLinkSegmentInputContact.entityId = newLead.Id;

        messageBodyInput.messageSegments.add(entityLinkSegmentInputContact);
        ConnectApi.TextSegmentInput textSegmentInput2 = new ConnectApi.TextSegmentInput();

        textSegmentInput2.text = '.';
        messageBodyInput.messageSegments.add(textSegmentInput2);

        feedItemInput.body = messageBodyInput;
        feedItemInput.feedElementType = ConnectApi.FeedElementType.FeedItem;
        feedItemInput.subjectId = '0F92o000000LaxyCAC';
        ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
    }
}