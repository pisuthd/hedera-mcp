
import { z } from "zod";
import { HederaAgentKit, HederaNetworkType } from 'hedera-agent-kit';
import { getHederaConfig } from "../../config";
import { type McpTool } from "../../types";

export const HederaGetAllTokenBalancesTool: McpTool = {
    name: "hedera_get_all_token_balances",
    description: "Get all token balances for an account on Hedera.",
    schema: {
        accountId: z.string().optional().describe("The Hedera account ID to check the token balances for (e.g., '0.0.789012'). If omitted, the tool will return the token balances of the connected account.")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {
       
        const config = getHederaConfig();

        // returns both display and base unit balances
        const balances = await agent.getAllTokensBalances(
            config.network as HederaNetworkType,
            input?.accountId
        );

        return {
            status: "success",
            balances
        };
    },
}