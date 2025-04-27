
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';

export const HederaCreateFungibleTokenTool = {
    name: "hedera_create_fungible_token",
    description: "Create a fungible token on Hedera",
    schema: {
        name: z.string().describe("The name of the token e.g. My Token"),
        symbol: z.string().describe("The symbol of the token e.g. MT"),
        decimals: z.number().describe("The amount of decimals of the token"),
        initialSupply: z.number().optional().describe("The initial supply of the token, given in base unit"),
        isSupplyKey: z.boolean().optional().default(false).describe("Decides whether supply key should be set"),
        isAdminKey: z.boolean().optional().default(false).describe("Decides whether admin key should be set"),
        isMetadataKey: z.boolean().optional().default(false).describe("Decides whether metadata key should be set"),
        memo: z.string().optional().default("").describe("Containing memo associated with this token"),
        tokenMetadata: z.string().optional().default("").describe("Containing metadata associated with this token")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const options = {
            name: input.name,
            symbol: input.symbol,
            decimals: input.decimals,
            initialSupply: input.initialSupply, // given in base unit
            isSupplyKey: input.isSupplyKey,
            isAdminKey: input.isAdminKey,
            isMetadataKey: input.isMetadataKey,
            memo: input.memo,
            tokenMetadata: new TextEncoder().encode(input.tokenMetadata), // encoding to Uint8Array
        }

        const message = await agent.createFT(options, true).then((response: any) => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}