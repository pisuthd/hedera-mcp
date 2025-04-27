
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';
import { toBaseUnit } from "../../utils"

export const HederaTransferTokenTool = {
    name: "hedera_transfer_token",
    description: "Transfer fungible tokens on Hedera",
    schema: {
        tokenId: z.string()
            .describe("The ID of the token to transfer (e.g., '0.0.123456')."),
        toAccountId: z.string()
            .describe("The account ID to transfer to (e.g., '0.0.789012')."),
        amount: z.number()
            .describe("The amount of tokens to transfer in base unit (e.g., 100).")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {

        const amount = await toBaseUnit(agent, input.tokenId, input.amount, agent.network);
        const message = await agent.transferToken(input.tokenId, input.toAccountId, Number(amount.toString()), true).then(response => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}