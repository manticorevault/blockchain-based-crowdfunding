pragma solidity ^0.4.24;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        
        //Passes the necessary arguments to the Constructor
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
        
    }
    
    //Returns a list of all created Campaigns
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        //No need to initialize a reference type (like mapping)
        mapping(address => bool) approvals;
        
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers; 
    uint public approversCount;
    
    modifier restricted() {
        //The sender of this function must be the manager
        require(msg.sender == manager);
        _;
    }
    
    //Takes the minium amount and the creator address from the CampaignFactory
    constructor(uint minimum, address creator) public {
        manager = creator; 
        minimumContribution = minimum;
    }
    
    //Makes it capable of recieving some money
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) 
        public restricted {
            require(approvers[msg.sender]);
            Request memory newRequest = Request({ 
               description: description,
               value: value,
               recipient: recipient,
               complete: false,
               approvalCount: 0
            });
            
            requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        //Require the address to be true 
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    //Returns a summary of statistic related to the campaign
    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}