
import { z } from "zod";
import { HederaAgentKit, HederaNetworkType } from 'hedera-agent-kit';
// import { getHederaConfig } from "../../config";
import { toBaseUnit , fromBaseToDisplayUnit } from "../../utils"
import { type McpTool } from "../../types";

export const HederaGetTokenHoldersTool: McpTool = {
    name: "hedera_get_token_holders",
    description: "Get the holders of a token on Hedera. Optionally filter by a minimum balance threshold.",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to get the holders for (e.g., '0.0.123456')."),
        threshold: z.number()
            .optional()
            .describe("The minimum balance threshold to filter token holders (e.g., 100). Only holders with at least this amount will be included.")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        // const config = getHederaConfig();

        try {
            console.log('hedera_get_token_holders tool has been called');
 
            const threshold = input.threshold ?
                Number((await toBaseUnit(
                    agent,
                    input.tokenId as string,
                    input.threshold,
                    agent.network
                )).toString()) : undefined;

            // returns balances in base unit
            const holders = await agent.getTokenHolders(
                input.tokenId,
                agent.network,
                threshold // given in base unit, optionals
            );

            const formattedHolders = holders.map((holder) => ({
                account: holder.account,
                balance: fromBaseToDisplayUnit(holder.balance, holder.decimals).toString(),
                decimals: holder.decimals
            }));

            return {
                status: "success",
                message: "Token holders retrieved",
                holders: formattedHolders
            };
        } catch (error: any) {
            return {
                status: "error",
                message: error.message,
                code: error.code || "UNKNOWN_ERROR",
            }
        }
    },
}