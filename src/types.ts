import { z } from "zod";
import { HederaAgentKit } from 'hedera-agent-kit';

export interface HederaConfig {
    accountId: string;
    privateKey: string;
    network: 'testnet' | 'mainnet';
}
  
export interface McpTool {
  name: string;
  description: string;
  schema: any;
  handler: any;
}
