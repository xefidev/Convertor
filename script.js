const API_KEY = '__API_KEY__';
const API_BASE = 'https://api.coingecko.com/api/v3';
const FIAT_CURRENCIES = [
  { code: 'aed', name: 'United Arab Emirates Dirham' },
  { code: 'afn', name: 'Afghan Afghani' },
  { code: 'all', name: 'Albanian Lek' },
  { code: 'amd', name: 'Armenian Dram' },
  { code: 'ang', name: 'Netherlands Antillean Guilder' },
  { code: 'aoa', name: 'Angolan Kwanza' },
  { code: 'ars', name: 'Argentine Peso' },
  { code: 'aud', name: 'Australian Dollar' },
  { code: 'awg', name: 'Aruban Florin' },
  { code: 'azn', name: 'Azerbaijani Manat' },
  { code: 'bam', name: 'Bosnia and Herzegovina Convertible Mark' },
  { code: 'bbd', name: 'Barbadian Dollar' },
  { code: 'bdt', name: 'Bangladeshi Taka' },
  { code: 'bgn', name: 'Bulgarian Lev' },
  { code: 'bhd', name: 'Bahraini Dinar' },
  { code: 'bif', name: 'Burundian Franc' },
  { code: 'bmd', name: 'Bermudian Dollar' },
  { code: 'bnd', name: 'Brunei Dollar' },
  { code: 'bob', name: 'Bolivian Boliviano' },
  { code: 'brl', name: 'Brazilian Real' },
  { code: 'bsd', name: 'Bahamian Dollar' },
  { code: 'btn', name: 'Bhutanese Ngultrum' },
  { code: 'bwp', name: 'Botswana Pula' },
  { code: 'byn', name: 'Belarusian Ruble' },
  { code: 'bzd', name: 'Belize Dollar' },
  { code: 'cad', name: 'Canadian Dollar' },
  { code: 'cdf', name: 'Congolese Franc' },
  { code: 'chf', name: 'Swiss Franc' },
  { code: 'clp', name: 'Chilean Peso' },
  { code: 'cny', name: 'Chinese Yuan' },
  { code: 'cop', name: 'Colombian Peso' },
  { code: 'crc', name: 'Costa Rican Colón' },
  { code: 'cuc', name: 'Cuban Convertible Peso' },
  { code: 'cup', name: 'Cuban Peso' },
  { code: 'cve', name: 'Cape Verdean Escudo' },
  { code: 'czk', name: 'Czech Koruna' },
  { code: 'djf', name: 'Djiboutian Franc' },
  { code: 'dkk', name: 'Danish Krone' },
  { code: 'dop', name: 'Dominican Peso' },
  { code: 'dzd', name: 'Algerian Dinar' },
  { code: 'egp', name: 'Egyptian Pound' },
  { code: 'ern', name: 'Eritrean Nakfa' },
  { code: 'etb', name: 'Ethiopian Birr' },
  { code: 'eur', name: 'Euro' },
  { code: 'fjd', name: 'Fijian Dollar' },
  { code: 'fkp', name: 'Falkland Islands Pound' },
  { code: 'gbp', name: 'British Pound' },
  { code: 'gel', name: 'Georgian Lari' },
  { code: 'ghs', name: 'Ghanaian Cedi' },
  { code: 'gip', name: 'Gibraltar Pound' },
  { code: 'gmd', name: 'Gambian Dalasi' },
  { code: 'gnf', name: 'Guinean Franc' },
  { code: 'gtq', name: 'Guatemalan Quetzal' },
  { code: 'gyd', name: 'Guyanese Dollar' },
  { code: 'hkd', name: 'Hong Kong Dollar' },
  { code: 'hnl', name: 'Honduran Lempira' },
  { code: 'hrk', name: 'Croatian Kuna' },
  { code: 'htg', name: 'Haitian Gourde' },
  { code: 'huf', name: 'Hungarian Forint' },
  { code: 'idr', name: 'Indonesian Rupiah' },
  { code: 'ils', name: 'Israeli New Shekel' },
  { code: 'inr', name: 'Indian Rupee' },
  { code: 'iqd', name: 'Iraqi Dinar' },
  { code: 'irr', name: 'Iranian Rial' },
  { code: 'isk', name: 'Icelandic Króna' },
  { code: 'jmd', name: 'Jamaican Dollar' },
  { code: 'jpy', name: 'Japanese Yen' },
  { code: 'kes', name: 'Kenyan Shilling' },
  { code: 'kgs', name: 'Kyrgyzstani Som' },
  { code: 'khr', name: 'Cambodian Riel' },
  { code: 'kmf', name: 'Comorian Franc' },
  { code: 'kpw', name: 'North Korean Won' },
  { code: 'krw', name: 'South Korean Won' },
  { code: 'kwd', name: 'Kuwaiti Dinar' },
  { code: 'kyd', name: 'Cayman Islands Dollar' },
  { code: 'kzt', name: 'Kazakhstani Tenge' },
  { code: 'lak', name: 'Laotian Kip' },
  { code: 'lbp', name: 'Lebanese Pound' },
  { code: 'lkr', name: 'Sri Lankan Rupee' },
  { code: 'lrd', name: 'Liberian Dollar' },
  { code: 'lsl', name: 'Lesotho Loti' },
  { code: 'lyd', name: 'Libyan Dinar' },
  { code: 'mad', name: 'Moroccan Dirham' },
  { code: 'mdl', name: 'Moldovan Leu' },
  { code: 'mga', name: 'Malagasy Ariary' },
  { code: 'mkd', name: 'Macedonian Denar' },
  { code: 'mmk', name: 'Myanmar Kyat' },
  { code: 'mnt', name: 'Mongolian Tögrög' },
  { code: 'mop', name: 'Macanese Pataca' },
  { code: 'mru', name: 'Mauritanian Ouguiya' },
  { code: 'mur', name: 'Mauritian Rupee' },
  { code: 'mvr', name: 'Maldivian Rufiyaa' },
  { code: 'mwk', name: 'Malawian Kwacha' },
  { code: 'mxn', name: 'Mexican Peso' },
  { code: 'myr', name: 'Malaysian Ringgit' },
  { code: 'mzn', name: 'Mozambican Metical' },
  { code: 'nad', name: 'Namibian Dollar' },
  { code: 'ngn', name: 'Nigerian Naira' },
  { code: 'nio', name: 'Nicaraguan Córdoba' },
  { code: 'nok', name: 'Norwegian Krone' },
  { code: 'npr', name: 'Nepalese Rupee' },
  { code: 'nzd', name: 'New Zealand Dollar' },
  { code: 'omr', name: 'Omani Rial' },
  { code: 'pab', name: 'Panamanian Balboa' },
  { code: 'pen', name: 'Peruvian Sol' },
  { code: 'pgk', name: 'Papua New Guinean Kina' },
  { code: 'php', name: 'Philippine Peso' },
  { code: 'pkr', name: 'Pakistani Rupee' },
  { code: 'pln', name: 'Polish Złoty' },
  { code: 'pyg', name: 'Paraguayan Guaraní' },
  { code: 'qar', name: 'Qatari Riyal' },
  { code: 'ron', name: 'Romanian Leu' },
  { code: 'rsd', name: 'Serbian Dinar' },
  { code: 'rub', name: 'Russian Ruble' },
  { code: 'rwf', name: 'Rwandan Franc' },
  { code: 'sar', name: 'Saudi Riyal' },
  { code: 'sbd', name: 'Solomon Islands Dollar' },
  { code: 'scr', name: 'Seychellois Rupee' },
  { code: 'sdg', name: 'Sudanese Pound' },
  { code: 'sek', name: 'Swedish Krona' },
  { code: 'sgd', name: 'Singapore Dollar' },
  { code: 'shp', name: 'Saint Helena Pound' },
  { code: 'sle', name: 'Sierra Leonean Leone' },
  { code: 'sos', name: 'Somali Shilling' },
  { code: 'srd', name: 'Surinamese Dollar' },
  { code: 'ssp', name: 'South Sudanese Pound' },
  { code: 'stn', name: 'São Tomé and Príncipe Dobra' },
  { code: 'svc', name: 'Salvadoran Colón' },
  { code: 'syp', name: 'Syrian Pound' },
  { code: 'szl', name: 'Swazi Lilangeni' },
  { code: 'thb', name: 'Thai Baht' },
  { code: 'tjs', name: 'Tajikistani Somoni' },
  { code: 'tmt', name: 'Turkmenistani Manat' },
  { code: 'tnd', name: 'Tunisian Dinar' },
  { code: 'top', name: 'Tongan Paʻanga' },
  { code: 'try', name: 'Turkish Lira' },
  { code: 'ttd', name: 'Trinidad and Tobago Dollar' },
  { code: 'twd', name: 'New Taiwan Dollar' },
  { code: 'tzs', name: 'Tanzanian Shilling' },
  { code: 'uah', name: 'Ukrainian Hryvnia' },
  { code: 'ugx', name: 'Ugandan Shilling' },
  { code: 'usd', name: 'US Dollar' },
  { code: 'uyu', name: 'Uruguayan Peso' },
  { code: 'uzs', name: 'Uzbekistan Som' },
  { code: 'ves', name: 'Venezuelan Bolívar' },
  { code: 'vnd', name: 'Vietnamese Đồng' },
  { code: 'vuv', name: 'Vanuatu Vatu' },
  { code: 'wst', name: 'Samoan Tala' },
  { code: 'xaf', name: 'Central African CFA Franc' },
  { code: 'xcd', name: 'East Caribbean Dollar' },
  { code: 'xof', name: 'West African CFA Franc' },
  { code: 'xpf', name: 'CFP Franc' },
  { code: 'yer', name: 'Yemeni Rial' },
  { code: 'zar', name: 'South African Rand' },
  { code: 'zmw', name: 'Zambian Kwacha' },
  { code: 'xdr', name: 'IMF Special Drawing Rights' },
  { code: 'xau', name: 'Gold' },
  { code: 'xag', name: 'Silver' },
  { code: 'xpd', name: 'Palladium' },
  { code: 'xpt', name: 'Platinum' },
  { code: 'zwl', name: 'Zimbabwean Dollar' },
];
const EXTRA_CRYPTO_CURRENCIES = [
  { code: 'btc', name: 'Bitcoin' },
  { code: 'eth', name: 'Ethereum' },
  { code: 'sol', name: 'Solana' },
  { code: 'xrp', name: 'Ripple' },
  { code: 'ada', name: 'Cardano' },
  { code: 'doge', name: 'Dogecoin' },
  { code: 'bnb', name: 'BNB' },
  { code: 'usdt', name: 'Tether' },
  { code: 'usdc', name: 'USD Coin' },
  { code: 'trx', name: 'Tron' },
  { code: 'ton', name: 'Toncoin' },
  { code: 'link', name: 'Chainlink' },
  { code: 'avax', name: 'Avalanche' },
  { code: 'dot', name: 'Polkadot' },
  { code: 'ltc', name: 'Litecoin' },
  { code: 'near', name: 'Near Protocol' },
  { code: 'shib', name: 'Shiba Inu' },
  { code: 'bch', name: 'Bitcoin Cash' },
  { code: 'uni', name: 'Uniswap' },
  { code: 'atom', name: 'Cosmos' },
  { code: 'icp', name: 'Internet Computer' },
  { code: 'xlm', name: 'Stellar' },
  { code: 'etc', name: 'Ethereum Classic' },
  { code: 'algo', name: 'Algorand' },
  { code: 'mana', name: 'Decentraland' },
  { code: 'sand', name: 'The Sandbox' },
  { code: 'ape', name: 'ApeCoin' },
  { code: 'qnt', name: 'Quant' },
  { code: 'aave', name: 'Aave' },
  { code: 'mkr', name: 'Maker' },
  { code: 'snx', name: 'Synthetix' },
  { code: 'grt', name: 'The Graph' },
  { code: 'op', name: 'Optimism' },
  { code: 'arb', name: 'Arbitrum' },
  { code: 'imx', name: 'Immutable' },
  { code: 'rune', name: 'THORChain' },
  { code: 'sui', name: 'Sui' },
  { code: 'flow', name: 'Flow' },
  { code: 'fet', name: 'Fetch.ai' },
  { code: 'gala', name: 'Gala' },
  { code: 'axs', name: 'Axie Infinity' },
  { code: 'hnt', name: 'Helium' },
  { code: 'cake', name: 'PancakeSwap' },
  { code: 'ftm', name: 'Fantom' },
  { code: 'celo', name: 'Celo' },
  { code: 'eos', name: 'EOS' },
  { code: 'theta', name: 'Theta Network' },
  { code: 'neo', name: 'Neo' },
  { code: 'zil', name: 'Zilliqa' },
  { code: 'one', name: 'Harmony' },
  { code: 'kava', name: 'Kava' },
  { code: 'luna', name: 'Terra' },
  { code: 'wbtc', name: 'Wrapped Bitcoin' },
  { code: 'weth', name: 'Wrapped Ethereum' },
  { code: 'stx', name: 'Stacks' },
  { code: 'hbar', name: 'Hedera' },
  { code: 'dydx', name: 'dYdX' },
  { code: 'ens', name: 'Ethereum Name Service' },
  { code: 'gmx', name: 'GMX' },
  { code: 'comp', name: 'Compound' },
  { code: 'bal', name: 'Balancer' },
  { code: 'matic', name: 'Polygon' },
  { code: 'xtz', name: 'Tezos' },
  { code: 'xmr', name: 'Monero' },
  { code: 'grm', name: 'GRAM' },
  { code: 'jto', name: 'Jito' },
  { code: 'pyth', name: 'Pyth' },
  { code: 'kas', name: 'Kaspa' },
  { code: 'akta', name: 'Akash Network' },
  { code: 'bonk', name: 'Bonk' },
  { code: 'pepe', name: 'Pepe' },
  { code: 'flare', name: 'Flare' },
  { code: 'sei', name: 'Sei' },
  { code: 'wormhole', name: 'Wormhole' },
  { code: 'lido', name: 'Lido DAO' },
  { code: 'rekt', name: 'Rekt' },
  { code: 'celr', name: 'Celer Network' },
  { code: 'figr_heloc', name: 'Figure Heloc' },
  { code: 'hype', name: 'Hyperliquid' },
  { code: 'usds', name: 'USDS' },
  { code: 'rain', name: 'Rain' },
  { code: 'zec', name: 'Zcash' },
  { code: 'leo', name: 'LEO Token' },
  { code: 'wbt', name: 'WhiteBIT Coin' },
  { code: 'cc', name: 'Canton' },
  { code: 'dai', name: 'Dai' },
  { code: 'gram', name: 'Gram (prev. Toncoin)' },
  { code: 'usd1', name: 'USD1' },
  { code: 'usde', name: 'Ethena USDe' },
  { code: 'usdg', name: 'Global Dollar' },
  { code: 'usyc', name: 'Circle USYC' },
  { code: 'buidl', name: 'BlackRock USD Institutional Digital Liquidity Fund' },
  { code: 'pyusd', name: 'PayPal USD' },
  { code: 'cro', name: 'Cronos' },
  { code: 'xaut', name: 'Tether Gold' },
  { code: 'usdy', name: 'Ondo US Dollar Yield' },
  { code: 'tao', name: 'Bittensor' },
  { code: 'paxg', name: 'PAX Gold' },
  { code: 'wlfi', name: 'World Liberty Financial' },
  { code: 'okb', name: 'OKB' },
  { code: 'dexe', name: 'DeXe' },
  { code: 'aster', name: 'Aster' },
  { code: 'm', name: 'MemeCore' },
  { code: 'htx', name: 'HTX DAO' },
  { code: 'ondo', name: 'Ondo' },
  { code: 'rlusd', name: 'Ripple USD' },
  { code: 'wld', name: 'Worldcoin' },
  { code: 'usdd', name: 'USDD' },
  { code: 'sky', name: 'Sky' },
  { code: 'usdf', name: 'Falcon USD' },
  { code: 'mnt', name: 'Mantle' },
  { code: 'morpho', name: 'Morpho' },
  { code: 'bfusd', name: 'BFUSD' },
  { code: 'bgb', name: 'Bitget Token' },
  { code: 'u', name: 'United Stables' },
  { code: 'eutbl', name: 'Spiko EU T-Bills Money Market Fund' },
  { code: 'usdgo', name: 'USDGO' },
  { code: 'bcap', name: 'Blockchain Capital' },
  { code: 'kcs', name: 'KuCoin' },
  { code: 'stable', name: '​​Stable' },
  { code: 'pol', name: 'POL (ex-MATIC)' },
  { code: 'adi', name: 'ADI' },
  { code: 'pi', name: 'Pi Network' },
  { code: 'jtrsy', name: 'Janus Henderson Anemoy Treasury Fund' },
  { code: 'jst', name: 'JUST' },
  { code: 'eursafo', name: 'Spiko Amundi Overnight Swap Fund (EUR)' },
  { code: 'beat', name: 'Audiera' },
  { code: 'ena', name: 'Ethena' },
  { code: 'render', name: 'Render' },
  { code: 'ustb', name: 'Invesco Short Duration US Government Securities Fund' },
  { code: 'nexo', name: 'NEXO' },
  { code: '币安人生', name: '币安人生 (BinanceLife)' },
  { code: 'usdtb', name: 'USDtb' },
  { code: 'gt', name: 'Gate' },
  { code: 'jup', name: 'Jupiter' },
  { code: 'bdx', name: 'Beldex' },
  { code: 'jaaa', name: 'Janus Henderson Anemoy AAA CLO Fund' },
  { code: 'pump', name: 'Pump.fun' },
  { code: 'lit', name: 'Lighter' },
  { code: 'fil', name: 'Filecoin' },
  { code: 'gho', name: 'GHO' },
  { code: 'flr', name: 'Flare' },
  { code: 'usd0', name: 'Usual USD' },
  { code: 'xdc', name: 'XDC Network' },
  { code: 'ylds', name: 'YLDS' },
  { code: 'apt', name: 'Aptos' },
  { code: 'vvv', name: 'Venice Token' },
  { code: 'usx', name: 'USX' },
  { code: 'inj', name: 'Injective' },
  { code: 'hash', name: 'Provenance Blockchain' },
  { code: 'aero', name: 'Aerodrome Finance' },
  { code: 'tusd', name: 'TrueUSD' },
  { code: 'night', name: 'Midnight' },
  { code: 'a7a5', name: 'A7A5' },
  { code: 'dash', name: 'Dash' },
  { code: 'eurc', name: 'EURC' },
  { code: 'vet', name: 'VeChain' },
  { code: 'ousg', name: 'Ondo Short-Term U.S. Government Bond Fund' },
  { code: 'ethfi', name: 'Ether.fi' },
  { code: 'virtual', name: 'Virtuals Protocol' },
  { code: 'prime', name: 'Hastra PRIME' },
  { code: 'tia', name: 'Celestia' },
  { code: 'pengu', name: 'Pudgy Penguins' },
  { code: 'trump', name: 'Official Trump' },
  { code: 'sun', name: 'Sun Token' },
  { code: 'spx', name: 'SPX6900' },
  { code: 'fdusd', name: 'First Digital USD' },
  { code: 'lunc', name: 'Terra Luna Classic' },
  { code: 'crv', name: 'Curve DAO' },
  { code: 'gno', name: 'Gnosis' },
  { code: 'kau', name: 'Kinesis Gold' },
  { code: 'apxusd', name: 'apxUSD' },
  { code: 'kite', name: 'Kite' },
  { code: 'zro', name: 'LayerZero' },
  { code: 'ldo', name: 'Lido DAO' },
  { code: 'ohm', name: 'Olympus' },
  { code: 'bsv', name: 'Bitcoin SV' },
  { code: 'pendle', name: 'Pendle' },
  { code: 'btt', name: 'BitTorrent' },
  { code: 'mon', name: 'Monad' },
  { code: 'nft', name: 'AINFT' },
  { code: '2z', name: 'DoubleZero' },
  { code: 'dcr', name: 'Decred' },
  { code: 'real', name: 'RealLink' },
  { code: 'xpl', name: 'Plasma' },
  { code: 'grass', name: 'Grass' },
  { code: 'frax', name: 'Legacy Frax Dollar' },
  { code: 'cfx', name: 'Conflux' },
  { code: 'peanut', name: 'Peanut' },
  { code: 'onyc', name: 'OnRe Tokenized Reinsurance' },
  { code: 'syrup', name: 'Maple Finance' },
  { code: 'jasmy', name: 'JasmyCoin' },
  { code: 'koge', name: 'KOGE' },
  { code: 'floki', name: 'FLOKI' },
  { code: 'ub', name: 'Unibase' },
  { code: 'zbcn', name: 'Zebec Network' },
  { code: 'kag', name: 'Kinesis Silver' },
  { code: 'velvet', name: 'Velvet' },
  { code: 'ff', name: 'Falcon Finance' },
  { code: 'crvusd', name: 'crvUSD' },
  { code: 'pc0000031', name: 'Tradable NA Rent Financing Platform SSTN' },
  { code: 'ultima', name: 'Ultima' },
  { code: 'coco', name: 'coco' },
  { code: 'apepe', name: 'Ape and Pepe' },
  { code: 'kaia', name: 'Kaia' },
  { code: 'usdai', name: 'USDai' },
  { code: 'tel', name: 'Telcoin' },
  { code: 'strk', name: 'Starknet' },
  { code: 'vbill', name: 'VanEck Treasury Fund' },
  { code: 'ray', name: 'Raydium' },
  { code: 'ausd', name: 'AUSD' },
  { code: 'usat', name: 'USAT' },
  { code: 'pieverse', name: 'Pieverse' },
  { code: 'kaito', name: 'KAITO' },
  { code: 'wfi', name: 'WeFi' },
  { code: 'chz', name: 'Chiliz' },
  { code: 'eigen', name: 'EigenCloud (prev. EigenLayer)' },
  { code: 'susdc', name: 'Spark USDC' },
  { code: 'iota', name: 'IOTA' },
  { code: 'ustbl', name: 'Spiko US T-Bills Money Market Fund' },
  { code: 'akt', name: 'Akash Network' },
  { code: 'btse', name: 'BTSE Token' },
  { code: 'pc0000033', name: 'Tradable APAC Diversified Finance Provider SSTN' },
  { code: 'reusd', name: 'Re Protocol reUSD' },
  { code: 'satusd', name: 'Satoshi Stablecoin' },
  { code: 'earneth', name: 'Lido Earn ETH' },
  { code: 'wif', name: 'dogwifhat' },
  { code: 'apyusd', name: 'apyUSD' },
  { code: 'borg', name: 'SwissBorg' },
  { code: 'mx', name: 'MX' },
  { code: 'fartcoin', name: 'Fartcoin' },
  { code: 'gusd', name: 'GUSD' },
  { code: 'bc', name: 'BCGame Coin' },
  { code: 'zano', name: 'Zano' },
  { code: 'edge', name: 'edgeX' },
  { code: 'eurcv', name: 'EUR CoinVertible' },
  { code: 'twt', name: 'Trust Wallet' },
  { code: 'drv', name: 'Derive' },
  { code: 'xcn', name: 'Onyxcoin' },
  { code: 'safo', name: 'Spiko Amundi Overnight Swap Fund' },
  { code: 'strcx', name: 'Strategy PP Variable xStock' },
  { code: 'bp', name: 'Backpack' },
  { code: 'rif', name: 'Rootstock Infrastructure Framework' },
  { code: 'pc0000097', name: 'Tradable LatAm Fintech SSTN' },
  { code: 'xec', name: 'eCash' },
  { code: 'btw', name: 'Bitway' },
  { code: 'ar', name: 'Arweave' },
  { code: 'cash', name: 'CASH' },
  { code: 'vsn', name: 'Vision' },
  { code: 'ozo', name: 'Ozone Chain' },
  { code: 'a', name: 'Vaulta' },
  { code: 'grx', name: 'GRX Chain' },
  { code: 'h', name: 'Humanity' },
  { code: 'wemix', name: 'WEMIX' },
  { code: 'bat', name: 'Basic Attention' },
  { code: 'awe', name: 'AWE Network' },
  { code: 'cvx', name: 'Convex Finance' },
  { code: 'trac', name: 'OriginTrail' },
  { code: 'thbill', name: 'Theo Short Duration US Treasury Fund' },
  { code: 'tibbir', name: 'Ribbita by Virtuals' },
  { code: 'avusd', name: 'Avant USD' },
  { code: 'b', name: 'BUILDon' },
  { code: 'acred', name: 'Apollo Diversified Credit Securitize Fund' },
  { code: 'pc0000023', name: 'Tradable Singapore Fintech SSL' },
  { code: 'gomining', name: 'GoMining Token' },
  { code: 'shfl', name: 'Shuffle' },
  { code: 'sfp', name: 'SafePal' },
  { code: 'rlb', name: 'Rollbit Coin' },
  { code: 'pc0000015', name: 'Tradable NA Third Party Online Merchant SSTN' },
  { code: 'frxusd', name: 'Frax USD' },
  { code: 'soso', name: 'SoSoValue' },
  { code: 'genius', name: 'Genius' },
  { code: 'umxm', name: 'Manadia' },
  { code: 'nex', name: 'Nexus' },
  { code: 'cashcat', name: 'Cash Cat' },
  { code: 'pc0000085', name: 'Tradable LatAm Middle-Market Lender SSTL' },
  { code: 'bmx', name: 'BitMart' },
  { code: '1inch', name: '1INCH' },
  { code: 'dusd', name: 'StandX DUSD' },
  { code: 'tkx', name: 'Tokenize Xchange' },
  { code: 'stac', name: 'Securitize Tokenized AAA CLO Fund' },
  { code: 'usdat', name: 'Saturn Dollar' },
  { code: 'zk', name: 'ZKsync' },
  { code: 'mwc', name: 'MimbleWimbleCoin' },
  { code: 'glm', name: 'Golem' },
  { code: 'pc0000077', name: 'Tradable Singapore Fintech SSL' },
  { code: 'uusd', name: 'Unity USD' },
  { code: 'data', name: 'Data Network' },
  { code: 'meta', name: 'MetaDAO' },
  { code: 'cheems', name: 'Cheems Token' },
  { code: 'ab', name: 'AB' },
  { code: 'egld', name: 'MultiversX' },
  { code: 'allo', name: 'Allora' },
  { code: 's', name: 'Sonic' },
  { code: 'sent', name: 'Sentient' },
  { code: 'prl', name: 'Pearl' },
  { code: 'usda', name: 'USDa' },
  { code: 'crclon', name: 'Circle Internet Group (Ondo Tokenized Stock)' },
  { code: 'tag', name: 'TAGGER' },
  { code: 'o', name: 'o1.exchange' },
  { code: 'kmno', name: 'Kamino' },
  { code: 'geod', name: 'Geodnet' },
  { code: 'gwei', name: 'ETHGas' },
  { code: 'ath', name: 'Aethir' },
  { code: 'ansem', name: 'The Black Bull' },
  { code: 'uai', name: 'UnifAI Network' },
  { code: 'rail', name: 'Railgun' },
  { code: 'tpt', name: 'Triple Plus' },
  { code: 'nxm', name: 'Nexus Mutual' },
  { code: 'smilek', name: 'Smilek to the Bank' },
  { code: 'spcxb', name: 'SpaceX (bStocks Tokenized Stock)' },
  { code: 'dbr', name: 'deBridge' },
  { code: 'met', name: 'Meteora' },
  { code: 'beam', name: 'Beam' },
  { code: 'wm', name: 'WrappedM by M0' },
  { code: 'cow', name: 'CoW Protocol' },
  { code: 'bill', name: 'Billions Network' },
  { code: 'fluid', name: 'Fluid' },
  { code: 'would', name: 'would' },
  { code: 'useless', name: 'Useless Coin' },
  { code: 'sn64', name: 'Chutes' },
  { code: 'zen', name: 'Horizen' },
  { code: 'louzi', name: 'LOUZI' },
  { code: 'stau', name: 'STAU' },
  { code: 'pgold', name: 'Pleasing Gold' },
  { code: 'safe', name: 'Safe' },
  { code: 'usdon', name: 'Ondo U.S. Dollar Token' },
  { code: 'rsr', name: 'Reserve Rights' },
  { code: 'arc', name: 'AI Rig Complex' },
  { code: 'wal', name: 'Walrus' },
  { code: 'lpt', name: 'Livepeer' },
  { code: 'melania', name: 'Melania Meme' },
  { code: 'q', name: 'Quack AI' },
  { code: 'pc0000101', name: 'Tradable NA Post-Settlement Legal Financing Receivables' },
  { code: 'fdit', name: 'Fidelity Digital Interest Token' },
  { code: 'yfi', name: 'yearn.finance' },
  { code: 're', name: 'RE' },
  { code: 'form', name: 'Four' },
  { code: 'nxpc', name: 'Nexpace' },
  { code: 'cgusd', name: 'Cygnus Finance Global USD' },
  { code: 'zama', name: 'Zama' },
  { code: 'feusd', name: 'Felix feUSD' },
  { code: 'lisusd', name: 'Lista USD' },
  { code: 'zrx', name: '0x Protocol' },
  { code: 'rave', name: 'RaveDAO' },
  { code: 'arkm', name: 'Arkham' },
  { code: 'ban', name: 'Comedian' },
  { code: 'vcnt', name: 'ViciCoin' },
  { code: 'orca', name: 'Orca' },
  { code: 'mf-one', name: 'Midas mF-ONE' },
  { code: 'ordi', name: 'ORDI' },
  { code: 'qtum', name: 'Qtum' },
  { code: 'usdx', name: 'USDX' },
  { code: 'sierra', name: 'Sierra' },
  { code: 'brlv', name: 'Crown BRLV' },
  { code: 'bananas31', name: 'Banana For Scale' },
  { code: 'nmr', name: 'Numeraire' },
  { code: 'lab', name: 'LAB' },
  { code: 'mag7.ssi', name: 'MAG7.ssi' },
  { code: 'lbt', name: 'Law Blocks AI' },
  { code: 'kta', name: 'Keeta' },
  { code: 'cx', name: 'Cortex' },
  { code: 'xpr', name: 'XPR Network' },
  { code: 'qrl', name: 'Quantum Resistant Ledger' },
  { code: 'shx', name: 'Stronghold' },
  { code: 'temple', name: 'TempleDAO' },
  { code: 'ivvon', name: 'iShares Core S&P 500 ETF (Ondo Tokenized ETF)' },
  { code: 'bspx', name: 'Bending Spoons xStock' },
  { code: 'gas', name: 'Gas' },
  { code: 'xdai', name: 'XDAI' },
  { code: 'pmusd', name: 'Precious Metals USD' },
  { code: 'cfg', name: 'Centrifuge' },
  { code: 'basedhype', name: 'BasedHype' },
  { code: 'nila', name: 'MindWaveDAO' },
  { code: 'qubic', name: 'Qubic' },
  { code: 'xaum', name: 'Matrixdock Gold' },
  { code: 'tbk', name: 'TronBank' },
  { code: 'nusd', name: 'Neutrl USD' },
  { code: 'mub', name: 'Micron Technology (bStocks Tokenized Stock)' },
  { code: 'river', name: 'River' },
  { code: 'swop', name: 'Swop' },
  { code: 'qfi', name: 'Quantix Finance' },
  { code: 'aioz', name: 'AIOZ Network' },
  { code: 'cydx', name: 'CyberDEX' },
  { code: 'rvn', name: 'Ravencoin' },
  { code: 'hot', name: 'Holo' },
  { code: 'pc0000019', name: 'Tradable North America PoS Lender SSTN' },
  { code: 'chip', name: 'USD.AI' },
  { code: 'iusd', name: 'InfiniFi USD' },
  { code: 'ksm', name: 'Kusama' },
  { code: 'bas', name: 'BNB Attestation Service' },
  { code: 'skr', name: 'Seeker' },
  { code: 'zig', name: 'ZIGChain' },
  { code: 'cusd', name: 'Cap USD' },
  { code: 'dog', name: 'Dog (Bitcoin)' },
  { code: 'mglobal', name: 'Midas Fasanara Global' },
  { code: 'linea', name: 'Linea' },
  { code: 'mhorse', name: 'MEME HORSE' },
  { code: 'plume', name: 'Plume' },
  { code: 'coai', name: 'ChainOpera AI' },
  { code: 'bio', name: 'Bio Protocol' },
  { code: 'w', name: 'Wormhole' },
  { code: 'turbo', name: 'Turbo' },
  { code: 'fxusd', name: 'f(x) Protocol fxUSD' },
  { code: 'io', name: 'io.net' },
  { code: 'tfuel', name: 'Theta Fuel' },
  { code: 'tslax', name: 'Tesla xStock' },
  { code: 'babydoge', name: 'Baby Doge Coin' },
  { code: 'metal', name: 'Metal Blockchain' },
  { code: 'bera', name: 'Berachain' },
  { code: 'npc', name: 'Non-Playable Coin' },
  { code: 'magma', name: 'Magma Finance' },
  { code: 'mina', name: 'Mina Protocol' },
  { code: 'soon', name: 'SOON' },
  { code: 'syn', name: 'Synapse' },
  { code: 'enj', name: 'Enjin Coin' },
  { code: 'velo', name: 'Velo' },
  { code: 'aipf', name: 'AI Powered Finance' },
  { code: 'super', name: 'SuperVerse' },
  { code: 'usdu', name: 'USDu' },
  { code: 'sn4', name: 'Targon' },
  { code: 'mega', name: 'MegaETH' },
  { code: 'mtbill', name: 'Midas mTBILL' },
  { code: 'baby', name: 'Babylon' },
  { code: 'spk', name: 'Spark' },
  { code: 'apes', name: 'APES' },
  { code: 'exod', name: 'EXOD' },
  { code: 'jct', name: 'Janction' },
  { code: 'home', name: 'HOME' },
  { code: 'pc0000081', name: 'Tradable NA Legal Receivables SSL' },
  { code: 'apr', name: 'aPriori' },
  { code: 'upump', name: 'Unit Pump' },
  { code: 'jupusd', name: 'JupUSD' },
  { code: 'jellyjelly', name: 'Jelly-My-Jelly' },
  { code: 'elg', name: 'Escoin' },
  { code: 'elf', name: 'aelf' },
  { code: 'pros', name: 'Pharos' },
  { code: 'zeta', name: 'ZetaChain' },
  { code: 'brett', name: 'Brett' },
  { code: 'gcoin', name: 'Playnance' },
  { code: 'brz', name: 'Brazilian Digital' },
  { code: 'ft', name: 'Flying Tulip' },
  { code: 'acrdx', name: 'Anemoy Tokenized Apollo Diversified Credit Fund' },
  { code: 'axl', name: 'Axelar' },
  { code: 'fxsave', name: 'f(x) USD Saving' },
  { code: 'xp', name: 'Xphere' },
  { code: 'bce', name: 'bitcastle Token' },
  { code: 'ausdt', name: 'Alloy Tether' },
  { code: 'usdkg', name: 'USDKG' },
  { code: 'holo', name: 'Holoworld' },
  { code: 'purr', name: 'Purr' },
  { code: 'kub', name: 'KUB Coin' },
  { code: 'troll', name: 'TROLL' },
  { code: 'pc0000049', name: 'Tradable Eu/LatAm PoS Financing SSTL' },
  { code: 'cys', name: 'Cysic' },
  { code: 'red', name: 'RedStone' },
  { code: 'fidd', name: 'Fidelity Digital Dollar' },
  { code: 'sndkb', name: 'SanDisk (bStocks Tokenized Stock)' },
  { code: 'crclb', name: 'Circle Internet Group (bStocks Tokenized Stock)' },
  { code: 'fiusd', name: 'Sygnum FIUSD Liquidity Fund' },
  { code: 'vrsc', name: 'Verus' },
  { code: 'unt', name: 'UnityWallet Token' },
  { code: 'mhyper', name: 'Midas mHYPER' },
  { code: 'polyx', name: 'Polymesh' },
  { code: 'dgb', name: 'DigiByte' },
  { code: 'ccd', name: 'Concordium' },
  { code: 'diem', name: 'Diem' },
  { code: 'xvs', name: 'Venus' },
  { code: 'muon', name: 'Micron Technology (Ondo Tokenized Stock)' },
  { code: 'agentfun', name: 'AgentFun.AI' },
  { code: 'toshi', name: 'Toshi' },
  { code: 'omi', name: 'ECOMI' },
  { code: 'nock', name: 'Nockchain' },
  { code: 'rose', name: 'Oasis' },
  { code: 'ctc', name: 'Creditcoin' },
  { code: 'deep', name: 'DeepBook' },
  { code: 'degen', name: 'Degen' },
  { code: 'blur', name: 'Blur' },
  { code: 'siren', name: 'Siren' },
  { code: 'sn51', name: 'lium' },
  { code: 'move', name: 'Movement' },
  { code: 'ckb', name: 'Nervos Network' },
  { code: 'crclx', name: 'Circle xStock' },
  { code: 'osk', name: 'OSK' },
  { code: 'dola', name: 'DOLA' },
  { code: 'sushi', name: 'Sushi' },
  { code: 't', name: 'Threshold Network' },
  { code: 'lion', name: 'Loaded Lions' },
  { code: 'filq-a', name: 'Fidelity USD Digital Liquidity Fund-Acc' },
  { code: 'ont', name: 'Ontology' },
  { code: 'astr', name: 'Astar' },
  { code: 'us', name: 'Talus' },
  { code: 'dusk', name: 'DUSK' },
  { code: 'popcat', name: 'Popcat' },
  { code: 'spyx', name: 'SP500 xStock' },
  { code: 'prize', name: 'Prize Protocol' },
  { code: 'esp', name: 'Espresso' },
  { code: 'xno', name: 'Nano' },
  { code: 'nxt', name: 'NEXST' },
  { code: 'pnut', name: 'Peanut the Squirrel' },
  { code: 'arrr', name: 'Pirate Chain' },
  { code: 'xyo', name: 'XYO Network' },
  { code: 'alt', name: 'AltLayer' },
  { code: 'ibiton', name: 'iShares Bitcoin Trust (Ondo Tokenized)' },
  { code: 'icnt', name: 'Impossible Cloud Network Token' },
  { code: 'peaq', name: 'peaq' },
  { code: 'ron', name: 'Ronin' },
  { code: 'br', name: 'Bedrock' },
  { code: 'zchf', name: 'Frankencoin' },
  { code: 'vvs', name: 'VVS Finance' },
  { code: 'aztec', name: 'Aztec' },
  { code: 'gps', name: 'GoPlus Security' },
  { code: 'rpl', name: 'Rocket Pool' },
  { code: '0g', name: '0G' },
  { code: 'spyon', name: 'SPDR S&P 500 ETF (Ondo Tokenized ETF)' },
  { code: 'jpyc', name: 'JPY Coin' },
  { code: 'mog', name: 'Mog Coin' },
  { code: 'trb', name: 'Tellor Tributes' },
  { code: 'bard', name: 'Lombard' },
  { code: 'cards', name: 'Collector Crypt' },
  { code: 'bdca', name: 'BitDCA' },
  { code: 'apex', name: 'APEX' },
  { code: 'nat', name: 'DMT-NAT' },
  { code: 'up', name: 'Unitas' },
  { code: 'nvdaon', name: 'NVIDIA (Ondo Tokenized Stock)' },
  { code: 'me', name: 'Magic Eden' },
  { code: 'req', name: 'Request' },
  { code: 'rnt', name: 'Reental' },
  { code: 'ore', name: 'ORE' },
  { code: 'msusd', name: 'Metronome Synth USD' },
  { code: 'mask', name: 'Mask Network' },
  { code: 'asset', name: 'REAL' },
  { code: 'xusd', name: 'StraitsX XUSD' },
  { code: 'prove', name: 'Succinct' },
  { code: 'sn120', name: 'affine' },
  { code: 'amp', name: 'Amp' },
  { code: 'moodeng', name: 'Moo Deng' },
  { code: 'vana', name: 'Vana' },
  { code: 'pci', name: 'Paycoin' },
  { code: 'euri', name: 'Eurite' },
  { code: 'crabai', name: 'Claude Crab' },
  { code: 'yzy', name: 'YZY' },
  { code: 'huma', name: 'Huma Finance' },
  { code: 'vtho', name: 'VeThor' },
  { code: 'gohome', name: 'GOHOME' },
  { code: 'fun', name: 'FUNToken' },
  { code: 'mstrx', name: 'MicroStrategy xStock' },
  { code: 'busd', name: 'BUSD' },
  { code: 'fo', name: 'Official FO' },
  { code: 'opcode', name: 'Opcode' },
  { code: 'not', name: 'Notcoin' },
  { code: 'aix', name: 'AI XOVIA' },
  { code: 'bim', name: 'BIM' },
  { code: 'tig', name: 'The Innovation Game' },
  { code: 'gekko', name: 'GEKKO' },
  { code: 'fogo', name: 'Fogo' },
  { code: 'bsb', name: 'Block Street' },
  { code: 'fb', name: 'Fractal Bitcoin' },
  { code: 'moca', name: 'Moca Network' },
  { code: 'pc0000089', name: 'Tradable LatAm Residential SSTL' },
  { code: 'glidr', name: 'Glidr' },
  { code: 'ankr', name: 'Ankr Network' },
  { code: 'bnkr', name: 'BankrCoin' },
  { code: 'sn44', name: 'Score' },
  { code: 'xef', name: 'Xeffy' },
  { code: 'sb', name: 'Snowbank' },
  { code: 'ebtc', name: 'eBTC' },
  { code: 'tos', name: 'TokenOS AI' },
  { code: 'yusd', name: 'Aegis YUSD' },
  { code: 'nvdax', name: 'NVIDIA xStock' },
  { code: 'oza', name: 'Ozapay' },
  { code: 'at', name: 'Apro' },
  { code: 'himson', name: 'Hims & Hers Health (Ondo Tokenized Stock)' },
  { code: 'sqd', name: 'SQD' },
  { code: 'xvg', name: 'Verge' },
  { code: 'sentis', name: 'SentismAI' },
  { code: 'zerebro', name: 'Zerebro' },
  { code: 'bgbtc', name: 'Bitget Wrapped BTC' },
  { code: 'st', name: 'Small Thing' },
  { code: 'meme', name: 'Memecoin' },
  { code: 'burn', name: 'BurnedFi' },
  { code: 'hez', name: 'Hermez Network' },
  { code: 'mmt', name: 'Momentum' },
  { code: 'ori', name: 'Orizon' },
  { code: 'qqqon', name: 'Invesco QQQ ETF (Ondo Tokenized ETF)' },
  { code: 'kntq', name: 'Kinetiq' },
  { code: 'tgbp', name: 'Tokenised GBP' },
  { code: 'dag', name: 'Constellation' },
  { code: 'sfrxusd', name: 'Frax Staked frxUSD' },
  { code: 'folks', name: 'FOLKS' },
  { code: 'cross', name: 'CROSS' },
  { code: 'mantra', name: 'MANTRA' },
  { code: 'arx', name: 'Arcium' },
  { code: 'unp', name: 'Unipoly' },
  { code: 'uma', name: 'UMA' },
  { code: 'nopal', name: 'Nest BlackOpal LiquidStone II Vault' },
  { code: 'anvl', name: 'Anvil' },
  { code: 'nes', name: 'Nesa' },
  { code: 'ainti', name: 'AIntivirus' },
  { code: 'gal', name: 'GAL (migrated to Gravity - G)' },
  { code: 'eure', name: 'Monerium EUR emoney' },
  { code: 'coinon', name: 'Coinbase (Ondo Tokenized Stock)' },
  { code: 'handy', name: 'Handy' },
  { code: 'geode', name: 'Geode Chain' },
  { code: 'america', name: 'America Party' },
  { code: 'pm', name: 'PumpMeme' },
  { code: 'elon', name: 'Dogelon Mars' },
  { code: 'uxpl', name: 'Unit Plasma' },
  { code: 'sahara', name: 'Sahara AI' },
  { code: 'space', name: 'Spacecoin' },
  { code: 'tdccp', name: 'TDCCP' },
  { code: 'hbd', name: 'Hive Dollar' },
  { code: 'qqqx', name: 'Nasdaq xStock' },
  { code: 'nbasis', name: 'Nest Basis Vault' },
  { code: 'mngo', name: 'Mango' },
  { code: 'xtusd', name: 'XT Stablecoin XTUSD' },
  { code: 'puff', name: 'Puff The Dragon' },
  { code: 'atos', name: 'Atoshi' },
  { code: 'star', name: 'Starpower' },
  { code: 'zest', name: 'Zest Protocol' },
  { code: 'kgen', name: 'KGeN' },
  { code: 'mew', name: 'cat in a dogs world' },
  { code: 'dual', name: 'Dual' },
  { code: 'musd', name: 'MetaMask USD' },
  { code: 'ana', name: 'Nirvana ANA' },
  { code: 'open', name: 'OpenLedger' },
  { code: 'usdp', name: 'Pax Dollar' },
  { code: 'api3', name: 'Api3' },
  { code: 'mbg', name: 'MBG By Multibank Group' },
  { code: 'avnt', name: 'Avantis' },
  { code: 'srx', name: 'StorX' },
  { code: 'cet', name: 'CoinEx' },
  { code: 'cspr', name: 'Casper Network' },
  { code: 'usdm', name: 'MegaUSD' },
  { code: 'eurspkcc', name: 'Spiko Digital Assets Cash & Carry Fund - Euro Share Class' },
  { code: 'serv', name: 'OpenServ' },
  { code: 'hdx', name: 'Hydration' },
  { code: 'now', name: 'ChangeNOW' },
  { code: 'ggbr', name: 'Goldfish Gold' },
  { code: 'ustc', name: 'TerraClassicUSD' },
  { code: 'usn', name: 'Noon USN' },
  { code: 'pc0000027', name: 'Tradable LatAm BNPL SSTN' },
  { code: 'idol', name: 'MEET48' },
  { code: 'ai', name: 'Gensyn' },
  { code: 'hsk', name: 'HashKey Platform Token' },
  { code: 'sc', name: 'Siacoin' },
  { code: 'core', name: 'Core' },
  { code: 'frog', name: 'just a frog' },
  { code: 'eth:gusdtq', name: 'Galaxy USDT Quality' },
  { code: 'slx', name: 'Solstice' },
  { code: 'bnt', name: 'Bancor Network' },
  { code: 'zora', name: 'Zora' },
  { code: 'band', name: 'Band' },
  { code: 'skyai', name: 'SkyAI' },
  { code: 'usdo', name: 'OpenEden OpenDollar' },
  { code: 'bcspx', name: 'Backed CSPX Core S&P 500' },
  { code: 'orbs', name: 'Orbs' },
  { code: 'ssv', name: 'SSV Network' },
  { code: 'gbpsafo', name: 'Spiko Amundi Overnight Swap Fund (GBP)' },
  { code: 'sn9', name: 'iota' },
  { code: 'bold', name: 'BOLD' },
  { code: 'vr', name: 'Victoria VR' },
  { code: 'acx', name: 'Across Protocol' },
  { code: 'plldv3', name: 'Palladium Network' },
];
const FALLBACK_CURRENCIES = [...FIAT_CURRENCIES, ...EXTRA_CRYPTO_CURRENCIES].map((entry) => ({ ...entry, type: 'fiat' in entry ? 'fiat' : 'crypto' }));

