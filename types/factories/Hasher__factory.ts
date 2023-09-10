/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Hasher, HasherInterface } from "../Hasher";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[2]",
        name: "leftRight",
        type: "bytes32[2]",
      },
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class Hasher__factory {
  static readonly abi = _abi;
  static createInterface(): HasherInterface {
    return new utils.Interface(_abi) as HasherInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Hasher {
    return new Contract(address, _abi, signerOrProvider) as Hasher;
  }
}