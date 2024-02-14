import randomBytes from 'crypto';
import ethers from 'hardhat';
import secp256k1 from 'secp256k1';

export function setup() {

    let privKey
    do {
        privKey = randomBytes(32);
    } while (!secp256k1.privateKeyVerify(privKey))

    var publicKey = secp256k1.publicKeyCreate(privKey);

    return [publicKey, privKey];
}

export function sign(m, x) {
    var publicKey = secp256k1.publicKeyCreate(x);

    // R = G * k
    var k = randomBytes(32);
    var R = secp256k1.publicKeyCreate(k);

    // e = h(address(R) || compressed pubkey || m)
    var e = challenge(R, m, publicKey);

    // xe = x * e
    var xe = secp256k1.privateKeyTweakMul(x, e);

    // s = k + xe
    var s = secp256k1.privateKeyTweakAdd(k, xe);
    return {R, s, e};
}

function challenge(R, m, publicKey) {
    // convert R to address see
    // https://github.com/ethereum/go-ethereum/blob/eb948962704397bb861fd4c0591b5056456edd4d/crypto/crypto.go#L275
    var R_uncomp = secp256k1.publicKeyConvert(R, false);
    var R_addr = arrayify(ethers.utils.keccak256(R_uncomp.slice(1, 65))).slice(
        12,
        32
    );
    // e = keccak256(address(R) || compressed publicKey || m)
    var e = arrayify(ethers.utils.solidityKeccak256([
        "address", "uint8", "bytes32", "bytes32"
    ], [
        R_addr, publicKey[0] + 27 - 2,
        publicKey.slice(1, 33),
        m
    ]));
    return e;
}

export function verify() {
    
}

// public key, privKey
let setup_value = setup();

let sign_value = sign(999, setup_value[1])



console.log();