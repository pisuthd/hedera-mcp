
import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';
import { type McpTool } from "../../types";

export const HederaGetBalanceTool: McpTool = {
    name: "hedera_get_hbar_balance",
    description: "Retrieves the HBAR balance of a specified Hedera account. If an account ID is provided, it returns the balance of that account. If no input is given, it returns the balance of the connected account.",
    schema: {
        accountId: z.string().optional().describe("The Hedera account ID to check the balance for (e.g., '0.0.789012'). If omitted, the tool will return the balance of the connected account.")
    },
    handler: async (agent: HederaAgentKit, input: Record<string, any>) => {
        const balance = await agent.getHbarBalance(input?.accountId);
        return {
            status: "success",
            balance: balance,
            unit: "HBAR"
        };
    },
}