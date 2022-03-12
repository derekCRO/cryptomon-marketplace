import BN from "bn.js";
import { Address } from "web3x-es/address";
import { EventLog, TransactionReceipt } from "web3x-es/formatters";
import { Contract, ContractOptions, TxCall, TxSend, EventSubscriptionFactory } from "web3x-es/contract";
import { Eth } from "web3x-es/eth";
import abi from "./KMONTokenAbi";
export type ApprovalEvent = {
    owner: Address;
    spender: Address;
    value: string;
};
export type TransferEvent = {
    from: Address;
    to: Address;
    value: string;
};
export interface ApprovalEventLog extends EventLog<ApprovalEvent, "Approval"> {
}
export interface TransferEventLog extends EventLog<TransferEvent, "Transfer"> {
}
interface KMONTokenEvents {
    Approval: EventSubscriptionFactory<ApprovalEventLog>;
    Transfer: EventSubscriptionFactory<TransferEventLog>;
}
interface KMONTokenEventLogs {
    Approval: ApprovalEventLog;
    Transfer: TransferEventLog;
}
interface KMONTokenTxEventLogs {
    Approval: ApprovalEventLog[];
    Transfer: TransferEventLog[];
}
export interface KMONTokenTransactionReceipt extends TransactionReceipt<KMONTokenTxEventLogs> {
}
interface KMONTokenMethods {
    allowance(owner: Address, spender: Address): TxCall<string>;
    approve(spender: Address, amount: number | string | BN): TxSend<KMONTokenTransactionReceipt>;
    balanceOf(account: Address): TxCall<string>;
    claim(_to: Address): TxSend<KMONTokenTransactionReceipt>;
    decimals(): TxCall<string>;
    decreaseAllowance(spender: Address, subtractedValue: number | string | BN): TxSend<KMONTokenTransactionReceipt>;
    increaseAllowance(spender: Address, addedValue: number | string | BN): TxSend<KMONTokenTransactionReceipt>;
    initialize(): TxSend<KMONTokenTransactionReceipt>;
    name(): TxCall<string>;
    symbol(): TxCall<string>;
    totalSupply(): TxCall<string>;
    transfer(recipient: Address, amount: number | string | BN): TxSend<KMONTokenTransactionReceipt>;
    transferFrom(sender: Address, recipient: Address, amount: number | string | BN): TxSend<KMONTokenTransactionReceipt>;
}
export interface KMONTokenDefinition {
    methods: KMONTokenMethods;
    events: KMONTokenEvents;
    eventLogs: KMONTokenEventLogs;
}
export class KMONToken extends Contract<KMONTokenDefinition> {
    constructor(eth: Eth, address?: Address, options?: ContractOptions) {
        super(eth, abi, address, options);
    }
    deploy(): TxSend<KMONTokenTransactionReceipt> {
        return super.deployBytecode("0x608060405234801561001057600080fd5b50610d0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b41146101a2578063a457c2d7146101aa578063a9059cbb146101bd578063dd62ed3e146101d057600080fd5b8063395093511461015e57806370a08231146101715780638129fc1c1461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd146101155780631e83409a1461012757806323b872dd1461013c578063313ce5671461014f575b600080fd5b6100dc610209565b6040516100e99190610bd7565b60405180910390f35b610105610100366004610bae565b61029b565b60405190151581526020016100e9565b6035545b6040519081526020016100e9565b61013a610135366004610b20565b6102b1565b005b61010561014a366004610b73565b6102c8565b604051601281526020016100e9565b61010561016c366004610bae565b610377565b61011961017f366004610b20565b6001600160a01b031660009081526033602052604090205490565b61013a6103b3565b6100dc610465565b6101056101b8366004610bae565b610474565b6101056101cb366004610bae565b61050d565b6101196101de366004610b41565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60606036805461021890610c9c565b80601f016020809104026020016040519081016040528092919081815260200182805461024490610c9c565b80156102915780601f1061026657610100808354040283529160200191610291565b820191906000526020600020905b81548152906001019060200180831161027457829003601f168201915b5050505050905090565b60006102a833848461051a565b50600192915050565b6102c58169021e19e0c9bab240000061063e565b50565b60006102d584848461071d565b6001600160a01b03841660009081526034602090815260408083203384529091529020548281101561035f5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61036c853385840361051a565b506001949350505050565b3360008181526034602090815260408083206001600160a01b038716845290915281205490916102a89185906103ae908690610c78565b61051a565b600054610100900460ff16806103cc575060005460ff16155b6103e85760405162461bcd60e51b815260040161035690610c2a565b600054610100900460ff1615801561040a576000805461ffff19166101011790555b6104516040518060400160405280600981526020016825a6a7a72a37b5b2b760b91b8152506040518060400160405280600481526020016325a6a7a760e11b8152506108ec565b80156102c5576000805461ff001916905550565b60606037805461021890610c9c565b3360009081526034602090815260408083206001600160a01b0386168452909152812054828110156104f65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610356565b610503338585840361051a565b5060019392505050565b60006102a833848461071d565b6001600160a01b03831661057c5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610356565b6001600160a01b0382166105dd5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610356565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0382166106945760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610356565b80603560008282546106a69190610c78565b90915550506001600160a01b038216600090815260336020526040812080548392906106d3908490610c78565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166107815760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610356565b6001600160a01b0382166107e35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610356565b6001600160a01b0383166000908152603360205260409020548181101561085b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610356565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610892908490610c78565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108de91815260200190565b60405180910390a350505050565b600054610100900460ff1680610905575060005460ff16155b6109215760405162461bcd60e51b815260040161035690610c2a565b600054610100900460ff16158015610943576000805461ffff19166101011790555b61094b61096c565b61095583836109d6565b8015610967576000805461ff00191690555b505050565b600054610100900460ff1680610985575060005460ff16155b6109a15760405162461bcd60e51b815260040161035690610c2a565b600054610100900460ff16158015610451576000805461ffff191661010117905580156102c5576000805461ff001916905550565b600054610100900460ff16806109ef575060005460ff16155b610a0b5760405162461bcd60e51b815260040161035690610c2a565b600054610100900460ff16158015610a2d576000805461ffff19166101011790555b8251610a40906036906020860190610a6b565b508151610a54906037906020850190610a6b565b508015610967576000805461ff0019169055505050565b828054610a7790610c9c565b90600052602060002090601f016020900481019282610a995760008555610adf565b82601f10610ab257805160ff1916838001178555610adf565b82800160010185558215610adf579182015b82811115610adf578251825591602001919060010190610ac4565b50610aeb929150610aef565b5090565b5b80821115610aeb5760008155600101610af0565b80356001600160a01b0381168114610b1b57600080fd5b919050565b600060208284031215610b31578081fd5b610b3a82610b04565b9392505050565b60008060408385031215610b53578081fd5b610b5c83610b04565b9150610b6a60208401610b04565b90509250929050565b600080600060608486031215610b87578081fd5b610b9084610b04565b9250610b9e60208501610b04565b9150604084013590509250925092565b60008060408385031215610bc0578182fd5b610bc983610b04565b946020939093013593505050565b6000602080835283518082850152825b81811015610c0357858101830151858201604001528201610be7565b81811115610c145783604083870101525b50601f01601f1916929092016040019392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60008219821115610c9757634e487b7160e01b81526011600452602481fd5b500190565b600181811c90821680610cb057607f821691505b60208210811415610cd157634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220c62e30d422b9da919f5fe34c972176d2d2feb45617e5508d2567b803416bc58d64736f6c63430008040033") as any;
    }
}
export var KMONTokenAbi = abi;