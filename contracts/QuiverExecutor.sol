// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract QuiverExecutor {

    address public owner;

    event TradeExecuted(
        address indexed user,
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 timestamp
    );

    constructor() {
        owner = msg.sender;
    }

    function executeTrade(
        address tokenIn,
        address tokenOut,
        uint256 amountIn
    ) external {
        emit TradeExecuted(
            msg.sender,
            tokenIn,
            tokenOut,
            amountIn,
            block.timestamp
        );
    }
}
