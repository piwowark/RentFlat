<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Send_Email_Case_Escalate_Notification</fullName>
        <description>Send Email Case Escalate Notification</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/SupportEscalatedCaseNotification</template>
    </alerts>
    <alerts>
        <fullName>Send_Email_With_Case_Escalate_Notification</fullName>
        <description>Send Email With Case Escalate Notification</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/SupportEscalatedCaseNotification</template>
    </alerts>
    <alerts>
        <fullName>Send_email_with_escalation_notification</fullName>
        <description>Send email with escalation notification</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/SupportEscalatedCaseNotification</template>
    </alerts>
    <fieldUpdates>
        <fullName>Check_Escalation</fullName>
        <field>Check_Escalation__c</field>
        <literalValue>1</literalValue>
        <name>Check Escalation</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Reassign_Case_Owner</fullName>
        <field>OwnerId</field>
        <lookupValue>kamil.piwowar96@britenet.com.pl</lookupValue>
        <lookupValueType>User</lookupValueType>
        <name>Reassign Case Owner</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Reassign_Owner</fullName>
        <field>OwnerId</field>
        <lookupValue>kamil.piwowar96@britenet.com.pl</lookupValue>
        <lookupValueType>User</lookupValueType>
        <name>Reassign Owner</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Test_Update</fullName>
        <field>OwnerId</field>
        <lookupValue>kamil.piwowar96@britenet.com.pl</lookupValue>
        <lookupValueType>User</lookupValueType>
        <name>Test Update</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>LookupValue</operation>
        <protected>false</protected>
    </fieldUpdates>
</Workflow>
