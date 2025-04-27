
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';

export const HederaCreateNonFungibleTokenTool = {
    name: "hedera_create_non_fungible_token",
    description: "Create a non-fungible (NFT) token on Hedera",
    schema: {
        name: z.string()
            .describe("The name of the token (e.g., 'My Token')."),
        symbol: z.string()
            .describe("The symbol of the token (e.g., 'MT')."),
        maxSupply: z.number()
            .optional()
            .describe("The maximum supply of the token. If not provided, this field will be omitted."),
        isMetadataKey: z.boolean()
            .optional()
            .default(false)
            .describe("Determines whether a metadata key should be set."),
        isAdminKey: z.boolean()
            .optional()
            .default(false)
            .describe("Determines whether an admin key should be set."),
        memo: z.string()
            .optional()
            .default("")
            .describe("Containing a memo associated with the token."),
        tokenMetadata: z.string()
            .optional()
            .default("")
            .describe("Containing metadata associated with the token.")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const options = {
            name: input.name,
            symbol: input.symbol,
            maxSupply: input.maxSupply,
            isAdminKey: input.isAdminKey,
            isMetadataKey: input.isMetadataKey,
            memo: input.memo,
            tokenMetadata: new TextEncoder().encode(input.tokenMetadata),
        };

        const message = await agent.createNFT(options, true).then(response => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}