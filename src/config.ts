#!/usr/bin/env node

import * as dotenv from 'dotenv';
import { HederaConfig } from './types';

dotenv.config();

const getArgs = () =>
    process.argv.reduce((args: any, arg: any) => {
        // long arg
        if (arg.slice(0, 2) === "--") {
            const longArg = arg.split("=");
            const longArgFlag = longArg[0].slice(2);
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;
        }
        // flags
        else if (arg[0] === "-") {
            const flags = arg.slice(1).split("");
            flags.forEach((flag: any) => {
                args[flag] = true;
            });
        }
        return args;
    }, {});

export function validateEnvironment(): void {

    const args = getArgs();

    const requiredEnvVars = {
        HEDERA_ACCOUNT_ID: args?.hedera_account_id || process.env.HEDERA_ACCOUNT_ID,
        HEDERA_PRIVATE_KEY: args?.hedera_private_key || process.env.HEDERA_PRIVATE_KEY,
        HEDERA_NETWORK: args?.hedera_network || process.env.HEDERA_NETWORK,
    };

    const missingVars = Object.entries(requiredEnvVars)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

    if (missingVars.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingVars.join(', ')}`
        );
    }
}

export function getHederaConfig(): HederaConfig {
    validateEnvironment();

    const args = getArgs();

    const currentEnv = {
        HEDERA_ACCOUNT_ID: args?.hedera_account_id || process.env.HEDERA_ACCOUNT_ID,
        HEDERA_PRIVATE_KEY: args?.hedera_private_key || process.env.HEDERA_PRIVATE_KEY,
        HEDERA_NETWORK: args?.hedera_network || process.env.HEDERA_NETWORK,
    };

    return {
        accountId: currentEnv.HEDERA_ACCOUNT_ID!,
        privateKey: currentEnv.HEDERA_PRIVATE_KEY!,
        network: (currentEnv.HEDERA_NETWORK || 'testnet') as 'testnet' | 'mainnet',
    };
}