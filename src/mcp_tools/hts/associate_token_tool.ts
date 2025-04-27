
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';
import { type McpTool } from "../../types";

export const HederaAssociateTokenTool: McpTool = {
    name: "hedera_associate_token",
    description: "Associate a token to an account on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to associate (e.g., '0.0.123456').")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const message = await agent.associateToken(input.tokenId, true).then(response => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}