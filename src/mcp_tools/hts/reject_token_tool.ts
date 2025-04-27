
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';
import { TokenId } from "@hashgraph/sdk";

export const HederaRejectTokenTool = {
    name: "hedera_reject_token",
    description: "Reject a token from an account on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to reject (e.g., '0.0.123456').")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const tokenId = TokenId.fromString(input.tokenId);  
        const message = await agent.rejectToken(tokenId, true).then(response => response.getStringifiedResponse())

        return JSON.parse(message)
    },
}