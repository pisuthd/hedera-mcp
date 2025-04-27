
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';
import { type McpTool } from "../../types";

export const HederaAirdropTokenTool: McpTool = {
    name: "hedera_airdrop_token",
    description: "Airdrop fungible tokens to multiple accounts on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to airdrop (e.g., '0.0.123456')."),
        recipients: z.array(
            z.object({
                accountId: z.string()
                    .describe("The account ID to send tokens to (e.g., '0.0.789012')"),
                amount: z.number()
                    .describe("The amount of tokens to send (e.g., 100)")
            })
        ).describe("Array of recipient accounts and token amounts")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const message = (await agent.airdropToken(input.tokenId, input.recipients, true).then(response => response.getStringifiedResponse()))

        return JSON.parse(message)
    },
}