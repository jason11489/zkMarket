import mimc from "../crypto/mimc.js";
import math, { randomFieldElement } from "../utils/math.js";
// import crypto from 'crypto';
import Config from "../config.js";
import CurveParam from "../crypto/curveParam.js";

export function Schnorr_Setup() {
    console.log("sign setup")

    let Prime = CurveParam(Config.EC_TYPE).prime;

    let g = randomFieldElement();

    let x = randomFieldElement();

    let public_key = math.modPow(g, x, Prime);

    return [g, public_key, x];
}

let setup_value = Schnorr_Setup();

export function Schnorr_Sign(g, x, message) {
    console.log("sign")
    let mimc7 = new mimc.MiMC7();
    let Prime = CurveParam(Config.EC_TYPE).prime;

    //============================================================

    let k = randomFieldElement();

    let r = math.modPow(g, k, Prime);
    console.log("r = ", r);

    let e = mimc7._hash(r, BigInt(message));

    let s = math.mod(k - math.mod(x * e, Prime), Prime);
    return [s, e, g]
}

let sign_value = Schnorr_Sign(setup_value[0], setup_value[2], 2);

export function Schnorr_Verify(s, e, g, public_key, message) {

    console.log("verify")

    let mimc7 = new mimc.MiMC7();
    let Prime = CurveParam(Config.EC_TYPE).prime;

    let g_s = math.modPow(g, s, Prime);
    let y_e = math.modPow(public_key, e, Prime);
    console.log("check ",typeof BigInt(2))
    let r = math.mod(g_s * y_e, Prime);
    console.log("r = ", r)

    let e_v = mimc7._hash(r, BigInt(message));

}

Schnorr_Verify(sign_value[0], sign_value[1], sign_value[2], setup_value[1], 2);

// const tiger = Schnorr_Sign(2); Schnorr_Verify(tiger[0], tiger[1], tiger[2],
// tiger[3], 2);