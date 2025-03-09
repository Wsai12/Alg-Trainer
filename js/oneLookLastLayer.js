var pll = {
    "Aa": ["x' L' U L' D2 L U' L' D2 L2 x"],
    "Ab": ["x' L2 D2 L U L' D2 L U' L x"],
    "E": ["x' L' U L D' L' U' L D L' U' L D' L' U L D"],
    "F": ["R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R"],
    "Ga": ["R2 U R' U R' U' R U' R2 U' D R' U R D'"],
    "Gb": ["R' U' R U D' R2 U R' U R U' R U' R2 D"],
    "Gc": ["R2 U' R U' R U R' U R2 U D' R U' R' D"],
    "Gd": ["R U R' U' D R2 U' R U' R' U R' U R2 D'"],
    "H": ["M2 U M2 U2 M2 U M2"],
    "Ja": ["R' U L' U2 R U' R' U2 R L"],
    "Jb": ["R U R' F' R U R' U' R' F R2 U' R'"],
    "Na": ["R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'"],
    "Nb": ["R' U R U' R' F' U' F R U R' F R' F' R U' R"],
    "Ra": ["R U' R' U' R U R D R' U' R D' R' U2 R'"],
    "Rb": ["R' U2 R U2 R' F R U R' U' R' F' R2"],
    "T": ["R U R' U' R' F R2 U' R' U' R U R' F'"],
    "Ua": ["R U R' U R' U' R2 U' R' U R' U R"],
    "Ub": ["R' U R' U' R3 U' R' U R U R2"],
    "V": ["R' U R' U' y R' F' R2 U' R' U R' F R F"],
    "Y": ["F R U' R' U' R U R' F' R U R' U' R' F R F'"],
    "Z": ["M2 U M2 U M' U2 M2 U2 M'"],
    };

    var zbllu = {
    "1": ["R U' R' U' R U2 R' U' R' D' R U2 R' D R"],
    "2": ["R U2 R D R' U2 R D' R' U2 R' U' R U' R'"],
    "3": ["R2 D r' U2 r D' R' U2 R'"],
    "4": ["R U R2 D' R U R' D R2 U2 R'"],
    "5": ["R U2 R2 D' R U2 R' D R2 U' R' U2 R U2 R'"],
    "6": ["R2 D R' U2 R D' R' U2 R'"],
    "7": ["R' D' r U2 r' D R U2 R U' R' U' R U' R'"],
    "8": ["R' U' R U R U R' U' R' U F R U R U' R' F'"],
    "9": ["R U R' U R U' R' U F' R U2 R' U2 R' F R"],
    "10": ["R2 D' R U' R' D R2 U R' U R U2 R' U R U2 R' U' R"],
    "11": ["R U R' U R U' R' U R U' R' U' L' U R U' R' L"],
    "12": ["R U' R' U R U R' U2 R' D' R U R' D R2 U R'"],
    "13": ["R2 D' r U2 r' D R U2 R"],
    "14": ["R2 D' R U' R' D R2 U' R' U2 R"],
    "15": ["R' U R U R' U2 R U R D R' U2 R D' R'"],
    "16": ["R' U2 R' D' R U2 R' D R U2 R U R' U R"],
    "17": ["R2 D' R U2 R' D R U2 R"],
    "18": ["R' F' r U2 R' D R U' R' D' R2 U' r' F"],
    "19": ["R' U R U R' U2 R y U2 R U' R' U2 R U' R'"],
    "20": ["F R U R' U' R2 D R' U' R D' R2 U' R U R' F'"],
    "21": ["R2 D' R U2 R' U' D R' U' R2 U R U R2"],
    "22": ["R2 F' R U2 R U2 R' F U' R U R' U' R"],
    "23": ["R' U R U' R' U' R U2 R D R' U' R D' R2 U' R"],
    "24": ["F U R U' R D R' U' R D' R2 U R U R' F'"],
    "25": ["R' F R U' R' U' R U R' F' R U R' U' R' F R F' R"],
    "26": ["r2 F2 r U2 r U' L' U R' U R U' L"],
    "27": ["F2 R U' R' U' R U R' F' R U R' U' R' F R F2"],
    "28": ["R2 B2 R' B2 R' U R U' L U' L' U R'"],
    "29": ["F U R2 D' R U' R' D R2 F' R' U R"],
    "30": ["R' U' R F R2 D' R U R' D R2 U' F'"],
    "31": ["R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' U2 R"],
    "32": ["R2 F' R U R' U' R' F R2 U' R' U2 R2 U R' U R"],
    "33": ["F U R U2 R' U R U R2 F' r U R U' r'"],
    "34": ["R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'"],
    "35": ["r U R' U' r' F R2 U' R' U' R U2 R' U' F'"],
    "36": ["R2 F R U R U' R' F' R U' R2 D' R U R' D R2"],
    "37": ["R U R' U R U R' U2 R U' R2 D' R U' R' D R"],
    "38": ["R U R' U R U' R' U2 R' D' R U2 R' D R2 U' R'"],
    "39": ["R' U' R U2 R' F' R U R' U' R' F R2 U2 R' U R"],
    "40": ["R' U2 R U R' U R' D R' U2 R D' R' U2 R'"],
    "41": ["x' R2 D2 R' U2 R D2 R' U2 R' x"],
    "42": ["x R2 D2 R U2 R' D2 R U2 R x'"],
    "43": ["F R U' R' U R U R' U R U' R' F'"],
    "44": ["R U' R2 F R U R U' R2 F' R U' F' U F"],
    "45": ["R U R' U R' D' R U2 R' D R2 U' R' U2 R U2 R'"],
    "46": ["R U' R' U' R U' R' U R' D' R U R' D R2 U R'"],
    "47": ["R' U2 R U R' U R' D' R U' R' D R U R"],
    "48": ["R U2 R' U' R U' R D R' U R D' R' U' R'"],
    "49": ["R U' R' U' R U R D R' U R D' R2"],
    "50": ["F R U R' U' R U R' U' F' U' R' F' U' F U R"],
    "51": ["R U R' L' U2 R U' R' U' R U' R' L"],
    "52": ["R2 D' R U R' D R U R U' R' U' R"],
    "53": ["F U R U2 R' U R U R' U R U2 R' U R U R' F'"],
    "54": ["r U R' U' M U R U' R' F R U R' U' F'"],
    "55": ["r U2 R2 F R F' U2 r' R U R U' R'"],
    "56": ["R' U2 R F U' R' U R U R' U R U' F'"],
    "57": ["R2 D R' U' R D' R' U' R' U R U R'"],
    "58": ["F U R U2 R2 U2 R U R' U R U2 R U R' F'"],
    "59": ["R' U R U R' U' R' D' R U' R' D R2"],
    "60": ["R' U' R U' F U' R' U R U R' U R U' F'"],
    "61": ["R' U' R U R' U R U2 R' U R U2 R' U' R"],
    "62": ["R U R' U' R U' R' U2 R U' R' U2 R U R'"],
    "63": ["R U2 R' U' R U' R' U' R U R' U R U2 R'"],
    "64": ["R' U2 R2 U R2 U R U' R U R' U' R U' R'"],
    "65": ["R' U2 R U R' U R U R' U' R U' R' U2 R"],
    "66": ["R U2 R2 U' R2 U' R' U R' U' R U R' U R"],
    "67": ["R U R' U R' U2 R2 U R2 U R2 U' R'"],
    "68": ["R' U' R U' R U2 R2 U' R2 U' R2 U R"],
    "69": ["R' U' R U' R' U2 R2 U R' U R U2 R'"],
    "70": ["R U R' U R U2 R2 U' R U' R' U2 R"],
    "71": ["R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2"],
    "72": ["R U2 R' U' R U' R' U2 R' U2 R U R' U R"]
    };

    var zblll = {
    "1": ["U R' U2 R U R' U R U R' U' R U' R' U2 R", "U R U2 R' U' R U' R' U' R U R' U R U2 R'", "U' R' U' R U' R' U R U2 R' U R U2 R' U' R", "U' R U R' U' R U' R' U2 R U' R' U2 R U R'", "U R' U2 R2 U R2 U R U' R U R' U' R U' R'", "U R U2 R2 U' R2 U' R' U R' U' R U R' U R", "U2 R U R' U R' U' R U' R' U2 R U2 R U2 R'", "R' U' R U' R U R' U R U2 R' U2 R' U2 R", "R' U' R U' R' U2 R2 U R' U R U2 R'", "U2 R U R' U R U2 R2 U' R U' R' U2 R", "R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2", "U R U2 R' U' R U' R' U2 R' U2 R U R' U R"],
    "2": ["U2 R' U' R U' F U' R' U R U R' U R U' F'", "R U R' U L' U R U' M' x' U' R U' R'", "M' U R' U' F' U F R2 U R' U R U2 r'", "U' F R U R' U' R U R' U' F' U' R' F' U' F U R", "R U' R' U' R U R D R' U R D' R2", "U2 R' U R U R' U' R' D' R U' R' D R2", "R2 D' R U R' D R U R U' R' U' R", "U2 R2 D R' U' R D' R' U' R' U R U R'", "U r' U' R' F R U r F R U' R' F'", "F R U' R' U' R U2 R' U' R U' R' U' R U2 R' U' F'", "U' F R U R' U' R U R' U' F' U2 F R U R' U' F'", "U' R' U2 R F U' R' U R U R' U R U' F'"],
    "3": ["U' R' U' R F R2 D' R U R' D R2 U' F'", "U' r U R' U' r' F R U R' U' R F' R' U R", "U' R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'", "U' R U R' U R U' R2 F R F' R U' R' U' F' U2 F", "F R U R U2 R' U' R U' R' U2 R' U2 R U' R' U' F'", "U' r U R' U' r' F R2 U' R' U' R U2 R' U' F'", "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R", "U' F2 R U' R' U' R U R' F' R U R' U' R' F R F2", "U R' U L' U' L U' R U l' U2 R' U2 R2 x'", "U R U' L U L' U R' U' l U2 R U2 R2 x", "R U' R' U R U' L U r' F U2 R U2 R2 x", "U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' U2 R"],
    "4": ["U F' R U2 R' U2 R' F R U2 R U2 R'", "x R2 U2 R' D2 R U2 R' D2 R' x'", "R U' R' U' R U2 R' U2 R' D' R U' R' D R", "R' U2 R U R' U R' D' R U' R' D R U R", "U' R U' R' U' R U' R' U R' D' R U R' D R2 U R'", "U R U R' U R U2 R' U r U R' U' r' F R F'", "U' R' U2 R U R' U R' D R' U2 R D' R' U2 R'", "R U R' U R U' R' U2 R' D' R U2 R' D R2 U' R'", "R' U' R F U' R' U' R U F' U R' U R", "U2 R U R' U R U R' U2 R U' R2 D' R U' R' D R", "U F' R U R' U' R U' R' U' R U R' F'"],
    "5": ["U' R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'", "U2 R2 D' R U2 R' D R2 U' R' U R", "U' R U' R' U R U R' U2 R D R' U' R D' R2 U' R", "U' R2 F' R U2 R U2 R' F U' R U R' U' R", "R' U2 R U' R' U' R2 D r' U2 r D' R2 U R", "U' R U R' U2 F2 R U2 R' U2 R' F2 R2 U R'", "U R2 D' R U' R' D R2 U' R' U2 R", "R2 D' r U2 r' D R U2 R", "U' R' U2 R' D' R U2 R' D R U2 R U R' U R", "U2 R U R' U R U2 R2 U z U R' D R U' z'", "U' R' U R U R' U2 R U2 y R U' R' U2 R U' R'", "R U' R' U R U R' U' R' U F R U R U' R' F'"],
    "6": ["U' R U2 R U2 R' U' R2 D R' U2 R D' R2 U2 R", "U R' U2 R' D' R U2 R' D R2", "R U' R2 F2 R U2 R U2 R' F2 U2 R U' R'", "R' U' R2 D r' U2 r D' R2 U R U R' U2 R", "U R' U R U' R' U F' R U2 R' U2 R' F R2", "U R' U R2 D R' U R D' R' U2 R' U R U R' U' R", "U R' U2 R' D' r U2 r' D R2", "R' U2 R U R2 D' R U R' D R2", "U2 R D R' U2 R D' R' U' R' U2 R U' R' U' R", "U2 F' R U R' U' R' F R2 U' R' U' R U' R' U R U R'", "U R U R' U2 R U R' U2 y' R' U2 R U' R' U' R", "R' U' R U2 R' U' R2 D r' U2 r D' R2 U R"],
    };

    var zbllh = {
    "1": ["U' R U R' U R U' R' U R U2 R'", "U R' U' R U' R' U R U' R' U2 R", "R' U2 R U R' U' R U R' U R", "R U2 R' U' R U R' U' R U' R'", "R' U2 R U R' U R U R U R' U R U2 R'", "R U2 R' U' R U' R' U' R' U' R U' R' U2 R", "U R U R' U R U2 R' U' R' U2 R U R' U R", "U R U R' U R U' R' U R U' R' U R' U' R2 U' R' U R' U R"],
    "2": ["R' U' R U' y R U' R' U R l U' R' U l'", "R U R' U y' R' U R U' R2 F R F' R", "F R U R' U' R U R' U' F' U R' F' U' F U R", "R' U' R U' R' U2 R U R' U' R U R' F' R U R' U' R' F R2", "U x' U' R U' R' U R' F2 R U' R U R' U x", "F R U R' U' R U R' U' R U R' U' F'", "U x' R U2 R2 F R U2 R' F2 r U2 r' F' R2 U2 R' x", "U R U R' U r' F R F' r U2 R2 U2 R U R' U R"],
    "3": ["U' R' U' R U' R' U F' R U R' U' R' F R2 U' R' U R", "U' R U R' U R' U' R2 U' R2 U' L U' R U L'", "U R U R' U R U L' U R' U' L", "U R' U' R U' R' U' L U' R U L'", "R U R2 F R F' r U' r' U r U r'", "U2 R' F R' F' R2 U' r' U r U' r' U' r", "R' U2 R U R' U' F' R U R' U' R' F R U2 R", "U' F U R' F R F' R U' R2 F' R U2 R U2 R'", "R U2 R' U' R2 D R' U R D' R2 U' R U' R'", "U2 R' U2 R U R2 D' R U' R' D R2 U R' U R", "U2 R U R' U R U2 R' F R U' R' U' R U2 R' U' F'", "F R U' R' U' R U2 R' U' F' U R U R' U R U2 R'"],
    "4": ["U2 R U' R2 F2 R U2 R U2 R' F2 U' R U2 R'", "R U2 R' U L' U2 R U2 R' U2 L R U' R'", "U' R' F R U R' U' F' R U' R' U R' F R F' U R", "U' F U' R U2 R' U2 R U' R' U' R U R' U F'", "F' R U2 R' U2 R' F R U R U R' U' R U' R'", "U2 R' U2 R U2 R2 F' R U R U' R' F U R", "U' R U2 R' U' R U' R D' R U' R' D R U R", "U2 R U2 R2 F U' R2 U' R2 U F' U R", "R' U' F' U F R U R U R' U' R' F R F'", "U2 F R' F' r U R U' r2 F2 r U r' F r", "U2 F R U R' U' R' F' U2 R U R' U R2 U2 R'", "U F R U' R' U R U2 R' U' R U R' U' F'"],
    };

    var zbllpi = {
    "1": ["R U2 R' U' R U' R2 U' R U' R' U2 R", "U2 R' U2 R U R' U R2 U R' U R U2 R'", "U R U' R' U2 R U R' U2 R U R' U2 R U2 R'", "U R' U R U2 R' U' R U2 R' U' R U2 R' U2 R", "U' R U2 R2 U' R2 U' R2 U2 R", "U' R' U2 R2 U R2 U R2 U2 R'", "R' U2 R U2 R' U R U2 R' U R U2 R' U' R", "U2 R U2 R' U2 R U' R' U2 R U' R' U2 R U R'", "U' R U R' U' R' U2 R U R' U R2 U2 R'", "U' R U R' U R U2 R' U' R U R' U R U2 R'", "R U R' U R U2 R' U R U R' U R U2 R'", "U' R U R' U' R' U' R U R U R' U' R' U R U' R U' R'"],
    "2": ["U' r' U' R U' R' U R U' R' U R' F R F' U r", "R U2 R' U' F' R U2 R' U' R U' R' F R U' R'", "U F R2 U' R U2 R U R' U R' U R2 F'", "U' F R2 U' R U' R U' R' U2 R' U R2 F'", "U R U2 R' U R' D' R U R' D R2 U' R' U R U' R'", "U' R U D' R U R' D R2 U' R' U' R2 U2 R", "U2 r U R' U R' F R F' R U' R' U R U2 r'", "U' R' U R U F R' U R U' F' U' R' U' R", "U' F U R' U' R2 U' R2 U2 R U2 R U R' F'", "U2 R U R' U r' F R F' r U' R' U R U2 R'", "U R U R' U R U R' U' R U R D R' U R D' R2", "U R' U' R U' R' U' R U R' U' R' D' R U' R' D R2"],
    "3": ["U' r' U' R U' R' U2 r U' R U2 R' U2 R' F R F'", "U' R' U' R U R2 F' R U R U' R' F U' R U R' U R", "U' r U' r' U' r U r' F R' F' R2 U' R'", "U' r' U r U r' U' r U R2 F R F' R", "U r' F R F' r U' R' U' R U' R'", "U2 R U R' U F' R U2 R' U2 R' F R", "U2 R2 D R' U2 R D' R2 U' R2 D R' U' R D' R2", "U R' U R U' R' U R U R' U2 r' F R F' r", "U' R U2 R D' R U' R' D R' U' R2 U2 R", "U' R' U' R U' R2 D' R U R' D R2 U' R' U2 R", "U2 F U R U2 R' U R U R' F' R U2 R' U' R U' R'", "U2 R U2 R2 F R U R U2 R' U' R U2 R' U' F' R U R'"],
    "4": ["U' F R U R' U' R' F' R U2 R' U' R2 U' R2 U2 R", "U' R U R' U R' F R F' R' U' F' U F R2 U' R'", "U2 R U R' U R U' R' U' R' F' R U2 R U2 R' F", "U' R' U' F' R U R' U' R' F R2 U2 R' U2 R", "U R U2 R2 F R F' R' U' F' U F R U R U2 R'", "U2 F U' R U' R' U R U R' U2 R U2 R' U F'", "U R' U' R' D' R U R' D R' U R' U R U2 R'", "U2 R' U' F U' R2 U R2 U F' R2 U2 R'", "U2 R U R' U R U2 R2 F' r U R U' r' F", "U2 F R U' R' U' R U R' F' U2 F R U R' U' F'", "U2 R U R' U R U2 R' F U R U2 R' U R U R' F'", "F U R U' R' U R U2 R' U' R U R' F'"],
    "5": ["U R U2 R' F R' F r U r' F2 R F'", "U' R U R' U' R' F R2 U R' U' R U R' U' F'", "U2 R U R' U F2 R U2 R' U2 R' F2 R", "R U R' U R U' R' U R U' R D R' U' R D' R2", "U2 R' U2 R U R' U R2 U' L' U R' U' L", "U' R U R' U R U2 R' U' R U' L' U R' U' L", "U F U R' U' R F' U' R' U R U' R' U2 R", "U' R U2 R' U' R U R' U2 L' U R U' M' x'", "F U R U' R' F' r U' r' U' r U r' F' U F", "U' R' F R U R' U' R' F' R2 U' R' U R U' R' U2 R", "U R' U' F' U F R U' r U' r' U' r U r' F' U F", "U2 r U' r' F R' F r U R U2 r' F r U r' F"],
    "6": ["U' r U R' U R U r' F U2 F U2 F'", "F U R U' R' U R U' R2 F' R U R U' R'", "R' F R F' r U R' U R U2 r' U' R U' R'", "U2 R' U' R U' R' U R U' R' U R' D' R U R' D R2", "R U2 R' U' R U' R' U2 r' F R F' r U R'", "U' R' F2 R U2 R U2 R' F2 U' R U' R'", "R L' U R' U' L U2 R U' R' U R U2 R'", "U' R' U2 R U R' U' R U F R' U R U' F'", "U R' U2 R U R' U' R U R2 F R U R U' R' F' R", "U' F' U' F r U' r' U r U r' F R U R' U' F'", "U2 R U R' U R U' R2 F R F' R U' R' F' U F", "r U' r U' R U' R' F R U R' U r2 F"],
    };

    var zblls = {
    "1": ["R' U2 R U R' U R", "U R U R' U R U2 R'", "U' R' U' R U' R U R' U R U2 R' U' R' U R", "R U R' U' R' U2 R U R' U R U' R U' R'", "U R U R2 U' R2 U' R2 U2 R2 U2 R'", "R' U2 R2 U R U' R' U R U R2 U' R'", "U2 R U R' U R' U' R2 U' R' U R' U' R U R' U R", "U R U R' U R U' R' U R' U' R2 U' R' U R' U R", "R U R' U' R' U2 R U R U' R' U R' U R", "R' U' R U R U R' U' R' U R U R U' R'", "U' R' U' R U' R U R2 U R2 U2 R'", "R' U R2 U R' U R U2 R U2 R U R' U R2"],
    "2": ["U F U' R' U R U F' R U R2 U R2 U2 R'", "U2 F U R' F R F' R U' R' U R U' R' F'", "U' R U R' F' R U R' U R U2 R' F R U' R'", "R U' R2 U2 D' R U R' U D R2 U R'", "U2 F R U R' U' R U R2 U' F' U R U R U' R'", "U' R U R' U L' U R U' L U2 R'", "U2 R U2 L' R' U2 R U2 R' U2 L U' R U' R'", "U R' U R U2 R' U R U2 R D R' U' R D' R'", "U2 R U R D' R U' R' D R2 U' R' U2 R2 U2 R'", "U r U R' U' r' F R F' R U' L' U R' U' L", "U R' U2 R U R' U' R F U' R' U' R U F'", "U L' U2 R U' R' U2 L U R U' R' U R U2 R'"],
    "3": ["R' U' F U' R2 U R2 U F' R U' R U' R'", "U R' U2 R U R' U R' D' r U2 r' D R U2 R", "U' R2 D' R U2 R' D R2 U R' U R", "U R2 F R U R U' R' F' R U' R' U R", "U R' U2 R U R' U R' D' R U2 R' D R U2 R", "U2 R U R' U R' U' R' D' R U R' D R' U2 R'", "r U R' F' U F U R U2 R' U M", "R' U' R' D' R U' R' D R2 U R' U R", "U2 R' U2 R U R2 D' R U' R' D R U2 R", "U' R' U' F U F' R U F U2 F'", "U' R U' R' U' F U R U' R' F' R U' R' U' R' F R F'", "U' R2 D' r U2 r' D R2 U R' U R"],
    "4": ["U2 r U2 R' U' R U R' U' R U R' U2 r' F R F'", "U R U' L' U R' U' L", "U2 R' U2 R U R' U' R' D' r U2 r' D R2", "U2 R' U' R' U R2 D' U2 R U R' U' D R'", "R' D U' R' U R U2 D' R2 U R' U' R'", "U R2 D r' U2 r D' R' U' R' U R U2 R'", "U R2 D R' U2 R D' R' U' R' U R U2 R'", "U2 R' U2 R U R' U' R' D' R U2 R' D R2", "R' U2 F' R U R' U' R' F R U2 R", "U2 R U2 R' U2 R' F R2 U R' U' R U R' U' F'", "U' R U R' F' R U R' U R U' R' U' R' F R2 U' R'", "U R U' R' U R U' R' F R' F' R U' F' U F"],
    "5": ["R' U2 R' D R' U R D' R U R U' R U' R'", "U2 R' F R U R' U' R' F' D' R U R' D R2", "U2 R U R' U' R U R2 D' R U R' D R U R U2 R'", "R U R' U R U' y R U2 R' U R U R' F'", "U R U R2 F' R U2 R U2 R' F R U' R'", "U' R U R' U R2 D R' U2 R D' R2", "U R' U R U2 R' U R2 D R' U R D' R'", "U2 R' U' F' U F R U R' F R U R' U' F' U R", "U' R' U2 R U F R' U R U' F'", "U R U R' U R F U' R' U R U F' U R'", "R' U' R U R2 U' R' U' R U D' R U R' D R'", "U' R U R' U R2 D r' U2 r D' R2"],
    "6": ["F R' U2 R F' R' F U2 F' R", "R' U2 R U2 R' U R U2 R' U r' F R F' r", "R U R' U R U' R D R' U' R D' R2", "U' R U R' U R' D' R U R' D R U' R U2 R'", "R' U2 R' D' R U R' D R U' R U R' U R", "U' R2 D' R U' R' D R U' R U R' U R", "U R U R' U R' F R F' R U' R' F' U F R U' R'", "U' R U' R' U' R U' R' U2 R U R2 D' R U2 R' D R", "U2 R U2 R2 F R F' R' U' F' U F R2 U' R'", "U2 R' U' R U' R2 F' R U R U' R' F U2 R", "U' R2 D' r U2 r' R U R' D R U' R U R' U R", "F R U R' U' R' F' U2 R U R U' R' U R' U R"],
    };

    var zbllas = {
    "1": ["U' R U2 R' U' R U' R'", "U2 R' U' R U' R' U2 R", "R U R' U R' U' R U' R' U2 R U R U' R'", "U' R' U' R U R U2 R' U' R U' R' U R' U R", "U2 R' U' R2 U R2 U R2 U2 R2 U2 R", "U' R U2 R2 U' R' U R U' R' U' R2 U R", "U2 R U R' U R U2 R' U' R U2 R2 U' R2 U' R2 U2 R", "U2 R' U' R U' R2 U' R' U' R' U R U R U' R", "U' R' U' R U R U2 R' U' R' U R U' R U' R'", "U' R U R' U' R' U' R U R U' R' U' R' U R", "R U R' U R' U' R2 U' R2 U2 R", "U' R U' R2 U' R U' R' U2 R' U2 R' U' R U' R2"],
    "2": ["U R U2 R2 U' R2 U' R' F U' R' U' R U F'", "U F R U R' U' R U R' F R' F' R U' F'", "U2 R U R' F' R U2 R' U' R U' R' F R U' R'", "U' R' U R2 U2 D R' U' R U' D' R2 U' R", "F U R U' R' U R' F R2 U' R' F' U r U' r'", "R' U' R U' L U' R' U L' U2 R", "U2 R U R' U' R' U' F U R2 U' R' U R U' R' F'", "U2 R U' R' U2 R U' R' U2 R' D' R U R' D R", "R' U' R' F R F' U R U' F R U R' U' R U R' U' F'", "F R' F' R U R U' R2 F R U R' U' F' U R", "U' R' F' U' F U R F R U R' U' R U R' U' F'", "U R U R' U R U' R' U r' F R F' r U2 R'"],
    "3": ["R2 D R' U2 R D' R U' R2 U' R' U R' U R", "U2 R2 D' R U' R' D F R U R U' R' F' R", "R2 D R' U2 R D' R2 U' R U' R'", "U2 R U R' F' R U2 R' U2 R' F R2 U' R'", "U F R U' R' U' R U2 R' U y' R' U' R U' R'", "U R' U' R U' R U R D R' U' R D' R U2 R", "U R U2 R2 D' R U2 R' D R2 U' R' U R U' R'", "U2 R' U' F' R U R' U' R' F R2 U' R' U R", "U2 R U R' F' R U R' U' R' F R2 U R' U' R U' R'", "U F U R' U' R F' U' R' U2 R", "F R U' R' U R U R' F' U R' U' F U R U' R' F' R", "R2 D r' U2 r D' R2 U' R U' R'"],
    "4": ["U' R' U' R U' R' U R U' R' U R F U' R' U2 R U F'", "L' U R U' L U R'", "U R U2 R' U' R U R D r' U2 r D' R2", "U R2 F R' U R U' F' R2 U2 R' U' R U R", "R' U2 F U R U2 R' U R U R' F' U R", "U2 R2 D' r U2 r' D R U R U' R' U2 R", "U2 R2 D' R U2 R' D R U R U' R' U2 R", "U R U2 R' U' R U R D R' U2 R D' R2", "F U R U' R' U R U' R2 F' R U2 R U2 R'", "R' U2 R' F' R U R U' R' F U2 R", "R' U' R D' R U' R' U R2 U R' U' R2 D", "R' F R U R' U r U r' U2 F' U' R"],
    "5": ["U' R U R' U R' F U' R2 U' R2 U F' U R", "F' r U R' U' r' F R L' U R U' L U R'", "R U2 R' U' R U R' U2 R' F R U R U' R' F'", "U' R' U' R U' R' U y' R' U2 R U' R' U' R B", "U2 R' U' R U R' F R U R' U' R' F' R2", "R' U' R U' R2 D' R U2 R' D R2", "U' R' U' R U' R2 D' R U R' D R U R", "U' R U2 R' U' F' R U R' U' R' F R2 U' R'", "R U2 R' U2 r' F R F' M'", "U R' U2 R' D' R U R' D R2 U' R' U2 R", "U' R U R' U' R2 U R U R' U' D R' U' R D' R", "R' U' R U' R2 D' r U2 r' D R2"],
    "6": ["R' F U2 F' R F R' U2 R F'", "U' R U2 R' L' U2 R U' R' U2 L R U2 R'", "U' R' U' R U' R' U R' D' R U R' D R2", "R' U' R U' R' U R' D' R U' R' D R U2 R", "U' R U2 R' U R' D' R U' R' D R U' R U' R'", "R2 D R' U R D' R' U R' U' R U' R'", "U R' D' R U2 R' D R2 U' R' U2 R U R' U R U R'", "U2 R U R' U' R' F R U2 F' U' F U' R U R' U' F'", "R' U2 F' R U R' U' R' F R2 U R' U R", "U R2 D R' U2 R D' R' U' R' U R U' R' U R U2 R'", "U' R' U' R U' R' U R' D' R U' R' r U2 r' D R2", "R' U' R U' R U R' U' R' U2 F R U R U' R' F'"],
    };

    var antipll = {
    "1": ["f R U R' U' f' R' U' R' F R F' U R", "R' U2 R U R' F' U F R U2 F R U R' U' F'", "r U' r U2 r U2 r2 U2 R2 U2 r U2 r' U r'", "M U R U R' U' M2 U R U' r'", "M' U2 M U2 M' U M U2 M' U2 M"],
    "2": ["U' R' U R U R2 F R F' U y' R' U' R U R' U R f z'", "U' F R U R' U' R U R' U' F' R' U' R U' R' U F' U F R", "U r' U2 R U' R' U r U2 r2 F R F' r U' R' U2 r", "R U R2 U R2 U2 R F R F' U2 F' U F U' R", "r D' F2 R2 U' R U2 R' U R2 F2 D r'"],
    "3": ["U2 R U' R2 D' r U r' D R2 U' R' U' R U R' U' R U' R'", "U R U2 R' U' F' U F R U' R' U R' F R U R' U' F' U R", "R' D' r U' r' D R2 U R' U' F' U2 F", "U' R' F' U2 F U' R U' R' U' R U R' U2 F' U F R", "U2 F' U2 F U R U' R2 D' r U r' D R", "R U R' U' R' F R F' R U2 R2 F R F' R U2 R'", "U' F U R' U2 R2 U R2 U R U R' U' F' U F R F'", "R D' F2 R2 U' r U r' U R2 F2 D R'", "U' F B' U R' U R' U2 R U2 R U2 R y L' U R", "R U' R2 F2 U' R F R' U F2 R2 U R'", "U2 F R U2 R2 F2 R U2 R U2 R' F r2 F r U' r", "U F R' F R2 U R' U' F2 U' r U' r' F"],
    };

    var onelll1 = {
    "1": ["F U2 R U' R' U' F' U2 F U' R U' R' U F'", "U2 R' F R U2 y' R' U' R' U R U2 R' F R F'", "U R' F' U' F U R2 U2 R2 F R F' R U2 R'", "U2 F R U R' U' F' R U2 R2 F R F' R U2 R'", "U2 F U R U' R' U R' F R F' R U2 R' F' r' F r", "U' R' F R U2 R' F' R U r U R' U R U2 r2 F r", "U R' F' U' F U' R U R' U R U' R' F' U' F U R", "U' R' U' R U' R' U F' U F R F R U R' U' F'", "U2 r' U2 R U R' U r2 U2 R' U' R U' r'", "r U2 R' U' R U' r2 U2 R U R' U r", "R' U' R F R' F' U F R F' R U R' U' R' F R F'", "r' U' r U' R' U r' F R F' R' F R F' U r"],
    "2": ["r' U' r U' R' U r' R2 U' R' U F' U F r", "U' F U R U2 R' U2 F R U R' U' F' R U2 R' U' F'", "R' U' R F R' F' U F R2 U' R' U R U R' F'", "U F R U' R' U' R U R2 F' U' F R F' R' U R", "R' F R U R U2 R' U r U2 r' U' F' R U2 R'", "U2 R' F' U' F U R U' r U R' U R U' R' U R U2 r'", "U R' F' R2 u2 R' F' R U' R' U R u2 R'", "U R U2 R' F U r U2 r' U' R U2 R' U' R' F' R", "U r U r' U' R2 D r' U2 r D' R2 U r U' r'", "U' R2 F2 r U r' F R2 U' R D r' U' r D' R'", "U2 r' U' R U' R' U2 r U2 R U2 R2 F R F' R U2 R'", "r U R' U' R U2 r' U' R U2 R2 F R F' R U2 R'"],
    "3": ["R U R' F' U R' U' F' U F R U2 F U R U2 R'", "U2 R U2 R' U' F' U2 R' F' U' F U R U' F R U' R'", "U2 R' D' r U r' D R U2 r U' r' U r U r'", "U' R' U' F U R U' F2 U F R U R' F' U' F", "U r U' r' U' r U r' U2 R' D' r U' r' D R", "U' F' U' F R U R D r' U' r D' R' U2 R'", "U R' U' R F U R2 U' R' F' U2 R' U' R U F R F'", "U2 F U R' U2 R2 U R2 U R U R' F R F' U' F'", "U' F r U r' U2 r U R' U2 R U' r' F' U' r' F r", "U2 r' R' F2 R U' R' F2 R2 U R' F r U' r' F2 r", "U2 M' U R U R' U r' R2 U2 R2 F R F' r U r'", "U2 F R U' R' U' R U R' F' U' r U r' R U R' U' r U' r'"],
    "4": ["U R' U R U2 R2 U' F' U F R U F' U' F U R", "R U R' U' R' F R2 U R' U' F' R' F' U' F U R", "R' F R F' U2 F' U F2 R' F' R2 U' R'", "U' F R' F' R U2 R U' R' U F2 r U r' F", "R U2 R' U2 R' F R F' U2 R' U' F' U F R", "U2 r' U2 R U R' U r F R U' R' U R U2 R' U' F'", "U' R U R' U R' U' F' U F R F' U2 F R U' R'", "R U2 R' U2 R' F R F' R U R' F' U2 F R U' R'", "R U R' U' R' F R F' r' U2 R U R' U r", "F R U2 R' F R U R' U' R U R' U' F' U F'", "U F' r U r' U2 r' F2 U2 R U R' U r", "U F R' F' R U2 R U' R' U2 F' U' F U' R U' R'"],
    "5": ["U2 M U R U R' U' M' R' F R F'", "U F R U' R' U R U R' F' U2 F R U R' U' R U R' U' F'", "U2 R' U2 R F U R' U' F' U F U R2 U' R' F'", "U2 R2 F R F' R U2 R2 F R F' R U' R' U' R", "U2 M U r U2 r' R U' R' U' R' F R F' M'", "U' F' U' F U r U r' U2 M' U M", "U R' U' F' U F R U2 R U R' F' U' F U R U2 R'", "U' R' U2 R2 U R2 U F R F' U2 R' F R F'", "F R' F' R U R U' R' U' F R U R' U' F'", "U2 R' U2 F R U R' U' F2 U2 F R", "U2 R' U' F U R2 U' R' F' U R U R2 F R F'", "U2 M' U' M U2 r U' r' U2 F' U2 F"],
    "6": ["U' R' U' F' U F2 R U R' U' F' U R", "U R' U R U R' U R' F R F' U F' U2 F U2 R", "U' R' U' F U r U2 r' R U R' F' R", "U F R U' R' U' F R U R' U' F' R U R' F'", "U2 R' U' F' U r' F r U F U R U2 R' U' R", "U' r' U' F U R U' R' F' r U2 M U' M'", "U2 F U R U' R' F' U R' F R U R' U' F' U R", "U R U2 R' U' F' U' F U R U2 R' F U R U' R' F'", "U' F R U' R' U' R U R' F' U2 R' F' U' F U R", "U F U2 R' F' U' F U R2 U2 R' F'", "U2 R' r U' r' U F U R' F R U' F' U' R", "U2 M' U M U2 R' F R U2 F U2 F'"],
    };

    var onelll2 = {
    "1": ["U' R U2 R' U2 R' F R F' U' R' U' F U R U' R' F' R", "U' r U R' U R U2 r' U F R U R' U' R U R' U' F'", "R U2 R' F R' F' R2 U2 R' F U R U' R' F'", "U R U2 R' F R' F' R2 U2 R2 U' F' U F R", "U2 r U R' U R U2 r2 U' r U' R' U R r' U r", "U F U' R U R' U F' U2 F U R U R' U2 F'", "U' F U R U' R' F' R' F' U' F U' R U R' U R", "R' U' F' U F R U R' U' R U' R' U F' U F R", "U2 r U R' U R U2 r2 U' R U' R' U2 r", "r' U' R U' R' U2 r2 U R' U R U2 r'", "U r2 F2 R2 U2 r' U r U2 R2 F' r U' r", "U' R U R' U' R' F R2 U R' U2 R' F R F' R U R' F'"],
    "2": ["U r' U' R' F R F' R' F R U r F U' F'", "U' r U2 r' U2 R' F R F' U' F' U' F U r U r'", "r U R' U' r' R U R U' R' U' F R U R' U' F'", "U F U R U' R' F' U R U R' U' M' U R U' r'", "U r' U' F' U F r2 U R' U R U2 r'", "R U R' U R' F R F' U2 M' U R U' r'", "U' r' U2 R U R' U r U' F U R U' R' F'", "U' r U2 R' U' R U' r2 F' U' F U r", "U' R U2 R' F U' F' r U' r' U R' F2 R U F", "F U R U2 R' F R U R' U' F' R U R' F'", "U' x' R' F2 R U r U2 r' U' R' F2 R x", "U' R U2 R2 F R F' U2 M' U R U' r'"],
    "3": ["F U R U' R2 F' U' F R F' R' U R", "U' R' U' F' U F2 R U R' F' R F U' F'", "R U R2 F' U' F U R U2 R' F R F'", "U' F' U' F2 R U R' U' F' U2 F R' F' R", "F R' F' R U2 R' U' F' U F R2 U' R'", "U' R' F R F' U2 F U R U' R' F2 U F", "F R U R' U' F' R U2 R' U2 F' U2 F U R U R'", "U' R2 F R F' U F U R U' R' F' U R U' R' F' U F R", "U' R' F R F' U' R' F R F' R U2 R' F' U' F", "U' F R U' R' U R U2 R' F' U' F' r U r'", "U' R' F R U R' F' R F U' F' U2 F U R U' R' F'", "R U2 R' F' U2 F R U' R2 F R F'"],
    "4": ["U R' U R U' R2 F R2 U R' U' F2 U' F U R", "U2 r U' r' U M' U R U' R' U2 M F' U F", "U' R' F' U' F U R U R U R' F' U F U R U2 R'", "F R U R' U' F' U' F' r U R' U2 r' F2 R", "U' R U R2 F R F2 U' F U R U R' F' U F", "F' r U' r' F2 U' R U R' U2 R' F R F'", "U' r' R U' R' F2 R U R' F2 r U F U' F'", "U2 R' F R U2 F U2 R U' R' F' U' R' F2 R", "U' R' F R U' F' U' R U R' F' r' F r2 U r'", "U r U R' U R U2 r' U F R U' R' U' R U R' F'", "r' U' R U' R' U2 F2 r U2 r U' r' F", "U' F R U' R' U R U2 R' U2 R' F R F' R U R' F'"],
    "5": ["R' F R U R' U' R' F' R F U' F' U2 R' U' F' U F R", "U' R' F R U R' U' F' U R F U R' F R F' U' F'", "U2 F R U' R' U' R U' R' F' U F R U R' U F'", "F U R U' R' F' U F U R U2 R' U' R U R' F'", "U R' F R F' U2 R' F R F' U F' U F", "U' R U2 R' U' R' F' U' F U R U2 R' F R F'", "U' R U R2 U' R' F R2 U' R' U2 F R F' R U R' F'", "U' R' F' U' F U' R U' R' F' U F U' R", "U' R' F R F' U R U R' U F2 r U r' U F", "U' R U2 R' U' R U R' F' U2 F R U' R2 F R F'", "U2 F R' F' R U2 R U2 R' r' U' R U' R' U2 r", "U F R U' R' U' R U R' F' U' F R U R' U' F'"],
    "6": ["U' R' U' F' U F2 R U R' U' F' U R", "U R' U R U R' U R' F R F' U F' U2 F U2 R", "U' R' U' F U r U2 r' R U R' F' R", "U F R U' R' U' F R U R' U' F' R U R' F'", "U2 R' U' F' U r' F r U F U R U2 R' U' R", "U' r' U' F U R U' R' F' r U2 M U' M'", "U2 F U R U' R' F' U R' F R U R' U' F' U R", "U R U2 R' U' F' U' F U R U2 R' F U R U' R' F'", "U' F R U' R' U' R U R' F' U2 R' F' U' F U R", "U F U2 R' F' U' F U R2 U2 R' F'", "U2 R' r U' r' U F U R' F R U' F' U' R", "U2 M' U M U2 R' F R U2 F U2 F'"],
    };

    var onelll2 = {
    "1": ["U' R U2 R' U2 R' F R F' U' R' U' F U R U' R' F' R", "U' r U R' U R U2 r' U F R U R' U' R U R' U' F'", "R U2 R' F R' F' R2 U2 R' F U R U' R' F'", "U R U2 R' F R' F' R2 U2 R2 U' F' U F R", "U2 r U R' U R U2 r2 U' r U' R' U R r' U r", "U F U' R U R' U F' U2 F U R U R' U2 F'", "U' F U R U' R' F' R' F' U' F U' R U R' U R", "R' U' F' U F R U R' U' R U' R' U F' U F R", "U2 r U R' U R U2 r2 U' R U' R' U2 r", "r' U' R U' R' U2 r2 U R' U R U2 r'", "U r2 F2 R2 U2 r' U r U2 R2 F' r U' r", "U' R U R' U' R' F R2 U R' U2 R' F R F' R U R' F'"],
    "2": ["U r' U' R' F R F' R' F R U r F U' F'", "U' r U2 r' U2 R' F R F' U' F' U' F U r U r'", "r U R' U' r' R U R U' R' U' F R U R' U' F'", "U F U R U' R' F' U R U R' U' M' U R U' r'", "U r' U' F' U F r2 U R' U R U2 r'", "R U R' U R' F R F' U2 M' U R U' r'", "U' r' U2 R U R' U r U' F U R U' R' F'", "U' r U2 R' U' R U' r2 F' U' F U r", "U' R U2 R' F U' F' r U' r' U R' F2 R U F", "F U R U2 R' F R U R' U' F' R U R' F'", "U' x' R' F2 R U r U2 r' U' R' F2 R x", "U' R U2 R2 F R F' U2 M' U R U' r'"],
    "3": ["F U R U' R2 F' U' F R F' R' U R", "U' R' U' F' U F2 R U R' F' R F U' F'", "R U R2 F' U' F U R U2 R' F R F'", "U' F' U' F2 R U R' U' F' U2 F R' F' R", "F R' F' R U2 R' U' F' U F R2 U' R'", "U' R' F R F' U2 F U R U' R' F2 U F", "F R U R' U' F' R U2 R' U2 F' U2 F U R U R'", "U' R2 F R F' U F U R U' R' F' U R U' R' F' U F R", "U' R' F R F' U' R' F R F' R U2 R' F' U' F", "U' F R U' R' U R U2 R' F' U' F' r U r'", "U' R' F R U R' F' R F U' F' U2 F U R U' R' F'", "R U2 R' F' U2 F R U' R2 F R F'"],
    "4": ["U R' U R U' R2 F R2 U R' U' F2 U' F U R", "U2 r U' r' U M' U R U' R' U2 M F' U F", "U' R' F' U' F U R U R U R' F' U F U R U2 R'", "F R U R' U' F' U' F' r U R' U2 r' F2 R", "U' R U R2 F R F2 U' F U R U R' F' U F", "F' r U' r' F2 U' R U R' U2 R' F R F'", "U' r' R U' R' F2 R U R' F2 r U F U' F'", "U2 R' F R U2 F U2 R U' R' F' U' R' F2 R", "U' R' F R U' F' U' R U R' F' r' F r2 U r'", "U r U R' U R U2 r' U F R U' R' U' R U R' F'", "r' U' R U' R' U2 F2 r U2 r U' r' F", "U' F R U' R' U R U2 R' U2 R' F R F' R U R' F'"],
    "5": ["R' F R U R' F' R F U' F' U2 R' U' F' U F R", "U' R' F R U R' U' F' U R F U R' F R F' U' F'", "U2 F R U' R' U' R U' R' F' U F R U R' U F'", "F U R U' R' F' U F U R U2 R' U' R U R' F'", "U R' F R F' U2 R' F R F' U F' U F", "U' R U2 R' U' R' F' U' F U R U2 R' F R F'", "U' R U R2 U' R' F R2 U' R' U2 F R F' R U R' F'", "U' R' F' U' F U' R U' R' F' U F U' R", "U' R' F R F' U R U R' U F2 r U r' U F", "U' R U2 R' U' R U R' F' U2 F R U' R2 F R F'", "U2 F R' F' R U2 R U2 R' r' U' R U' R' U2 r", "U F R U' R' U' R U R' F' U' F R U R' U' F'"],
    "6": ["F R U R' U2 R U2 R' F' U' F U R U R' U F'", "U' R' U' F' U F R r U R' U' r' F R2 U R' U' F'", "U2 F U R U2 R' U R' F R F' U' F' r' F2 r", "F R U R' U2 R U F R U R' U' F' U2 R' U F'", "U' r U' r' F U F U' R U R' U' F'", "U' R U R' U R U R2 D' r U r' D R2 U R'", "U' F' U2 F U' R U R' U F' U F2 R U' R' U' R U R' F'", "F R U R' U y' R' U2 R' F R F'", "F R' F' R U' F' U' F2 R' F' R2 U2 R'", "r' U2 R U R' F U F' U' R' F' R U r", "U R2 F R F' U2 R' F R F' R' F R F' R", "U2 F R' F' R U R U' R' U2 R' F' U' F U R"],
    };

    var onelll3 = {
    "1": ["U' R U R' U R' U' F' U F2 R F' R U R' F' U F", "U' R2 F R F' U2 R U' R' F' U F U R U R' U2 R", "U' R' F R F' R U2 R' U' F' U' F2 R U R' U' F'", "U F U' R U R' U2 F' U F U R U2 R' U F'", "F' r U' r' F2 U' R U R' U2 M' U R U' r'", "U2 R' U F' U2 F U R U R' U2 F' U F U' R", "F R' F' R U R' F R2 U R' U' y' R' U R' U R", "R U2 R' U R U' R' F' U F U R U' R2 F R F'", "U r' U' R U' R' U2 r U2 r' U2 R U R' U r", "U2 r U2 R' U' R U' r' U2 r U R' U R U2 r'", "R U R' U R' F R U R' U' F' U R U R' F R F'", "r' U' r U2 r' U R U2 R2 U' R U' R' U2 R U' r"],
    "2": ["U R U2 R2 F R F' R U2 R' U' F R U R' U' R U R' U' F'", "r' F U' R U' R' U2 r F U R U' R' U' F'", "U' F U R U' R' F' U' r U r' R U R' U' r U' r'", "U r U2 R2 F R F' R U' R' U2 R U2 r' U2 r U' r'", "R' U2 R' D' r U' r' D R F' U2 F U R", "U2 r U' r' F2 R U' R' U R U' R' U' F' U2 r' F r", "R U' R' U R U' R' U' F' U2 r' F r2 U' r' F2", "R U' R2 U' F' U F2 R F' U2 R U R' U R U R'", "U M' U M R U2 R2 F R F' r U2 r'", "U r U2 r' F R' F' R2 U2 R' M' U' M", "r' U' r U' R' U M U r U' F R U R' U' F'", "R U R' U' R' F R U' R' F R F' R U2 R' U' F'"],
    "3": ["U2 R' U' F U R U' R' F2 U' F U R", "F R U R' F' U' F R U2 R' U F' U' r U' r' F", "U' M' U M U2 R' F R U F U' F'", "F U R U' R' F' R' U2 R U R' F U R U' R' F' R", "U2 F R U' R' F U R U' R' F' U R U R' F'", "R' F R U' M' U2 r' U' F' U R", "R' F R F' U2 R' F R U y' R2 U R2 U2 R'", "U2 R' U' F U R U' R' F' R U' F R U R' U' F'", "U' F R U2 R2 U' F' U F R U2 F'", "U2 R' U' F' U F R U2 F R U' R' U R U R' F'", "r' U' R' F2 R F' U r F U2 F'", "U2 R' U R2 D r' U r D' R2 U2 R U' R' U2 R"],
    "4": ["U' R' U' F' U F R2 U R' U' R' F R F'", "U F U R U' R' U R U' R' F' U2 F R U' R' U' R U R' F'", "U2 M' U' M U2 r U' r' U' F' U F", "F R U R' U2 R U' R' F R U R' U' F' U2 F'", "U R U R' F' U R' U' F' U F R U2 F R U' R'", "U R U2 R' U2 R' F R F' U2 F R U R' U' R U R' U' F'", "F R' F' R U R U' R' U2 R' U' R' F R F' U R", "U R U2 R' U' F' U F R U' R' U2 R' F' U' F U R", "U R' F' U2 F2 U R U' R' F' U2 R", "U2 F U R U' R' F' U R U R' U' R' F R F'", "U2 F R' F' R2 U' R' U' F R U R2 U' F' U R", "U F' U2 F U2 r U r' U2 M' U M"],
    "5": ["U' r U' r' U2 F' U' r U' r' F2 U r U2 r'", "U' R U2 R' U F' U' F2 R U R' U' F' U R U R'", "U F U R U' R' U' R U' R' F' U' F R U2 R' F'", "R U R' U R' F R F' U2 R' F R F'", "U2 R' U' R' F R F' R U' R' U2 F R U R' U' F' U R", "U' R U R D r' U r R' U R D' R2 U R U R'", "U2 r U' r' F U2 F U' R U' R' F'", "F R U' R' U R U R' F' U' R' U' R U' R' U R' F R F' U R", "U R2 F R F' U2 R U2 R' U' R U R' F' U2 F R", "R U2 R' U F2 r U r' F U R' F R F'", "U' R U' R2 U' F U R U' F2 U F R U R'", "U2 R' U' F' U F R U2 R U R' U' R' F R F'"],
    "6": ["U' R' U2 R U R' U2 R2 D r' U r D' R2 U' R", "U R' U' R' F' U' F U R2 U2 R' U2 F' U F R", "U R' U R2 D r' U r D' R2 U R U R' U R", "U' R' U' F' U F R F R U' R' U R U R' F'", "U' F R U' R' U R U2 R' U' F' U' F R U R' U' F'", "U' F U' R U' R' F' U' F R U R' U R U R' F'", "U' R' U F' U' F R U R' U F' U F R", "R U R' U' R U R' F' L' U' L U' F U' R U' R'", "U' F R' F' R2 U R' F' U' F U' R' F R F' R U2 R'", "U' F U R U' R2 F' U' F R F' R' U' R U R' U R", "U r' U2 R U R' U r R U2 R' U2 R' F R F'", "U2 F U R U' R' F' U F R U' R' U R U R' F'"],
    };
    
    var onelll4 = {
    "1": ["U R' F' U' F U' R U R' U R U R' F' U' F U R", "U R' F' U' F U' R U R' U R F R U R' U' F'", "U' R U2 R2 F R U R' U' F' U R U R' F R F'", "U R' U' F' U F R U' R' U' R U' R' U F' U F R", "U r U R' U R U2 r' U' r' U2 R U R' U r", "U r' U' R U' R' U2 r U r U2 R' U' R U' r'", "U F R U' R2 F2 r U r' F R2 U R' U R U' R' F'", "U r' R2 U R' U R U' R' U r U2 r' U' M'"],
    "2": ["U' F U' R U R' U' F' U' F R U R' U' R U' R' F'", "F R U R' U R U' R' F' U F U R U' R' U F'", "U' R' F' U' F U R U' r U' r2 U r2 U r2 U' r", "F R U R' U' F' r' U r2 U' r2 U' r2 U r'", "F R U R' U' R U R' U' F' R U2 R' U' F' U2 F R U' R'", "R' U R U2 R' U' R U R' U' R' F R F2 U2 F R", "R U2 R2 F R F' R U2 R' U' r U R' U R U2 r'", "U R U2 R2 F R F' R U2 R2 F' r U' r' F2 R"],
    "3": ["U R' F R F U2 R' F' R U2 F2 R U2 R'", "R U R' U R U y R U R' F' U' F U' R U' R' F'", "U R U2 R2 F R F2 U2 F R U' R' U R U' R'", "U R2 F R F' U2 R' U' F' U F R2 U' R' U R", "U R U2 R2 F R F' U F' U F R U' R' U2 R U2 R'", "U' F R' F' R U2 R U' R' U R' F R F' R U2 R'", "R U R' U R U' R' U R' F R F' U2 R' F R F'", "U F R U R2 U' R U' R' U2 F R F' R U R' F'", "R U' R2 D' r U' r' D R2 U R'", "U2 R' U R2 D r' U r D' R2 U' R", "U2 R' F' U' F R' F R2 U' R' U2 R U R' F' R", "R U R' U2 F2 r U r' F U R' F R F'"],
    "4": ["U' F R U R' U' F' R U2 R' U' F' U F R U' R'", "U2 R' F' U' F U R U' R' U' F U R U' R' F' R", "U2 F R' F' R U2 R U2 R' U R' U' F' U F R", "U' F' U' r' F r U' F U r U R' U' M", "U2 F U R' F R F' U2 R' F R F' R U R' F'", "U' R' U2 R U R' F' U F R2 U R' U' R' F R F'", "U' R U2 R' U' F' U F U R' F R F r U r' F", "U2 F R U' R' U2 R U R' U R' U' F' U F R F'", "U' F U R U2 R' U' R U2 R2 F R F' U' F'", "U' R' U' R' F R F' U F R U R' U' F2 U F R", "U' R U2 R2 F R F' U2 R' F R F'", "R' F' r U2 r' F2 R U' R' U' R' F R U R"],
    };
    
    var onelll5 = {
    "1": ["U' F R U R' U' R U2 R' U' M' U R U' r' U' F'", "U2 R U2 R' U2 R' F R2 U R' U2 R' F R F' R U R' F'", "U' R' U2 R U R' F' U F R F R U R' U' F'", "U' F R U R' U2 R' F R F' U R U R' F'", "r U r' U2 R U R' U' R U' R' r U' r'", "U' r U r' R U R' U R U' R' U2 r U' r'", "U2 F R U' R' U2 R U R' F' U F U R U' R' F'", "R U R' F' U' F R U R' U2 R' F R F'", "U2 r' U' R U2 R' U2 r U2 r' U r", "U' F R U R' U' F' f R U R' U' f'", "U R' U' R' F R F' U R U R' U' F' U F R", "U' r U r' R U R' U R U2 R' U' R U' R' r U' r'"],
    "2": ["r' U2 R U R' F U r F U' F'", "U R U R' y r' U' F' R U' R' U2 r", "U2 r U2 R' U' R U' r' f R U R' U' f'", "U2 F R U R' U' F' U2 r U R' U R U2 r'", "U' R' F' U' F U R r' U2 R U R' U r", "F R U R' U' F' U' r U2 R' U' R U' r'", "U r U R' U R U2 r' U F U R U' R' F'", "U r' U' R U' R' U2 r R' U' F' U F R", "U R U R' U F' r' F2 r F U' R U' R'", "U' R' U' F' U F R r U r' R U R' U' r U' r'", "U' r D' R2 U' R U2 R' U R2 D r'", "U' r' D R2 U R' U2 R U' R2 D' r"],
    "3": ["U x' R' F2 R U2 F2 R U' R' F2 U R U R' x", "U R U2 R' F2 U2 R' F R U2 F' R' F' R", "U' F R U R' U' R U2 R' F' U2 F R' F R F2", "U2 R U2 R' F R' F' R U' R U R' U2 R' F R F'", "R U R' U' R U F R U R' U' F' U2 R2 F R F'", "U R' F' U' R U R' U' R' F R2 U' R2 F R F' U R", "U' F R' F' R U R U' R2 F' U' F U' R U R' U R", "R' F R F' U2 R' F R F' U y' R' U' R U R' U R", "U2 R U' R2 D' r U r' D R2 U R'", "R' U R2 D r' U' r D' R2 U' R", "R' F R U' R' U2 R U R2 F' R F' U F R", "U2 R' F R F' U R U R2 F R F' U F' U F"],
    "4": ["R' F R U R' U' F' U R U R' U' F' U F R", "U2 R U R' F' U' F U R U2 R' F U R U' R' F'", "U2 F R U' R' U' r U R' U R U2 r' R U R' F'", "U' R' F R U R' U' F2 U' F U R U2 R' U' R", "U' R' r U' r' F R U F U' R U R' U' F'", "U M' U R U' r' U2 R' F R y' R' U R' U R", "R' F R U R' U' F2 U' R U R' U R U2 R' F R", "U' r' U' r R' U2 r' F R F' U2 R U R' U2 r", "U' F R U R2 U' F' U F R U R' F R F' U' F'", "R' F' U' F U' R U R' U F R U R' U' F' U R", "U2 R' F R F' U' F2 r U r' U F", "U r' U' R U2 R' U2 F R F' r U R' U r' U r"],
    "5": ["U' F R U' R' U F R U R' U' F' R U2 R' U' F'", "U2 R U2 R' U' F' U F U R' U' F' U F R2 U' R'", "U F U R U' R2 F' U' F R F' U' R' U2 R", "U' R U R' U' R' F R F' r' U r2 U' r2 U' r2 U r'", "U r U' r' F R' F' R U2 r U' r' U' F' U F", "U' R U2 R' U2 R' F R U' R' F R F' U R U R' F'", "U' R U2 R2 D' F' R U' R' F r U r' D R", "U2 r U' r' F U2 F U2 R U' R' U' R U R' F'", "U' r' U' F2 R U' R' U2 r U' F U' F'", "U' R U2 R' U2 R' F R F' U2 F U R U' R' F'", "U' F U R' U' F' U F R U R U2 R' U' R U R' F'", "F R U R' U2 R' F R F' R U2 R' U' F'"],
    "6": ["U F U R U2 R' U' R U R' U R' F R F' U' F'", "U R U R' U R U' R2 F' U' F U R U2 R' F R F'", "U2 R' U' F' U F2 R U R' F' R U F U2 F'", "F' U' F U r U r' U2 R' F R F' r U r'", "U' R' F R F' r U r' U2 R' F R U y' R U' R'", "R' U2 R U F R' F' U F R2 U R' U' F'", "F R U' R' U R U R' F' U' R U2 R' U2 R' F R F'", "U2 R' D' r U' r' F' R U R' F D R2 U2 R'", "U2 F R U' R2 F R F' U' F' U r' F r", "U R U R' U F' U2 F R U' R2 F R F'", "U F' U' r U' r' F2 R U2 R' r U' r' U r U r'", "U F U R U2 R' F R' F' R U2 R U' R' F'"],
    };

    var onelll6 = {
    "1": ["U' F R U' R' U2 R U R' F' U R' U' F' U F R", "F R U R' U' F' R U R' F' U2 F R U' R'", "U' r' U' R U' R' U2 r F R U R' U' R U R' U' F'", "F' U' F R U R' F' U' F U R U R' U' F' U2 F", "f R U R' U' f' U' F R U R' U' F'", "U' R' U' F' U F R U R' F' U' F U R", "U r U R' U R U2 r2 U' R U M' U' R' U R", "R U R' U' M' U R U' r2 U2 R U R' U r", "U r U R' U R U2 R' U' M U2 M' U' M", "f R U R' U' f' R' F' U' F U R", "U r' R2 U R' U r U2 r' U M'", "U' R' U' F' U F R F R U R' U' F'"],
    "2": ["U2 F R U R' U' R U R' U' F' U' F R U R' U' F'", "U2 r U R' U R U2 r2 U' R' F R F' U r", "U M' U M U R U R' U R' F R F' r U2 r'", "U2 F R U R' U' F' r' U2 R U R' U r", "U2 F R U R' U' R U' R' F' U' r' F U' F U r", "U2 B' R' U' R U R' U' R U y R U' R' F' U' F U R", "U2 F U' R U R' U' F' U2 R' F r U' r' F' R", "U' F U R U' R' F' U' F U R U' R' U R U' R' F'", "U' L U2 F U R U' R' U' R U' R' U' F' r' x", "U2 F R U R' U' R U R' U' F' R' F' U' F U R", "U' R' U' R' F R F' U R U F R U R' U' R U R' U' F'", "U2 r' U2 R U R' U r U R U2 R2 F R F' R U2 R'"],
    "3": ["R U R' U' R' F R F' U2 R' U' F' U F R", "U2 F' U' F U2 R U R' U2 F' U F R U R' F' U' F", "U' R' U' R U F R U R' U' F' U M U' R' U r", "U' R' U' F' r' U' F U F r U' F U R", "U F U R U R' F' U F R U R' U F'", "U' r' U' r U r' U2 F' U2 F U2 r U2 r' U r", "F R U R' U' r U' r' U R U R' U r U' r' F'", "R' U' R U' R' U' R2 D r' U r D' R2 U' R", "U' F R U R' U' R U R' F' U' F' r U r'", "F R' F' R U R U' R' U' R U R' U' R' F R F'", "R' F' U2 F2 U R U' R' F' R U R' U R", "U' F R U R' U' F' U R U R' F' U F R U' R'"],
    "4": ["U' r U' r' F U r F R' U' R F' r'", "U' F R U R' U' R U R' U2 R' F R F' R U R' F'", "U2 M' U R U' r' U' r U' r' U y' R U R U' R'", "F U R' U' F' U F R2 U' R' U R U R' F'", "U' R U' R' U2 r U' r' R U R' U r U' r' F' U F", "U' R2 F R F' R U R' F' U2 F R U R' U2 R", "U' R U R' y R' F r U2 r' R U R' F' R", "U r U' r' U M' U2 R U r' F' U F", "U2 R' U' F U F' R U' R' F' R U2 M' U' M", "U' R2 F R F' U2 R' U' F' U F R2 U2 R' U2 R", "F U R U' R' F' U' r U' r' U' r U r' F' U F", "U' R' F R F' U2 F' U2 F R U2 R' U2 R' F R F'"],
    "5": ["U' F R U R' U' F' U2 F R U' R' U' R U R' F'", "F U R U2 R' U' R U R' U R' U' F' U F R F'", "U2 R U2 R' U R U R' F R' F' R2 U2 R2 F R F'", "U' R' U F' U F R U R' F' U F U R", "U2 F R U R' U' R' U R U2 r' U r U F' r' U' r", "r U R' U' r' R U2 R' U' F' U F R2 U' R'", "U' R U' R2 D' r U r' D R2 U' R' U' R U' R'", "U' R' U F' U2 R U R' U' R' F R2 U R' F' U2 F R", "U2 F R U' R' U' R U R' U' R' F R F' R U R' F'", "U' R' F R U' R' U2 R U R' F2 U F R", "U F R U' R' r U R' U R U2 r' U' R U R' F'", "U' F R U' R' U R U R' F' U2 R' U' F' U F R"],
    "6": ["U2 r U2 R2 F2 r F R U2 r2 F2 R", "U2 R' F2 R2 U2 R' F R U2 R2 F2 R", "U R U2 R' U' R U R2 F R F' U2 R' F R F'", "U' R U2 R2 F R F' U' F' U' F R U R' U' R U' R'", "U R' U' R U' R' U' F' U' F R U2 R2 F R F' U R", "U' R2 F R F' U' R U' R2 F R F' R U' R' U2 R", "r U R' U R U2 r' U' R U2 R' U' F' U F R U' R'", "U' R' F R U R' U' F' U R U' r' U2 R U R' U r", "F U R U' R' F' U' F U R U2 R' U' R U R' F'", "U' R' F R F' U' F R' F' R2 U' R2 U' F' U F R", "r U r' U2 r U' r' F R U2 R' U2 r U2 r' F", "U2 F R U' R' U' R U R' F' U' R U R' U' R' F R F'"],
    };

    var onelll7 = {
    "1": ["R U R' F' U2 F R U' R' F U R U' R' F'", "R' F' U' F U R U' F R U' R' U2 R U R' F'", "R U R' U R U2 R2 U2 r U' r' U2 r U r' U2 R", "R U R' F' U' F R U R' U' F' U' F U R U2 R'", "U2 R' U' F' U F R U' R' F' U' F U R", "U F U R U' R' F' U' F R U R' U' F'", "U r F R' U' R F' r' U2 F R U' R' F'", "U2 F' U2 F R U' R2 D' r U' r' D R", "U r' U2 R U R' U r2 U' r2 U r2 U r2 U' r", "r' F' U' F U r F R U R' U' F'", "M U' r U2 r' U' R U' R' M'", "U F U R U' R' F' R' F' U' F U R"],
    "2": ["F U R U' R' F' U F U R U' R' U R U' R' F'", "U' R' U' R' F R F' U R U2 r U2 R' U' R U' r'", "U' R' U' R' F R F' U R2 U R2 F R F2 U F", "U r' U' R U' R' U2 r F U R U' R' F'", "U' R' F r U r' F' R U2 F U R U' R' U F'", "U F R U R' U' R U R' U' F' U F R U R' U' F'", "U2 R' F' U' F U R U R U R2 F R F' y' R' U R", "U2 R U R' U' R' F2 R U2 r U' r' U2 F r U r'", "U' L F U R U R' U R U R' U' F' U2 r' x", "U R' U' F' U F R F U R U' R' U R U' R' F'", "F R U R' U2 F' U' F R' F R F' R U' R' U' F'", "U F R U R' U' R U R' U' F' U2 R' F' U' F U R"],
    "3": ["U' F R U' R' U R U R' F' U2 F U R U' R' F'", "U2 R U R' U2 F' U' F U2 R U' R' F' U' F R U R'", "R U R2 F' U' F U R U2 M' U R U' r'", "U F U R U2 R' F R U R' U' F' U' R U2 R' U' F'", "U' R' U2 R' F R F' U' F' U' F U' R", "U' R U R' U2 F' U' F U2 R' F R2 U R' U' F'", "U2 r D' r2 U' r U r' U r U r' U2 r U' r D r'", "U' R U R' U R U R2 D' r U' r' D R2 U R'", "U' r' U' F' U2 r U' r' F2 r U r' U' r", "U2 R' r U' r' F R U2 F U' R U' R' F'", "R U2 R2 U' F' U F R F' U2 F R U' R'", "U' R' U' F' U F R U2 R' F R U R' U' F' U R"],
    "4": ["U2 R' F R F' U' R' D' r U r' D R", "U F R U' R' F R' F' R U2 R U' R' U R U' R' F'", "F R U R' U' R U R' U' F' U R U R' U' R' F R F'", "U2 R U R' U2 R U' R' F R U R' U' F' U2 R' F R F'", "U2 F R U' R' U' R U R2 F' U' F U R U' F'", "U R U2 R2 U' F' U F R2 U R' U' F' U F R U' R'", "U F' U' F r U r' R U2 R' U r U r'", "R' F R U' R' r U2 r' F' R F U' F'", "M' U M U R' F R U R' F R F U' F'", "U2 R' F R F' U' r U2 r' U' F' U F U r U r'", "U' R' F R F' r U r' U2 R' F R U2 F U2 F'", "U' R' F R F2 U F R' F R F' R U R2 F R F'"],
    "5": ["U R' F' U' F U R U R U R' F' U F R U' R'", "U' B' U' R' U2 R U R' U' R F U R U' R' F' U' f z'", "R' U' F' U F2 R F' U2 R U' R' U2 F' U F", "R U' R' U' M' U R U' r' U2 R' F R F'", "r' U' R U r U2 R' U' R' U R U2 R' F R F'", "U' r' U' R U M' U' F U R U' R' F' U' R' U R", "R' U R2 D r' U' r D' R2 U R U R' U R", "U2 F r U r' U' R U' R' U' r U r' U R U' R' F'", "U2 F R' F' R U R U' R' U R U R' U' R' F R F'", "U2 r U' r' F U F R U' R' U R U' R' F'", "U' R' U' R U' R' F R U R' U' F2 U2 F R", "R U R' U' R' F R F' U2 F U R U' R' F'"],
    "6": ["U' r U2 R2 F2 r F' R U2 r2 F2 R", "U' R' F2 R2 U2 R' F' R U2 R2 F2 R", "U' R' U R U' R' U R U2 R2 F R F' U F' U F R", "r' U2 R U R' F U F' R U' R' F' R U M'", "U F U2 r U' r' U R' F R F' r U2 r' U' F'", "F R U R' U' R U' R' U R U2 R2 F R F' U' F'", "U r' F' r U r' U2 R U R2 F2 R U r", "R U R2 F R F' R U R' F R U R' U' F2 U2 F", "U2 R' F R F' r U' r' U' F' U' F U r U2 r'", "U2 F R U' R' U R U2 R' U' F' U F R U R' U' F'", "U' R' F R U R' U' F2 U2 F U' R U R2 F R F' R", "U' r U' r' F U F U' R U' R' U R U R' F'"],
    };

    var onelll8 = {
        // Add your algorithms here
    };

    var onelll9 = {
        // Add your algorithms here
    };

    var onelll10 = {
        // Add your algorithms here
    };

    var onelll11 = {
        // Add your algorithms here
    };

    var onelll12 = {
        // Add your algorithms here
    };

    var onelll13 = {
        // Add your algorithms here
    };

    var onelll14 = {
        // Add your algorithms here
    };

    var onelll15 = {
        // Add your algorithms here
    };

    var onelll16 = {
        // Add your algorithms here
    };

    var onelll17 = {
        // Add your algorithms here
    };

    var onelll18 = {
        // Add your algorithms here
    };

    var onelll19 = {
        // Add your algorithms here
    };

    var onelll28 = {
        // Add your algorithms here
    };

    var onelll29 = {
        // Add your algorithms here
    };

    var onelll30 = {
        // Add your algorithms here
    };

    var onelll31 = {
        // Add your algorithms here
    };

    var onelll32 = {
        // Add your algorithms here
    };

    var onelll33 = {
        // Add your algorithms here
    };

    var onelll34 = {
        // Add your algorithms here
    };

    var onelll35 = {
        // Add your algorithms here
    };

    var onelll36 = {
        // Add your algorithms here
    };

    var onelll37 = {
        // Add your algorithms here
    };

    var onelll38 = {
        // Add your algorithms here
    };

    var onelll39 = {
        // Add your algorithms here
    };

    var onelll40 = {
        // Add your algorithms here
    };

    var onelll41 = {
        // Add your algorithms here
    };

    var onelll42 = {
        // Add your algorithms here
    };

    var onelll43 = {
        // Add your algorithms here
    };

    var onelll44 = {
        // Add your algorithms here
    };

    var onelll45 = {
        // Add your algorithms here
    };

    var onelll46 = {
        // Add your algorithms here
    };

    var onelll47 = {
        // Add your algorithms here
    };

    var onelll48 = {
        // Add your algorithms here
    };

    var onelll49 = {
        // Add your algorithms here
    };

    var onelll50 = {
        // Add your algorithms here
    };

    var onelll51 = {
        // Add your algorithms here
    };

    var onelll52 = {
        // Add your algorithms here
    };

    var onelll53 = {
        // Add your algorithms here
    };

    var onelll54 = {
        // Add your algorithms here
    };

    var onelll55 = {
        // Add your algorithms here
    };

    var onelll56 = {
        // Add your algorithms here
    };

    var onelll57 = {
        // Add your algorithms here
    };
    
    window.algs = {
    "PLL": pll,
    "ZBLL U": zbllu,
    "ZBLL L": zblll,
    "ZBLL H": zbllh,
    "ZBLL Pi": zbllpi,
    "ZBLL S": zblls,
    "ZBLL AS": zbllas,
    "Anti PLL": antipll,
    "1LLL 1": onelll1,
    "1LLL 2": onelll2,
    "1LLL 3": onelll3,
    "1LLL 4": onelll4,
    "1LLL 5": onelll5,
    "1LLL 6": onelll6,
    "1LLL 7": onelll7,
    "1LLL 8": onelll8,
    "1LLL 9": onelll9,
    "1LLL 10": onelll10,
    "1LLL 11": onelll11,
    "1LLL 12": onelll12,
    "1LLL 13": onelll13,
    "1LLL 14": onelll14,
    "1LLL 15": onelll15,
    "1LLL 16": onelll16,
    "1LLL 17": onelll17,
    "1LLL 18": onelll18,
    "1LLL 19": onelll19,
    "1LLL 28": onelll28,
    "1LLL 29": onelll29,
    "1LLL 30": onelll30,
    "1LLL 31": onelll31,
    "1LLL 32": onelll32,
    "1LLL 33": onelll33,
    "1LLL 34": onelll34,
    "1LLL 35": onelll35,
    "1LLL 36": onelll36,
    "1LLL 37": onelll37,
    "1LLL 38": onelll38,
    "1LLL 39": onelll39,
    "1LLL 40": onelll40,
    "1LLL 41": onelll41,
    "1LLL 42": onelll42,
    "1LLL 43": onelll43,
    "1LLL 44": onelll44,
    "1LLL 45": onelll45,
    "1LLL 46": onelll46,
    "1LLL 47": onelll47,
    "1LLL 48": onelll48,
    "1LLL 49": onelll49,
    "1LLL 50": onelll50,
    "1LLL 51": onelll51,
    "1LLL 52": onelll52,
    "1LLL 53": onelll53,
    "1LLL 54": onelll54,
    "1LLL 55": onelll55,
    "1LLL 56": onelll56,
    "1LLL 57": onelll57,
    };