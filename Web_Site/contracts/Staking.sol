// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "Web_Site/client/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "Web_Site/client/node_modules/@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "Web_Site/client/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";


// contract Staking is ReentrancyGuard{
//   using SafeMath for uint256;
//   IERC20 public s_stakingToken;
//   IERC20 public s_rewardToken;

//   uint public constant REWARD_RATE=1e18;
//   uint private totalStakedTokens;
//   uint public rewardPerTokenStored;
//   uint public lastUpdateTime;

//   mapping(address=>uint) public stakedBalance;
//   mapping(address=>uint) public rewards;
//   mapping(address=>uint) public userRewardPerTokenPaid;

//   event Staked(address indexed user, uint256 indexed amount);
//   event Withdrawn(address indexed user, uint256 indexed amount);
//   event RewardsClaimed(address indexed user, uint256 indexed amount);
  
//   constructor(address stakingToken,address rewardToken){
//     s_stakingToken=IERC20(stakingToken);
//     s_rewardToken=IERC20(rewardToken);
//   }

//   function rewardPerToken() public view returns(uint){
//     if(totalStakedTokens==0){
//         return rewardPerTokenStored;
//     }
//     uint totalTime = block.timestamp.sub(lastUpdateTime);
//     uint totalRewards = REWARD_RATE.mul(totalTime); 
//     return rewardPerTokenStored.add(totalRewards.mul(1e18).div(totalStakedTokens));
//   }

//   function earned(address account) public view returns(uint){
//     return stakedBalance[account].mul(rewardPerToken().sub(userRewardPerTokenPaid[account])).div(1e18).add(rewards[account]);
//   }

//   modifier updateReward(address account){
//     rewardPerTokenStored=rewardPerToken();
//     lastUpdateTime=block.timestamp;
//     rewards[account]=earned(account);
//     userRewardPerTokenPaid[account]=rewardPerTokenStored;
//     _;
//   }

//   function stake(uint amount) external nonReentrant updateReward(msg.sender){
//     require(amount>0,"Amount must be greater than zero");
//     totalStakedTokens=totalStakedTokens.add(amount);
//     stakedBalance[msg.sender]=stakedBalance[msg.sender].add(amount);
//     emit Staked(msg.sender,amount);
//     bool success = s_stakingToken.transferFrom(msg.sender,address(this),amount);
//     require(success,"Transfer Failed");
//   }
//   function withdrawStakedTokens(uint amount) external nonReentrant updateReward(msg.sender)  {
//     require(amount>0,"Amount must be greater than zero");
//     require(stakedBalance[msg.sender]>=amount,"Staked amount not enough");
//     totalStakedTokens=totalStakedTokens.sub(amount);
//     stakedBalance[msg.sender]=stakedBalance[msg.sender].sub(amount);
//     emit Withdrawn(msg.sender, amount);(msg.sender,amount);
//     bool success = s_stakingToken.transfer(msg.sender,amount);
//     require(success,"Transfer Failed");
//   }

//   function getReward() external nonReentrant updateReward(msg.sender){
//      uint reward = rewards[msg.sender];
//      require(reward>0,"No rewards to claim");
//      rewards[msg.sender]=0;
//      emit RewardsClaimed(msg.sender, reward);
//      bool success = s_rewardToken.transfer(msg.sender,reward);
//      require(success,"Transfer Failed");
//   }
// }
contract Staking is ReentrancyGuard {
    using SafeMath for uint256;

    IERC20 public s_stakingToken;
    IERC20 public s_rewardToken;

    uint256 public constant REWARD_RATE = 1e18;
    uint256 private totalStakedTokens;
    uint256 public rewardPerTokenStored;
    uint256 public lastUpdateTime;

    mapping(address => uint256) public stakedBalance;
    mapping(address => uint256) public rewards;
    mapping(address => uint256) public userRewardPerTokenPaid;

    event Staked(address indexed user, uint256 indexed amount);
    event Withdrawn(address indexed user, uint256 indexed amount);
    event RewardsClaimed(address indexed user, uint256 indexed amount);

    constructor(address stakingToken, address rewardToken) {
        s_stakingToken = IERC20(stakingToken);
        s_rewardToken = IERC20(rewardToken);
        lastUpdateTime = block.timestamp; // Initialize `lastUpdateTime` to the contract deployment time
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalStakedTokens == 0) {
            return rewardPerTokenStored;
        }
        uint256 timeElapsed = block.timestamp.sub(lastUpdateTime);
        uint256 rewardsAccrued = REWARD_RATE.mul(timeElapsed);
        return rewardPerTokenStored.add(rewardsAccrued.mul(1e18).div(totalStakedTokens));
    }

    function earned(address account) public view returns (uint256) {
        return stakedBalance[account]
            .mul(rewardPerToken().sub(userRewardPerTokenPaid[account]))
            .div(1e18)
            .add(rewards[account]);
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;
        rewards[account] = earned(account);
        userRewardPerTokenPaid[account] = rewardPerTokenStored;
        _;
    }

    function stake(uint256 amount) external nonReentrant updateReward(msg.sender) {
        require(amount > 0, "Amount must be greater than zero");
        totalStakedTokens = totalStakedTokens.add(amount);
        stakedBalance[msg.sender] = stakedBalance[msg.sender].add(amount);
        emit Staked(msg.sender, amount);

        bool success = s_stakingToken.transferFrom(msg.sender, address(this), amount);
        require(success, "Transfer Failed");
    }

    function withdrawStakedTokens(uint256 amount) external nonReentrant updateReward(msg.sender) {
        require(amount > 0, "Amount must be greater than zero");
        require(stakedBalance[msg.sender] >= amount, "Staked amount not enough");

        totalStakedTokens = totalStakedTokens.sub(amount);
        stakedBalance[msg.sender] = stakedBalance[msg.sender].sub(amount);
        emit Withdrawn(msg.sender, amount);

        bool success = s_stakingToken.transfer(msg.sender, amount);
        require(success, "Transfer Failed");
    }

    function getReward() external nonReentrant updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards to claim");
        
        rewards[msg.sender] = 0;
        emit RewardsClaimed(msg.sender, reward);

        bool success = s_rewardToken.transfer(msg.sender, reward);
        require(success, "Transfer Failed");
    }
}