const ICONS = {
  usd: '$',
  eur: '€',
  gbp: '£',
  rub: '₽',
  byn: 'Br',
  jpy: '¥',
  cny: '¥',
  krw: '₩',
  inr: '₹',
  aud: 'A$',
  cad: 'C$',
  chf: 'Fr',
  btc: '₿',
  eth: 'Ξ',
  sol: '◎',
  xrp: '✕',
  ada: '₳',
  doge: 'Ð',
  usdt: 'T',
  usdc: '$',
  trx: 'T',
  ltc: 'Ł',
  bnb: 'B',
  dot: '◉',
  avax: 'A',
  link: '⟡',
  near: 'N',
  ton: 'T',
  xmr: 'ɱ',
  bch: 'Ƀ',
  etc: 'ξ',
  xlm: '*',
  atom: '⚛',
  ftm: 'F',
  rune: 'ᚱ',
  sui: 'S',
  dai: '◈',
  cro: 'C',
  hbar: '♒',
  leo: 'L',
  okb: 'O',
  zec: 'Z',
  tao: 'Θ',
  paxg: '🜚',
  xaut: '🜚',
  pyusd: 'P',
  usdg: 'G',
  usdy: 'Y',
  usds: 'S',
  rain: 'R',
  cc: 'C',
  wbt: 'W',
  hype: 'H',
  figr_heloc: 'FH',
  m: 'M',
  htx: 'H',
  aster: 'A',
  ondo: 'O',
  usd1: '1',
  buidl: 'B',
  usyc: 'U',
  dexe: 'D',
  wlfi: 'W',
  usde: 'U',
};

