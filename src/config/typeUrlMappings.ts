import protobuf from 'protobufjs';
import { cosmos, google, chainmain } from '@crypto-org-chain/chain-jslib/lib/dist/cosmos/v1beta1/codec';
export interface GeneratedType {
    readonly create: (properties?: {
        [k: string]: any;
    }) => any;
    readonly encode: (message: any | {
        [k: string]: any;
    }, writer?: protobuf.Writer) => protobuf.Writer;
    readonly decode: (reader: protobuf.Reader | Uint8Array, length?: number) => any;
}

export const typeUrlMappings: {
    [key: string]: GeneratedType;
} = {
    '/cosmos.base.v1beta1.Coin': cosmos.base.v1beta1.Coin,
    '/cosmos.bank.v1beta1.MsgSend': cosmos.bank.v1beta1.MsgSend,
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward': cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward,
    '/cosmos.staking.v1beta1.MsgCreateValidator': cosmos.staking.v1beta1.MsgCreateValidator,
    '/cosmos.staking.v1beta1.MsgBeginRedelegate': cosmos.staking.v1beta1.MsgBeginRedelegate,
    '/cosmos.staking.v1beta1.MsgEditValidator': cosmos.staking.v1beta1.MsgEditValidator,
    '/cosmos.staking.v1beta1.MsgDelegate': cosmos.staking.v1beta1.MsgDelegate,
    '/cosmos.staking.v1beta1.MsgUndelegate': cosmos.staking.v1beta1.MsgUndelegate,
    '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission': cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission,
    '/cosmos.crypto.ed25519.PubKey': cosmos.crypto.ed25519.PubKey,
    '/cosmos.crypto.secp256k1.PubKey': cosmos.crypto.secp256k1.PubKey,
    '/cosmos.gov.v1beta1.MsgDeposit': cosmos.gov.v1beta1.MsgDeposit,
    '/cosmos.gov.v1beta1.MsgVote': cosmos.gov.v1beta1.MsgVote,
    '/cosmos.gov.v1beta1.MsgSubmitProposal': cosmos.gov.v1beta1.MsgSubmitProposal,
    '/google.protobuf.Any': google.protobuf.Any,
    '/cosmos.distribution.v1beta1.MsgSetWithdrawAddress': cosmos.distribution.v1beta1.MsgSetWithdrawAddress,
    '/cosmos.distribution.v1beta1.MsgFundCommunityPool': cosmos.distribution.v1beta1.MsgFundCommunityPool,
    '/chainmain.nft.v1.MsgIssueDenom': chainmain.nft.v1.MsgIssueDenom,
    '/chainmain.nft.v1.MsgMintNFT': chainmain.nft.v1.MsgMintNFT,
    '/chainmain.nft.v1.MsgEditNFT': chainmain.nft.v1.MsgEditNFT,
    '/chainmain.nft.v1.MsgTransferNFT': chainmain.nft.v1.MsgTransferNFT,
    '/chainmain.nft.v1.MsgBurnNFT': chainmain.nft.v1.MsgBurnNFT,
};