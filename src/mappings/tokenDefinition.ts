import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(5)

    // Add WHPB
    let tokenWHPB = new TokenDefinition(
      Address.fromString('0xbe05ac1fb417c9ea435b37a9cecd39bc70359d31'),
      'WHPB',
      'WHPB Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenWHPB)

    // Add ETH
    let tokenETH = new TokenDefinition(
      Address.fromString('0x0f63352df611350201c419de9399a67e50d4b820'),
      'ETH',
      'ETH',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenETH)

    // Add OLD USDT
    let tokenUSDTOLD = new TokenDefinition(
      Address.fromString('0xe78984541a634c52c760fbf97ca3f8e7d8f04c85'),
      'USDT-OLD',
      'USDT-OLD',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenUSDTOLD)

    // Add HPD
    let tokenHPD = new TokenDefinition(
      Address.fromString('0x6383f770f1eec68e80ac0c5527be71a11b4d182c'),
      'HPD',
      'HPD',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenHPD)

    // Add ESR
    let tokenESR = new TokenDefinition(
      Address.fromString('0xa7be5e053cb523585a63f8f78b7dbca68647442f'),
      'ESR',
      'ESR',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenESR)

    // Add USDT
    let tokenUSDT = new TokenDefinition(
      Address.fromString('0xd378634119d2f7b3cf3d60e0b0f5e048e74ce3cf'),
      'USDT',
      'USDT',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenUSDT)
    

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address): TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if (staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}