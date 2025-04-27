
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';

export const HederaMintFungibleTokenTool = {
    name: "hedera_mint_fungible_token",
    description: "Mint fungible tokens to an account on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to mint (e.g., '0.0.123456')."),
        amount: z.number()
            .describe("The amount of tokens to mint (e.g., 100).")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {
 
        const message = await agent.mintToken(input.tokenId, input.amount, true).then(response => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}