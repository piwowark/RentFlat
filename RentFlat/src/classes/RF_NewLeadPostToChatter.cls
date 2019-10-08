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

        ConnectApi.EntityLinkSegmentInput entityLinkSegmentInputOwnerId = new ConnectApi.EntityLinkSegmentInput();
        entityLinkSegmentInputOwnerId.entityId = newLead.OwnerId;
        messageBodyInput.messageSegments.add(entityLinkSegmentInputOwnerId);

        ConnectApi.TextSegmentInput textSegmentInput1 = new ConnectApi.TextSegmentInput();
        textSegmentInput1.text = ' has created a new Lead - ';
        messageBodyInput.messageSegments.add(textSegmentInput1);

        ConnectApi.EntityLinkSegmentInput entityLinkSegmentInputLeadId = new ConnectApi.EntityLinkSegmentInput();
        entityLinkSegmentInputLeadId.entityId = newLead.Id;
        messageBodyInput.messageSegments.add(entityLinkSegmentInputLeadId);

        ConnectApi.TextSegmentInput textSegmentInput2 = new ConnectApi.TextSegmentInput();
        textSegmentInput2.text = '.';
        messageBodyInput.messageSegments.add(textSegmentInput2);

        feedItemInput.body = messageBodyInput;
        feedItemInput.feedElementType = ConnectApi.FeedElementType.FeedItem;
        feedItemInput.subjectId = '0F92o000000LaxyCAC';
        ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(Network.getNetworkId(), feedItemInput);
    }
}