const POPULARITY = {
  usd: 0,
  eur: 1,
  gbp: 2,
  rub: 3,
  byn: 4,
  jpy: 5,
  cny: 6,
  chf: 7,
  cad: 8,
  aud: 9,
  btc: 10,
  eth: 11,
  sol: 12,
  bnb: 13,
  xrp: 14,
  usdt: 15,
  usdc: 16,
  ada: 17,
  doge: 18,
  ltc: 19,
  trx: 20,
  dot: 21,
  avax: 22,
  link: 23,
  near: 24,
  ton: 25,
  xmr: 26,
  bch: 27,
  uni: 28,
  atom: 29,
  etc: 30,
  xlm: 31,
  ftm: 32,
  sui: 33,
  rune: 34,
  dai: 35,
  cro: 36,
  hbar: 37,
  leo: 38,
  okb: 39,
  zec: 40,
  tao: 41,
  paxg: 42,
  xaut: 43,
  pyusd: 44,
  usdg: 45,
  usdy: 46,
  usds: 47,
  rain: 48,
  cc: 49,
  wbt: 50,
  hype: 51,
  figr_heloc: 52,
  m: 53,
  htx: 54,
  aster: 55,
  ondo: 56,
  usd1: 57,
  buidl: 58,
  usyc: 59,
  dexe: 60,
  wlfi: 61,
  usde: 62,
  kas: 63,
  pepe: 64,
  wif: 65,
  floki: 66,
  bonk: 67,
  shib: 68,
  matic: 69,
  arb: 70,
  op: 71,
  imx: 72,
  grt: 73,
  aave: 74,
  mkr: 75,
  snx: 76,
  comp: 77,
  bal: 78,
   '1inch': 79,
  enj: 80,
  chz: 81,
  flow: 82,
  gala: 83,
  axs: 84,
  mana: 85,
  sand: 86,
  ape: 87,
  crv: 88,
  lrc: 89,
  zrx: 90,
  bat: 91,
  storj: 92,
  skl: 93,
  ankr: 94,
  celo: 95,
  eos: 96,
  theta: 97,
  neo: 98,
  zil: 99,
  kava: 100,
  luna: 101,
};
const SEARCH_ALIASES = {
  usd: ['usd', 'dollar', 'доллар', 'us dollar'],
  eur: ['eur', 'euro', 'евро'],
  gbp: ['gbp', 'pound', 'фунт', 'british pound'],
  rub: ['rub', 'ruble', 'руб', 'рубль', 'russian ruble', 'российский', 'российский рубль'],
  byn: ['byn', 'belarus', 'бел', 'белорус', 'белорусский', 'belarusian ruble', 'белорусский рубль'],
  jpy: ['jpy', 'yen', 'иена', 'japanese yen'],
  cny: ['cny', 'yuan', 'юань', 'chinese yuan'],
  chf: ['chf', 'franc', 'швейцарский', 'swiss franc'],
  cad: ['cad', 'canadian', 'канадский'],
  aud: ['aud', 'australian', 'австралийский'],
  btc: ['btc', 'bitcoin', 'биткоин'],
  eth: ['eth', 'ethereum', 'эфир', 'ethereum'],
  sol: ['sol', 'solana', 'solana'],
  xrp: ['xrp', 'ripple', 'рипл'],
  ada: ['ada', 'cardano', 'кардано'],
  doge: ['doge', 'dogecoin', 'дож'],
  bnb: ['bnb', 'bnb'],
  usdt: ['usdt', 'tether', 'тейтер'],
  usdc: ['usdc', 'usd coin', 'usd coin']
};
const TRANSLATIONS = {
  en: {
    eyebrow: 'Liquid Glass UI',
    heroTitle: 'Convert fiat and crypto with a polished, modern flow.',
    heroText: 'Fast search, clear result states, and a premium glass surface designed to feel as sharp as a real product experience.',
    openConverter: 'Open converter',
    seeFeatures: 'See features',
    orderLanding: 'Order a landing',
    liveRates: 'Live rates',
    instantSearch: 'Instant search',
    quickSwap: 'Quick swap',
    converterLabel: 'Converter',
    converterTitle: 'Choose a pair and convert',
    statusLoading: 'Loading rates',
    statusReady: 'Ready',
    amountLabel: 'Amount',
    fromLabel: 'From',
    toLabel: 'To',
    searchCurrencies: 'Search currencies',
    resultLabel: 'Result',
    resultMeta: 'Select currencies to continue',
    feature1Title: 'Structured layout',
    feature1Text: 'Everything sits in a calm, compositional rhythm so the task stays effortless.',
    feature2Title: 'Fluid interactions',
    feature2Text: 'Soft motion, hover lifts, and responsive states make the experience feel alive.',
    feature3Title: 'Premium finish',
    feature3Text: 'Glass surfaces, refined shadows, and calm color make the product feel considered.',
    fiat: 'Fiat',
    crypto: 'Crypto',
    emptyState: 'No results yet',
    emptyStateText: 'Try another code or name'
  },
  ru: {
    eyebrow: 'Жидкое стекло',
    heroTitle: 'Конвертируйте фиат и крипту в понятном и современном потоке.',
    heroText: 'Быстрый поиск, понятные состояния результата и премиальная стеклянная поверхность, которая выглядит как настоящий продукт.',
    openConverter: 'Открыть конвертер',
    seeFeatures: 'Плюсы',
    orderLanding: 'Заказать лендинг',
    liveRates: 'Актуальные курсы',
    instantSearch: 'Быстрый поиск',
    quickSwap: 'Быстрая замена',
    converterLabel: 'Конвертер',
    converterTitle: 'Выберите пару и переведите',
    statusLoading: 'Загрузка курсов',
    statusReady: 'Готово',
    amountLabel: 'Сумма',
    fromLabel: 'Откуда',
    toLabel: 'Куда',
    searchCurrencies: 'Поиск валют',
    resultLabel: 'Результат',
    resultMeta: 'Выберите валюты для расчёта',
    feature1Title: 'Чистая структура',
    feature1Text: 'Всё находится в спокойном и понятном ритме, поэтому задача решается без лишних усилий.',
    feature2Title: 'Плавные взаимодействия',
    feature2Text: 'Мягкие анимации, лёгкие hover-состояния и аккуратный отклик делают интерфейс живым.',
    feature3Title: 'Премиальный вид',
    feature3Text: 'Стеклянные поверхности, аккуратные тени и спокойный цвет делают продукт ощущаемым как продуманный.',
    fiat: 'Фиат',
    crypto: 'Крипто',
    emptyState: 'Ничего не найдено',
    emptyStateText: 'Попробуйте другой код или название'
  }
};

