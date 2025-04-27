
import { z } from "zod";
import { HederaAgentKit, HederaNetworkType } from 'hedera-agent-kit';
import { getHederaConfig } from "../../config";

export const HederaGetPendingAirdropTool = {
    name: "hedera_get_pending_airdrop",
    description: "Get the pending airdrops for the given account on Hedera",
    schema: {
        accountId: z.string()
            .describe("The account ID to get the pending airdrop for (e.g., '0.0.789012').")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const config = getHederaConfig();

        const airdrop = await agent.getPendingAirdrops(
            input.accountId,
            config.network as HederaNetworkType
        );

        return {
            status: "success",
            message: "Pending airdrop retrieved",
            airdrop: airdrop
        }
    },
}