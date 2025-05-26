import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x41A0D2Ddb435A5B149BeA7582Bb64D1689eb4c98'

export const REFERENCE_TOKEN = '0xBddb1A0f310dD9303f10cCf244ce5f6a1211F065'
export const STABLE_TOKEN_POOL = '0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('20')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0x2ab0F4D16004B4E5766F77AEa56952aB5751698C',
  '0x1929D77aA7AcdC3E2624BfaBc7f94A4593C858e0',
  '0x82f74Fd9F2e4A8b23CC2C6E67E39049216DdCD42',
]

export const STABLE_COINS: string[] = [
  '0x2ab0F4D16004B4E5766F77AEa56952aB5751698C',
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = [
  {
    address: Address.fromString('0x1929D77aA7AcdC3E2624BfaBc7f94A4593C858e0'),
    symbol: 'FLCT',
    name: 'FLCT',
    decimals: BigInt.fromI32(5),
  },
  {
    address: Address.fromString('0x82f74Fd9F2e4A8b23CC2C6E67E39049216DdCD42'),
    symbol: 'CNYT',
    name: 'CNYT',
    decimals: BigInt.fromI32(5),
  },
  {
    address: Address.fromString('0x2ab0F4D16004B4E5766F77AEa56952aB5751698C'),
    symbol: 'USDK',
    name: 'USDK',
    decimals: BigInt.fromI32(5),
  },
]
