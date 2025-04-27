
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit'; 

export const HederaTransferHbarTool = {
    name: "hedera_transfer_native_hbar_token",
    description: "Transfer HBAR to an account on Hedera",
    schema: {
        toAccountId: z.string()
            .describe("The account ID to transfer to (e.g., '0.0.789012')."),
        amount: z.number()
            .describe("The amount of HBAR to transfer (e.g., 100).")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {
 
        const message = await agent.transferHbar(input.toAccountId, input.amount, true).then(response => response.getStringifiedResponse());

        return JSON.parse(message)
    },
}