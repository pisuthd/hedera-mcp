import { HederaGetBalanceTool } from "./hbar/hbar_balance"
import { HederaGetAllTokenBalancesTool } from "./hts/get_all_token_balance_tool"
import { HederaGetHtsBalanceTool } from "./hts/get_hts_balance_tool"
import { HederaGetTokenHoldersTool } from "./hts/get_token_holders_tool"
import { HederaAirdropTokenTool } from "./hts/airdrop_token_tool"
import { HederaAssociateTokenTool } from "./hts/associate_token_tool"
import { HederaClaimAirdropTool } from "./hts/claim_airdrop_tool"
import { HederaCreateFungibleTokenTool } from "./hts/create_fungible_token_tool"
import { HederaCreateNonFungibleTokenTool } from "./hts/create_non_fungible_tool"
import { HederaDissociateTokenTool } from "./hts/dissociate_token_tool"
import { HederaGetPendingAirdropTool } from "./hts/get_pending_airdrop_tool"
import { HederaMintFungibleTokenTool } from "./hts/mint_fungible_token_tool"
import { HederaMintNFTTool } from "./hts/mint_non_fungible_tool"
import { HederaRejectTokenTool } from "./hts/reject_token_tool"
import { HederaTransferHbarTool } from "./hts/transfer_native_hbar_token"
import { HederaTransferTokenTool } from "./hts/transfer_token_tool"

export const HederaMcpTools = {
    "hedera_get_hbar_balance": HederaGetBalanceTool,
    "hedera_get_all_token_balances": HederaGetAllTokenBalancesTool,
    "hedera_get_hts_balance": HederaGetHtsBalanceTool,
    "hedera_get_token_holders": HederaGetTokenHoldersTool,
    "hedera_airdrop_token": HederaAirdropTokenTool,
    "hedera_associate_token": HederaAssociateTokenTool,
    "hedera_claim_airdrop": HederaClaimAirdropTool,
    "hedera_create_fungible_token": HederaCreateFungibleTokenTool,
    "hedera_create_non_fungible_token": HederaCreateNonFungibleTokenTool,
    "hedera_dissociate_token" : HederaDissociateTokenTool,
    "hedera_get_pending_airdrop" : HederaGetPendingAirdropTool,
    "hedera_mint_fungible_token" : HederaMintFungibleTokenTool,
    "hedera_mint_nft": HederaMintNFTTool,
    "hedera_reject_token" : HederaRejectTokenTool,
    "hedera_transfer_native_hbar_token" : HederaTransferHbarTool,
    "hedera_transfer_token": HederaTransferTokenTool
}