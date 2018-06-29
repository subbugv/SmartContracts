pragma solidity ^0.4.24;
contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() public {
        // 'msg' is a global variable, inbuild variable in the solidity
        manager = msg.sender;
    }
    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now,players));
        // return uint(now);
    }
    function pickWinner() public {
        require(msg.sender == manager);
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    function getPlayers() public view returns (address[]) {
        return players;
    }
}



