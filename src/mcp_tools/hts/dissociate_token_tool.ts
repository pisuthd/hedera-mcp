
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';

export const HederaDissociateTokenTool = {
    name: "hedera_dissociate_token",
    description: "Dissociate a token from an account on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to dissociate (e.g., '0.0.123456').")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const message = await agent.dissociateToken(input.tokenId, true).then(response => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}