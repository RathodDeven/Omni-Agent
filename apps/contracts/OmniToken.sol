// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title OmniToken
 * @dev A simple ERC20 token with a fixed supply of 1 billion.
 */
contract OmniToken is ERC20 {
    uint256 public maxSupply;

    constructor() ERC20("Omni Token", "OMNI") {
        // 1 billion tokens, adjusted for 18 decimals
        maxSupply = 1_000_000_000 * (10 ** decimals());
        _mint(msg.sender, maxSupply);
    }
}
