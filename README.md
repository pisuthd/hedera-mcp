# Hedera MCP

![NPM Version](https://img.shields.io/npm/v/hedera-mcp)

**Hedera MCP** is an MCP server implementation for the Hedera blockchain, built using the Hedera Agent Kit. It allows AI models that support the Model Context Protocol (MCP) to interact with the Hedera network and you can then perform a wide range of blockchain operations without needing to write code or understand technical details.

## Features
- 15+ MCP tools covering account operations, token operations, and distribution, ported from Langchain's Hedera Agent Kit.

- Non-custodial setup with no private keys exposed on any server. All transaction signing occurs securely on the client side.

- Supports MCP-compatible clients like Claude Desktop. Many more are being developed.

- Together with other MCP tools like the `filesystem` `github`, this allows AI to access your directory and read before interacting with Web3

## Using with Claude Desktop

1. Install Claude Desktop if you haven't already
2. Open Claude Desktop settings
3. Add the Hedera MCP server to your configuration:

```
{
  "mcpServers": {
    "hedera": {
      "command": "npx",
      "args": [
        "-y",
        "hedera-mcp",
        "--hedera_account_id=0.0.XXXXX",
        "--hedera_private_key=YOUR_PRIVATE_KEY",
        "--hedera_network=testnet"
      ],
      "disabled": false
    }
  }
}
```

Replace `0.0.XXXXX` with your actual Hedera account ID and `YOUR_PRIVATE_KEY` with your actual private key. You can use `testnet` or `mainnet` for the network parameter.

You can also run it standalone by:
```
npx hedera-mcp
```

## Background

Most Web3 Agent Kits today are based on Langchain and require developers to create separate applications. However, AI models evolve quickly, and once a developer releases an app, the model often becomes outdated or obsolete, leading to applications reaching end-of-life within just a few months.

Model Context Protocol (MCP), introduced by Claude AI in late 2024, has quickly become popular today. It solves this issue by integrating directly with AI interfaces, allowing users to easily switch to the latest models and interact with Web3 through standardized tools.

## Available Tools

The Hedera MCP server provides the following tools to Claude and other AI assistants:

1. `hedera_get_hbar_balance` - Retrieves the HBAR balance for an account
2. `hedera_get_all_token_balances` - Gets all token balances for an account
3. `hedera_get_hts_balance` - Gets the balance of a specific token for an account
4. `hedera_get_token_holders` - Retrieves holders of a specific token
5. `hedera_airdrop_token` - Creates a token airdrop to multiple accounts
6. `hedera_associate_token` - Associates a token with an account
7. `hedera_claim_airdrop` - Claims tokens from an airdrop
8. `hedera_create_fungible_token` - Creates a new fungible token
9. `hedera_create_non_fungible_token` - Creates a new non-fungible token
10. `hedera_dissociate_token` - Dissociates a token from an account
11. `hedera_get_pending_airdrop` - Gets pending airdrops for an account
12. `hedera_mint_fungible_token` - Mints additional fungible tokens
13. `hedera_mint_nft` - Mints new non-fungible tokens
14. `hedera_reject_token` - Rejects a token sent to an account
15. `hedera_transfer_native_hbar_token` - Transfers HBAR to another account
16. `hedera_transfer_token` - Transfers tokens to another account

## Troubleshooting
If you encounter issues:

- Verify your account ID and private key are correct
- Check your account has sufficient HBAR balance
- Ensure your network selection (testnet/mainnet) is correct
- Restart Claude Desktop after changing MCP configurations
- Check console output for detailed error messages

## Deployment

TBD

## License
This project is licensed under the MIT License.


