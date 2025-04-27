import BigNumber from "bignumber.js";
import { HederaAgentKit, HederaNetworkType } from 'hedera-agent-kit';

export function fromDisplayToBaseUnit(
    displayBalance: number,
    decimals: number
): number {
    return displayBalance * 10 ** decimals;
}

export function fromBaseToDisplayUnit(baseBalance: number, decimals: number) {
    const decimalsBigNumber = new BigNumber(decimals);
    const divisor = new BigNumber(10).pow(decimalsBigNumber);

    const bigValue = BigNumber.isBigNumber(baseBalance)
        ? baseBalance
        : new BigNumber(baseBalance);

    return bigValue.dividedBy(divisor);
}

export const toBaseUnit = async (
    agent: HederaAgentKit,
    tokenId: string,
    displayValue: BigNumber | number,
    networkType: HederaNetworkType
): Promise<BigNumber> => {
    try {
        const decimalsString = await getHTSDecimals(agent, tokenId, networkType);
        const decimals = new BigNumber(decimalsString);
        const multiplier = new BigNumber(10).pow(decimals);

        const bigDisplayValue = BigNumber.isBigNumber(displayValue)
            ? displayValue
            : new BigNumber(displayValue);

        return bigDisplayValue.multipliedBy(multiplier);
    } catch (error) {
        console.error("Failed to convert display unit to base unit:", error);
        return new BigNumber(0);
    }
};


export const getHTSDecimals = async (
    agent: HederaAgentKit,
    tokenId: string,
    networkType: HederaNetworkType
): Promise<string> => {
    return (await agent.getHtsTokenDetails(tokenId, networkType)).decimals;
};

export const getHtsTokenDetails = async (agent: HederaAgentKit, tokenId: string, networkType: HederaNetworkType) => {
    return agent.getHtsTokenDetails(tokenId, networkType);
}