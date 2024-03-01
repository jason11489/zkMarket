const curveParam = {
    EC_TYPE: null,
    prime: null,
    g: null,
    coefA: null,
    coefD: null,
};

// expect twisted edwards form
export default function CurveParam(EC_TYPE = 'EC_ALT_BN128') {
    if (curveParam.EC_TYPE !== EC_TYPE) {
        if (EC_TYPE === 'EC_ALT_BN128') {
            curveParam.prime = BigInt(
                '21888242871839275222246405745257275088548364400416034343698204186575808495617',
            );
            curveParam.g = {
                x: BigInt(
                    '19698561148652590122159747500897617769866003486955115824547446575314762165298',
                ),
                y: BigInt(
                    '19298250018296453272277890825869354524455968081175474282777126169995084727839',
                ),
            };
            curveParam.coefA = BigInt('1');
            curveParam.coefD = BigInt(
                '9706598848417545097372247223557719406784115219466060233080913168975159366771',
            );
            curveParam.primeLen = curveParam.prime.toString(2).length;
            curveParam.blockBytes = parseInt(curveParam.primeLen / 8);
        } else if (EC_TYPE === 'EC_BLS12_381') {
            curveParam.prime = BigInt(
                '52435875175126190479447740508185965837690552500527637822603658699938581184513',
            );
            curveParam.g = {
                x: BigInt(
                    '8076246640662884909881801758704306714034609987455869804520522091855516602923',
                ),
                y: BigInt(
                    '13262374693698910701929044844600465831413122818447359594527400194675274060458',
                ),
            };
            curveParam.coefA = BigInt(
                '52435875175126190479447740508185965837690552500527637822603658699938581184512',
            );
            curveParam.coefD = BigInt(
                '19257038036680949359750312669786877991949435402254120286184196891950884077233',
            );
        }
    } else {
        curveParam.EC_TYPE = 'EC_ALT_BN128';
        curveParam.prime = BigInt(
            '21888242871839275222246405745257275088548364400416034343698204186575808495617',
        );
        curveParam.g = {
            x: BigInt(
                '995203441582195749578291179787384436505546430278305826713579947235728471134',
            ),
            y: BigInt(
                '5472060717959818805561601436314318772137091100104008585924551046643952123905',
            ),
        };
        curveParam.coefA = BigInt('168700');
        curveParam.coefD = BigInt('168696');
    }
    return curveParam;
}
