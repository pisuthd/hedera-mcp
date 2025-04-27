import { HederaGetBalanceTool } from "./hbar/hbar_balance"
import { HederaGetAllTokenBalancesTool } from "./hts/get_all_token_balance_tool"
import { HederaGetHtsBalanceTool } from "./hts/get_hts_balance_tool"
import { HederaGetTokenHoldersTool } from "./hts/get_token_holders_tool"

export const HederaMcpTools = {
    "hedera_get_hbar_balance": HederaGetBalanceTool,
    "hedera_get_all_token_balances" : HederaGetAllTokenBalancesTool,
    "hedera_get_hts_balance": HederaGetHtsBalanceTool,
    "hedera_get_token_holders": HederaGetTokenHoldersTool
}