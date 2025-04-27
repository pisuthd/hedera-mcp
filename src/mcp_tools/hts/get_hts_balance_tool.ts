
import { z } from "zod";
import { HederaAgentKit, HederaNetworkType } from 'hedera-agent-kit';
import { getHederaConfig } from "../../config";
import { type McpTool } from "../../types";

export const HederaGetHtsBalanceTool: McpTool = {
    name: "hedera_get_hts_balance",
    description: "Retrieves the balance of a specified Hedera Token Service (HTS) token for a given account in base unit. If an account ID is provided, it returns the balance of that account. If no account ID is given, it returns the balance for the connected account.",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to check the balance for (e.g., '0.0.112233')."),
        accountId: z.string()
            .optional()
            .describe("The Hedera account ID to check the balance for (e.g., '0.0.789012'). If omitted, the tool will return the balance for the connected account.")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const config = getHederaConfig();

        try {
            console.log('hedera_get_hts_balance tool has been called')
 
            if (!input.tokenId) {
                throw new Error("tokenId is required");
            }

            const balance = await agent.getHtsBalance(
                input.tokenId,
                config.network as HederaNetworkType,
                input?.accountId
            )

            const details = await agent.getHtsTokenDetails(
                input?.tokenId,
                config.network as HederaNetworkType,
            )

            return  {
                status: "success",
                balance: balance, // in base unit
                unit: details.symbol,
                decimals: details.decimals
            }
        } catch (error: any) {
            return {
                status: "error",
                message: error.message,
                code: error.code || "UNKNOWN_ERROR",
            }
        }
    },
}