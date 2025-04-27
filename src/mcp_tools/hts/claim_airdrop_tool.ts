
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';
import { type McpTool } from "../../types";
import { AccountId, PendingAirdropId, TokenId } from "@hashgraph/sdk";

export const HederaClaimAirdropTool: McpTool = {
    name: "hedera_claim_airdrop",
    description: "Claim an airdrop for a token on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to claim the airdrop for (e.g., '0.0.123456')."),
        senderAccountId: z.string()
            .describe("The account ID of the sender (e.g., '0.0.789012').")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const airdropId = new PendingAirdropId({
            tokenId: TokenId.fromString(input.tokenId),
            senderId: AccountId.fromString(input.senderAccountId),
            receiverId: agent.client.operatorAccountId!
        });

        const message = await agent.claimAirdrop(airdropId, true).then(response => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}