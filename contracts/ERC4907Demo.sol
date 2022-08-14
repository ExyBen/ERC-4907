// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0; 

import "./ERC4907.sol";

contract ERC4907Demo is ERC4907 {
    uint256 public maxSupply = 9999;

    constructor(string memory name_, string memory symbol_)
     ERC4907(name_,symbol_)
     {         
     }

    function mint() public {
        uint256 supply = totalSupply();
        address sender = _msgSender();
        require(supply + 1 <= maxSupply);
        _mint(sender, supply + 1);
    }

} 







