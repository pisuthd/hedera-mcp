#!/usr/bin/env node

import { getHederaConfig, validateEnvironment } from './config'; 
import { HederaAgentKit } from 'hedera-agent-kit';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { PrivateKey } from '@hashgraph/sdk';
import { HederaMcpTools } from './mcp_tools';

/**
 * Creates an MCP server
 */
function createMcpServer(
  hederaAgentKit: HederaAgentKit
) { 

  // Create MCP server instance
  const server = new McpServer({
    name: "hedera-mcp",
    version: "0.1.0"
  });

  for (const [_key, tool] of Object.entries(HederaMcpTools)) {

    server.tool(tool.name, tool.description, tool.schema, async (params: any): Promise<any> => {
      try {

        // Execute the handler with the params directly
        const result = await tool.handler(hederaAgentKit, params);

        // Format the result as MCP tool response
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      } catch (error) {
        console.error("error", error);
        // Handle errors in MCP format
        return {
          isError: true,
          content: [
            {
              type: "text",
              text:
                error instanceof Error
                  ? error.message
                  : "Unknown error occurred",
            },
          ],
        };
      }
    })

  }


  return server;
}

async function main() {
  try {

    console.error('before validateEnvironment...')

    // Validate environment before proceeding
    validateEnvironment();
 
    // Get Hedera configuration
    const config = getHederaConfig();
 
    const privateKey = PrivateKey.fromStringECDSA(config.privateKey)

    // @ts-ignore
    const hederaAgentKit = new HederaAgentKit(
      config.accountId,
      privateKey.toString(),
      privateKey.publicKey.toStringDer(),
      config.network
    ); 

    const server = createMcpServer(hederaAgentKit);
    const transport = new StdioServerTransport();
    await server.connect(transport);
 
    console.error("Hedera MCP server is running...");
  } catch (error) {
    console.error('Error starting MCP server:', error);
    process.exit(1);
  }
}
 

main()