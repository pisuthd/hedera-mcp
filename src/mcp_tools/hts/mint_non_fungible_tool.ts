
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';

export const HederaMintNFTTool = {
    name: "hedera_mint_nft",
    description: "Mint an NFT to an account on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to mint (e.g., '0.0.123456')."),
        tokenMetadata: z.string()
            .describe("The metadata of the NFT (e.g., 'My NFT').")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const message = await agent.mintNFTToken(input.tokenId, new TextEncoder().encode(input.tokenMetadata), true).then(response => response.getStringifiedResponse())

        return JSON.parse(message)
    },
}