const state = { currencies: [], lang: 'en', pickers: { from: { filter: 'fiat', query: '' }, to: { filter: 'fiat', query: '' } } };

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
function getCurrencyIcon(code) { const normalized = String(code || '').toLowerCase(); return ICONS[normalized] || normalized.slice(0, 2).toUpperCase(); }
function getCurrencyType(code) { return /^(btc|eth|sol|xrp|ada|doge|ltc|bnb|dot|avax|link|near|ton|trx|usdt|usdc)$/i.test(code) ? 'crypto' : 'fiat'; }
function getSearchText(entry) {
  return [entry.code, entry.name, ...(SEARCH_ALIASES[entry.code.toLowerCase()] || [])].join(' ');
}
function formatCurrencyName(code, fallback = '') { const normalized = String(code || '').toLowerCase(); const map = { usd: 'US Dollar', eur: 'Euro', gbp: 'British Pound', rub: 'Russian Ruble', byn: 'Belarusian Ruble', jpy: 'Japanese Yen', cad: 'Canadian Dollar', aud: 'Australian Dollar', chf: 'Swiss Franc', cny: 'Chinese Yuan', inr: 'Indian Rupee', krw: 'South Korean Won', brl: 'Brazilian Real', btc: 'Bitcoin', eth: 'Ethereum', sol: 'Solana', xrp: 'Ripple', ada: 'Cardano', doge: 'Dogecoin', ltc: 'Litecoin', bnb: 'BNB', dot: 'Polkadot', usdt: 'Tether', usdc: 'USD Coin' }; return map[normalized] || fallback || code.toUpperCase(); }
function setSelection(selectId, inputId, code) {
  const select = document.getElementById(selectId);
  const input = document.getElementById(inputId);
  if (!select || !input) return;
  const found = state.currencies.find((entry) => entry.code === code) || state.currencies[0];
  if (!found) return;
  select.value = found.code;
  input.value = `${found.code.toUpperCase()} · ${found.name}`;
}
function buildCurrencyOptions(select, defaultValue) {
  if (!select) return;
  select.innerHTML = '';
  state.currencies.forEach((entry) => {
    const option = document.createElement('option');
    option.value = entry.code;
    option.textContent = `${entry.code.toUpperCase()} · ${entry.name}`;
    if (defaultValue && entry.code === defaultValue) option.selected = true;
    select.appendChild(option);
  });
}
function sortCurrencies(items) {
  return [...items].sort((left, right) => {
    const leftRank = POPULARITY[left.code.toLowerCase()] ?? 999;
    const rightRank = POPULARITY[right.code.toLowerCase()] ?? 999;
    if (leftRank !== rightRank) return leftRank - rightRank;
    return left.name.localeCompare(right.name);
  });
}
function renderSuggestions(inputId, listId, selectId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const select = document.getElementById(selectId);
  if (!input || !list || !select) return;

  const target = inputId === 'from-search' ? 'from' : 'to';
  const pickerState = state.pickers[target];
  const query = (pickerState.query || input.value || '').trim().toLowerCase();
  const typeFilter = pickerState.filter || 'fiat';
  const translations = TRANSLATIONS[state.lang];

  const filtered = sortCurrencies(state.currencies.filter((entry) => {
    const matchesType = typeFilter === 'all' || entry.type === typeFilter;
    const searchText = normalizeText(getSearchText(entry));
    const matchesQuery = !query || searchText.includes(normalizeText(query));
    return matchesType && matchesQuery;
  })).slice(0, 36);

  list.classList.add('is-open');
  list.innerHTML = `
    <div class="picker-toolbar">
      <div class="picker-tabs">
        <button type="button" class="picker-tab ${typeFilter === 'fiat' ? 'active' : ''}" data-filter="fiat">${translations.fiat}</button>
        <button type="button" class="picker-tab ${typeFilter === 'crypto' ? 'active' : ''}" data-filter="crypto">${translations.crypto}</button>
      </div>
    </div>
    <div class="picker-list">
      ${filtered.length ? filtered.map((entry) => `
        <button type="button" class="picker-item" data-code="${entry.code}">
          <span class="picker-item-main">
            <span class="picker-item-code">${getCurrencyIcon(entry.code)} ${entry.code.toUpperCase()}</span>
            <span class="picker-item-name">${escapeHtml(entry.name)}</span>
          </span>
          <span class="picker-item-type">${entry.type === 'crypto' ? translations.crypto : translations.fiat}</span>
        </button>
      `).join('') : `<div class="empty-state"><strong>${translations.emptyState}</strong><div>${translations.emptyStateText}</div></div>`}
    </div>
  `;

  list.querySelectorAll('.picker-tab').forEach((button) => {
    button.addEventListener('click', () => {
      pickerState.filter = button.dataset.filter;
      renderSuggestions(inputId, listId, selectId);
    });
  });

  list.querySelectorAll('.picker-item').forEach((button) => {
    button.addEventListener('click', () => {
      select.value = button.dataset.code;
      input.value = `${button.dataset.code.toUpperCase()} · ${state.currencies.find((item) => item.code === button.dataset.code)?.name || ''}`;
      list.classList.remove('is-open');
      list.innerHTML = '';
      convertCurrency();
    });
  });
}
function setStatus(messageKey) {
  const status = document.getElementById('converter-status');
  if (status) status.textContent = TRANSLATIONS[state.lang][messageKey] || messageKey;
}
async function loadCurrencies() {
  try {
    const [fiatResponse, coinListResponse] = await Promise.all([
      fetch(`${API_BASE}/simple/supported_vs_currencies?x_cg_demo_api_key=${API_KEY}`),
      fetch(`${API_BASE}/coins/list?include_platform=false`)
    ]);

    const normalized = [];
    const seen = new Set();

    const addEntry = (code, name, type) => {
      const normalizedCode = String(code || '').toLowerCase();
      if (!normalizedCode || seen.has(normalizedCode)) return;
      seen.add(normalizedCode);
      normalized.push({ code: normalizedCode, name: name || formatCurrencyName(normalizedCode), type });
    };

    FIAT_CURRENCIES.forEach((entry) => addEntry(entry.code, entry.name, 'fiat'));
    if (fiatResponse.ok) {
      const fiatData = await fiatResponse.json();
      if (Array.isArray(fiatData)) {
        fiatData.forEach((code) => addEntry(code, formatCurrencyName(code), 'fiat'));
      }
    }

    if (coinListResponse.ok) {
      const coinData = await coinListResponse.json();
      if (Array.isArray(coinData)) {
        coinData.forEach((item) => addEntry(item.symbol, item.name || item.id, getCurrencyType(item.symbol)));
      }
    }

    EXTRA_CRYPTO_CURRENCIES.forEach((entry) => addEntry(entry.code, entry.name, 'crypto'));
    state.currencies = normalized.length ? normalized : FALLBACK_CURRENCIES;
  } catch (error) {
    state.currencies = FALLBACK_CURRENCIES;
  }
}
function formatAmount(value, code) {
  const isCrypto = /^(btc|eth|sol|xrp|ada|doge|ltc|bnb|dot|avax|link|near|ton|trx|usdt|usdc)$/i.test(code);
  const decimals = isCrypto ? 6 : 2;
  return value.toLocaleString('en-US', { maximumFractionDigits: decimals, minimumFractionDigits: decimals <= 2 ? 2 : 0 });
}
function convertCurrency() {
  const fromCurrency = document.getElementById('from-currency');
  const toCurrency = document.getElementById('to-currency');
  const amountInput = document.getElementById('amount');
  const resultOutput = document.getElementById('result-output');
  const resultMeta = document.getElementById('result-meta');
  if (!fromCurrency || !toCurrency || !amountInput || !resultOutput || !resultMeta) return;

  const amount = Number(amountInput.value || 1);
  const from = fromCurrency.value.toLowerCase();
  const to = toCurrency.value.toLowerCase();
  const rates = { usd: 1, eur: 1.09, gbp: 1.27, rub: 0.014, byn: 0.031, jpy: 0.0068, cad: 0.74, aud: 0.65, chf: 1.13, cny: 0.14, inr: 0.012, krw: 0.00075, btc: 62800, eth: 3450, sol: 165, xrp: 0.6, ada: 0.6, doge: 0.16, bnb: 620, usdt: 1, usdc: 1 };
  const fromRate = rates[from] ?? 1;
  const toRate = rates[to] ?? 1;
  const converted = (amount * fromRate) / toRate;
  const rounded = Number(converted.toFixed(8));

  resultOutput.textContent = `${formatAmount(rounded, to)} ${to.toUpperCase()}`;
  resultMeta.textContent = `1 ${from.toUpperCase()} ≈ ${(toRate / fromRate).toFixed(4)} ${to.toUpperCase()}`;
}
function applyLanguage(lang) {
  const body = document.body;
  body.classList.add('lang-switching');
  window.setTimeout(() => {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (TRANSLATIONS[lang][key]) element.textContent = TRANSLATIONS[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (TRANSLATIONS[lang][key]) element.placeholder = TRANSLATIONS[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });
    localStorage.setItem('flux-lang', lang);
    body.classList.remove('lang-switching');
  }, 160);
}
function initAnimations() {
  document.querySelectorAll('[data-animate]').forEach((item, index) => {
    window.setTimeout(() => item.classList.add('is-visible'), index * 90);
  });
}
function bindEvents() {
  const form = document.getElementById('converter-form');
  const swapButton = document.getElementById('swap-currencies');

  form?.addEventListener('input', () => {
    const resultOutput = document.getElementById('result-output');
    const resultMeta = document.getElementById('result-meta');
    if (resultOutput) resultOutput.textContent = '…';
    if (resultMeta) resultMeta.textContent = 'Updating';
    window.setTimeout(convertCurrency, 180);
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    convertCurrency();
  });

  swapButton?.addEventListener('click', () => {
    const fromSelect = document.getElementById('from-currency');
    const toSelect = document.getElementById('to-currency');
    if (!fromSelect || !toSelect) return;
    const fromValue = fromSelect.value;
    const toValue = toSelect.value;
    fromSelect.value = toValue;
    toSelect.value = fromValue;
    setSelection('from-currency', 'from-search', fromSelect.value);
    setSelection('to-currency', 'to-search', toSelect.value);
    convertCurrency();
  });

  document.querySelectorAll('.chip').forEach((button) => {
    button.addEventListener('click', () => {
      const fromSelect = document.getElementById('from-currency');
      const toSelect = document.getElementById('to-currency');
      if (!fromSelect || !toSelect) return;
      fromSelect.value = button.dataset.from || 'usd';
      toSelect.value = button.dataset.to || 'eur';
      setSelection('from-currency', 'from-search', fromSelect.value);
      setSelection('to-currency', 'to-search', toSelect.value);
      convertCurrency();
    });
  });

  ['from-search', 'to-search'].forEach((id) => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('focus', () => {
      const listId = id === 'from-search' ? 'from-suggestions' : 'to-suggestions';
      const selectId = id === 'from-search' ? 'from-currency' : 'to-currency';
      renderSuggestions(id, listId, selectId);
    });
    input.addEventListener('click', () => {
      const listId = id === 'from-search' ? 'from-suggestions' : 'to-suggestions';
      const selectId = id === 'from-search' ? 'from-currency' : 'to-currency';
      renderSuggestions(id, listId, selectId);
    });
    input.addEventListener('input', () => {
      const target = id === 'from-search' ? 'from' : 'to';
      state.pickers[target].query = input.value;
      const listId = id === 'from-search' ? 'from-suggestions' : 'to-suggestions';
      const selectId = id === 'from-search' ? 'from-currency' : 'to-currency';
      renderSuggestions(id, listId, selectId);
    });
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-wrap')) {
      document.querySelectorAll('.suggestions').forEach((list) => {
        list.classList.remove('is-open');
        list.innerHTML = '';
      });
    }
  });
}
async function initApp() {
  document.documentElement.setAttribute('data-theme', 'dark');
  state.lang = localStorage.getItem('flux-lang') || 'en';
  await loadCurrencies();
  buildCurrencyOptions(document.getElementById('from-currency'), 'usd');
  buildCurrencyOptions(document.getElementById('to-currency'), 'eur');
  setSelection('from-currency', 'from-search', 'usd');
  setSelection('to-currency', 'to-search', 'eur');
  renderSuggestions('from-search', 'from-suggestions', 'from-currency');
  renderSuggestions('to-search', 'to-suggestions', 'to-currency');
  setStatus('statusReady');
  convertCurrency();
  bindEvents();
  applyLanguage(state.lang);
  initAnimations();
}
window.addEventListener('DOMContentLoaded', initApp);
