const DEFAULT_HERO_DATA = [
    { id: "dva", name: "D.Va", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 3, poke: 1 }, antis: { "ザリア": 3, "シンメトラ": 2, "ブリギッテ": 1, "メイ": 2, "ロードホッグ": 1, "ミズキ": 2 } },
    { id: "doomfist", name: "ドゥームフィスト", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "オリーサ": 3, "アナ": 2, "エコー": 2, "トールビョーン": 1, "ブリギッテ": 2, "ファラ": 2, "ロードホッグ": 3, "ソンブラ": 2, "アンラン": 2, "ミズキ": 2, "ジェットパックキャット": 2 } },
    { id: "hazard", name: "ハザード", role: "tank", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 3 }, antis: { "D.Va": 2, "ザリア": 2, "ソンブラ": 2, "ファラ": 2, "エコー": 2, "ゼニヤッタ": 1, "ロードホッグ": 3, "オリーサ": 2 } },
    { id: "junker-queen", name: "ジャンカークイーン", role: "tank", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "キリコ": 2, "アナ": 2, "ジャンクラット": 2, "ルシオ": 2, "ザリア": 3, "モイラ": 1, "ロードホッグ": 2, "ミズキ": 2, "ジェットパックキャット": 2 } },
    { id: "mauga", name: "マウガ", role: "tank", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "D.Va": 1, "リーパー": 3, "ハンゾー": 2, "ソジョーン": 1, "フレイヤ": 1 } },
    { id: "orisa", name: "オリーサ", role: "tank", archetype: 'rush', matchups: { dive: 2, rush: 1, poke: 2 }, antis: { "ザリア": 3, "メイ": 2, "エコー": 1, "ファラ": 2, "シンメトラ": 2 } },
    { id: "ramattra", name: "ラマットラ", role: "tank", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 3 }, antis: { "オリーサ": 2, "ハザード": 2, "ゼニヤッタ": 3 } },
    { id: "reinhardt", name: "ラインハルト", role: "tank", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 3 }, antis: { "シグマ": 1, "オリーサ": 1, "ラマットラ": 3, "ファラ": 2, "エコー": 2, "ルシオ": 1, "バスティオン": 3, "ロードホッグ": 2, "ジェットパックキャット": 2, "ミズキ": 2, "アンラン": 2 } },
    { id: "roadhog", name: "ロードホッグ", role: "tank", archetype: 'null', matchups: { dive: 2, rush: 3, poke: 3 }, antis: { "オリーサ": 3, "マウガ": 2, "ソジョーン": 2, "ハンゾー": 2, "フレイヤ": 1, "アナ": 3 } },
    { id: "sigma", name: "シグマ", role: "tank", archetype: 'poke', matchups: { dive: 3, rush: 3, poke: 1 }, antis: { "ラインハルト": 1, "ラマットラ": 2, "ドゥームフィスト": 2, "ザリア": 2, "ベンチャー": 1, "メイ": 2, "ウィンストン": 3, "ゲンジ": 2, "ソンブラ": 3, "シンメトラ": 3, "アンラン": 2 } },
    { id: "winston", name: "ウィンストン", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 3, poke: 1 }, antis: { "D.Va": 3, "キャスディ": 3, "ジャンカークイーン": 3, "トールビョーン": 3, "ブリギッテ": 2, "リーパー": 4, "ロードホッグ": 2, "ミズキ": 2 } },
    { id: "wrecking-ball", name: "レッキング・ボール", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "マウガ": 2, "キャスディ": 2, "ロードホッグ": 2, "トレーサー": 2, "ソンブラ": 3, "ミズキ": 2, "ジェットパックキャット": 2 } },
    { id: "zarya", name: "ザリア", role: "tank", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "ウィンストン": 1, "メイ": 2, "ファラ": 2, "ラマットラ": 2, "ライフウィーバー": 1, "エコー": 2, "ラインハルト": 2 } },
    { id: "ashe", name: "アッシュ", role: "damage", archetype: 'poke', matchups: { dive: 3, rush: 1, poke: 1 }, antis: { "ハザード": 2, "D.Va": 3, "レッキング・ボール": 2, "ウィドウメイカー": 1, "ソンブラ": 2, "ベンチャー": 2, "ウィンストン": 3 } },
    { id: "bastion", name: "バスティオン", role: "damage", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "トレーサー": 3, "ゲンジ": 2, "D.Va": 2, "オリーサ": 1, "アッシュ": 1, "フレイヤ": 2, "シグマ": 3, "エムレ": 2 } },
    { id: "cassidy", name: "キャスディ", role: "damage", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 3 }, antis: { "ソジョーン": 2, "アナ": 1, "ウィドウメイカー": 2 } },
    { id: "echo", name: "エコー", role: "damage", archetype: 'null', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "トレーサー": 2, "ウィドウメイカー": 2, "アッシュ": 2, "キャスディ": 2, "D.Va": 3, "アナ": 2, "ジュノ": 2, "イラリー": 2, "バティスト": 3, "エムレ": 2 } },
    { id: "freja", name: "フレイヤ", role: "damage", archetype: 'poke', matchups: { dive: 2, rush: 1, poke: 1 }, antis: { "D.Va": 2, "ウィドウメイカー": 3, "ソルジャー": 2, "バティスト": 3, "ウィンストン": 3, "レッキング・ボール": 2, "トレーサー": 2 } },
    { id: "genji", name: "ゲンジ", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 3, poke: 1 }, antis: { "トールビョーン": 3, "ザリア": 3, "ウィンストン": 2, "モイラ": 2, "シンメトラ": 2, "ファラ": 2, "ブリギッテ": 2, "ルシオ": 3, "メイ": 3, "アンラン": 2, "ミズキ": 2 } },
    { id: "hanzo", name: "ハンゾー", role: "damage", archetype: 'poke', matchups: { dive: 3, rush: 3, poke: 1 }, antis: { "レッキング・ボール": 3, "ファラ": 2, "エコー": 2, "ドゥームフィスト": 2, "ウィンストン": 3, "ゲンジ": 3 } },
    { id: "junkrat", name: "ジャンクラット", role: "damage", archetype: 'null', matchups: { dive: 3, rush: 2, poke: 3 }, antis: { "ザリア": 1, "フレイヤ": 2, "ジュノ": 2, "バティスト": 2, "ソジョーン": 1, "ファラ": 3, "エコー": 3, "エムレ": 2, "ジェットパックキャット": 2 } },
    { id: "mei", name: "メイ", role: "damage", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "ファラ": 3, "エコー": 3, "エムレ": 2, "ジェットパックキャット": 2 } },
    { id: "pharah", name: "ファラ", role: "damage", archetype: 'poke', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "エコー": 3, "ウィドウメイカー": 2, "キャスディ": 2, "ソルジャー": 2, "イラリー": 2, "バティスト": 2, "アナ": 1, "D.Va": 3, "エムレ": 2, "ドミナ": 2, "ジェットパックキャット": 2 } },
    { id: "reaper", name: "リーパー", role: "damage", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "キャスディ": 3, "ウィドウメイカー": 1, "エコー": 2, "シグマ": 3, "アナ": 1, "イラリー": 1, "ルシオ": 1, "ファラ": 3, "ジェットパックキャット": 2 } },
    { id: "sojourn", name: "ソジョーン", role: "damage", archetype: 'poke', matchups: { dive: 2, rush: 3, poke: 2 }, antis: { "レッキング・ボール": 2, "ハザード": 1, "ウィンストン": 2, "ゲンジ": 2, "トレーサー": 1, "ソンブラ": 2, "D.Va": 2, "ベンチャー": 1 } },
    { id: "soldier-76", name: "ソルジャー76", role: "damage", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "ウィンストン": 2, "レッキング・ボール": 3, "ゲンジ": 3, "ドゥームフィスト": 3, "トレーサー": 1, "ベンチャー": 2 } },
    { id: "sombra", name: "ソンブラ", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "キャスディ": 1, "キリコ": 3, "ブリギッテ": 3, "ファラ": 2, "エコー": 1, "トールビョーン": 2 } },
    { id: "symmetra", name: "シンメトラ", role: "damage", archetype: 'rush', matchups: { dive: 2, rush: 3, poke: 3 }, antis: { "アッシュ": 2, "ウィドウメイカー": 1, "ソジョーン": 2, "バティスト": 1, "ファラ": 3, "エコー": 2, "フレイヤ": 2, "ジェットパックキャット": 2 } },
    { id: "torbjorn", name: "トールビョーン", role: "damage", archetype: 'poke', matchups: { dive: 1, rush: 2, poke: 3 }, antis: { "ファラ": 3, "オリーサ": 1, "ザリア": 2, "シグマ": 3, "ソジョーン": 2, "フレイヤ": 3, "ゼニヤッタ": 1, "エコー": 2, "ドミナ": 2 } },
    { id: "tracer", name: "トレーサー", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "ソンブラ": 1, "キャスディ": 3, "トールビョーン": 3, "ミズキ": 2 } },
    { id: "vendetta", name: "ヴェンデッタ", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 3, poke: 1 }, antis: { "ロードホッグ": 3, "トールビョーン": 2, "フレイヤ": 1, "ファラ": 1, "エコー": 1, "ミズキ": 2 } },
    { id: "venture", name: "ベンチャー", role: "damage", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "ファラ": 2, "エコー": 2, "トールビョーン": 2, "キャスディ": 3, "ロードホッグ": 1, "メイ": 2, "リーパー": 2, "モイラ": 1, "ブリギッテ": 3, "ミズキ": 3 } },
    { id: "widowmaker", name: "ウィドウメイカー", role: "damage", archetype: 'poke', matchups: { dive: 3, rush: 3, poke: 1 }, antis: { "レッキング・ボール": 3, "ドゥームフィスト": 3, "ソンブラ": 4, "ゲンジ": 2, "トレーサー": 2, "ウィンストン": 3, "アンラン": 3 } },
    { id: "ana", name: "アナ", role: "support", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "ゲンジ": 2, "トレーサー": 1, "キリコ": 2, "ソンブラ": 2, "ウィンストン": 3, "アンラン": 2 } },
    { id: "baptiste", name: "バティスト", role: "support", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "ウィンストン": 3, "レッキング・ボール": 3, "D.Va": 1, "ゲンジ": 2, "ソンブラ": 2, "トレーサー": 2, "ウィドウメイカー": 2, "ベンチャー": 3, "ハザード": 2 } },
    { id: "brigitte", name: "ブリギッテ", role: "support", archetype: 'rush', matchups: { dive: 1, rush: 3, poke: 3 }, antis: { "ファラ": 2, "エコー": 2, "フレイヤ": 2, "ジェットパックキャット": 2 } },
    { id: "illari", name: "イラリー", role: "support", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "ハザード": 2, "D.Va": 3, "ゲンジ": 2, "トレーサー": 1, "ソンブラ": 1, "ウィンストン": 2, "レッキング・ボール": 3 } },
    { id: "juno", name: "ジュノ", role: "support", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 3 }, antis: { "ウィンストン": 3, "レッキング・ボール": 2, "ウィドウメイカー": 1, "ジャンカークイーン": 1, "ゲンジ": 1, "トレーサー": 2 } },
    { id: "kiriko", name: "キリコ", role: "support", archetype: 'dive', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "ウィンストン": 2, "ゲンジ": 1, "ファラ": 2, "エコー": 2 } },
    { id: "lifeweaver", name: "ライフウィーバー", role: "support", archetype: 'poke', matchups: { dive: 2, rush: 3, poke: 3 }, antis: { "ソンブラ": 2, "レッキング・ボール": 2, "ウィンストン": 3, "ベンチャー": 2, "ハザード": 1 } },
    { id: "lucio", name: "ルシオ", role: "support", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "ソンブラ": 2, "モイラ": 1, "キャスディ": 2 } },
    { id: "mercy", name: "マーシー", role: "support", archetype: 'poke', matchups: { dive: 3, rush: 3, poke: 3 }, antis: { "バティスト": 2, "ジュノ": 1, "ウィンストン": 1, "D.Va": 1, "ウィドウメイカー": 2, "キャスディ": 2, "ソルジャー76": 3, "アッシュ": 2, "アナ": 2, "ドミナ": 2 } },
    { id: "moira", name: "モイラ", role: "support", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "D.Va": 2, "ロードホッグ": 1, "キャスディ": 2, "ファラ": 1 } },
    { id: "wuyang", name: "ウーヤン", role: "support", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "D.Va": 2, "トレーサー": 3, "ゲンジ": 2, "ソンブラ": 1 } },
    { id: "zenyatta", name: "ゼニヤッタ", role: "support", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "レッキング・ボール": 2, "ドゥームフィスト": 2, "ジャンカークイーン": 1, "D.Va": 2, "ベンチャー": 3, "ソンブラ": 2, "トレーサー": 3, "ゲンジ": 3, "アンラン": 2 } },
    { id: "anran", name: "アンラン", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "メイ": 3, "キャスディ": 3, "ソンブラ": 2, "キリコ": 2, "リーパー": 2, "ザリア": 2, "ファラ": 1, "ジェットパックキャット": 1 } },
    { id: "domina", name: "ドミナ", role: "tank", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 1 }, antis: { "ヴェンデッタ": 3, "ロードホッグ": 3, "メイ": 2, "ソンブラ": 2, "ゲンジ": 2, "アッシュ": 2, "シンメトラ": 2, "ジャンクラット": 1 } },
    { id: "emre", name: "エムレ", role: "damage", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 1 }, antis: { "ウィンストン": 3, "シグマ": 3, "ウィドウメイカー": 2, "D.Va": 2, "ゲンジ": 2, "ベンチャー": 2, "レッキング・ボール": 1 } },
    { id: "jetpack-cat", name: "ジェットパックキャット", role: "support", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "ソンブラ": 3, "ウィドウメイカー": 3, "アッシュ": 2, "ソルジャー76": 2, "キャスディ": 2, "バスティオン": 2, "エムレ": 2, "D.Va": 1 } },
    { id: "mizuki", name: "ミズキ", role: "support", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "ゼニヤッタ": 3, "エコー": 3, "ファラ": 2, "ジェットパックキャット": 2, "ジャンクラット": 2, "ソジョーン": 2, "アッシュ": 2, "シンメトラ": 2, "ザリア": 2, "ブリギッテ": 2 } }

];

let HERO_DATA = [...DEFAULT_HERO_DATA];
let selectedHeroes = [];
let isRoleQueue = true;
let teamSize = 5; 
let roleOrder = ['tank', 'damage', 'support']; 
let apiImages = {};

let currentEditingHeroId = null;
let currentAddingAntiHero = null;
let matchupEditingHeroes = {}; 
let antiDeleteMode = {}; 

let undoStack = [];
let redoStack = [];

function saveToHistory() {
    undoStack.push(JSON.stringify(HERO_DATA));
    redoStack = []; 
    updateHistoryButtons();
}

function updateHistoryButtons() {
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');
    if (undoBtn) undoBtn.disabled = undoStack.length === 0;
    if (redoBtn) redoBtn.disabled = redoStack.length === 0;
}

function undo() {
    if (undoStack.length === 0) return;
    redoStack.push(JSON.stringify(HERO_DATA));
    HERO_DATA = JSON.parse(undoStack.pop());
    finalizeDataChange(false);
}

function redo() {
    if (redoStack.length === 0) return;
    undoStack.push(JSON.stringify(HERO_DATA));
    HERO_DATA = JSON.parse(redoStack.pop());
    finalizeDataChange(false);
}

function finalizeDataChange(shouldSaveHistory = true) {
    if (shouldSaveHistory) saveToHistory();
    saveHeroData();
    renderDbTable();
    calculateTeamAntis();
    updateHistoryButtons();
}

function saveHeroData() {
    localStorage.setItem('ow-anti-hero-data', JSON.stringify(HERO_DATA));
}

function loadHeroData() {
    const saved = localStorage.getItem('ow-anti-hero-data');
    if (saved) HERO_DATA = JSON.parse(saved);
}

function resetHeroData() {
    if (confirm("データベースを初期状態に戻しますか？")) {
        saveToHistory();
        HERO_DATA = JSON.parse(JSON.stringify(DEFAULT_HERO_DATA));
        finalizeDataChange(false);
    }
}

function saveSettings() {
    const settings = { teamSize, isRoleQueue, roleOrder };
    localStorage.setItem('ow-anti-settings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('ow-anti-settings');
    if (saved) {
        const settings = JSON.parse(saved);
        teamSize = settings.teamSize ?? 5;
        isRoleQueue = settings.isRoleQueue ?? true;
        roleOrder = settings.roleOrder ?? ['tank', 'damage', 'support'];
    }
}

const HERO_NAME_JA = {
    'ana': 'アナ', 'anran': 'アンラン', 'ashe': 'アッシュ', 'baptiste': 'バティスト',
    'bastion': 'バスティオン', 'brigitte': 'ブリギッテ', 'cassidy': 'キャスディ',
    'domina': 'ドミナ', 'doomfist': 'ドゥームフィスト', 'dva': 'D.Va',
    'echo': 'エコー', 'emre': 'エムレ', 'freja': 'フレイヤ', 'genji': 'ゲンジ',
    'hanzo': 'ハンゾー', 'hazard': 'ハザード', 'illari': 'イラリー',
    'jetpack-cat': 'ジェットパックキャット', 'junker-queen': 'ジャンカークイーン',
    'junkrat': 'ジャンクラット', 'juno': 'ジュノ', 'kiriko': 'キリコ',
    'lifeweaver': 'ライフウィーバー', 'lucio': 'ルシオ', 'mauga': 'マウガ',
    'mei': 'メイ', 'mercy': 'マーシー', 'mizuki': 'ミズキ', 'moira': 'モイラ',
    'orisa': 'オリーサ', 'pharah': 'ファラ', 'ramattra': 'ラマットラ',
    'reaper': 'リーパー', 'reinhardt': 'ラインハルト', 'roadhog': 'ロードホッグ',
    'sigma': 'シグマ', 'sojourn': 'ソジョーン', 'soldier-76': 'ソルジャー76',
    'sombra': 'ソンブラ', 'symmetra': 'シンメトラ', 'torbjorn': 'トールビョーン',
    'tracer': 'トレーサー', 'vendetta': 'ヴェンデッタ', 'venture': 'ベンチャー',
    'widowmaker': 'ウィドウメイカー', 'winston': 'ウィンストン',
    'wrecking-ball': 'レッキング・ボール', 'wuyang': 'ウーヤン', 'zarya': 'ザリア',
    'zenyatta': 'ゼニヤッタ'
};

async function syncHeroesFromAPI() {
    try {
        const res = await fetch('https://overfast-api.tekrop.fr/heroes');
        const data = await res.json();
        const map = {};
        data.forEach(h => map[h.key] = h.portrait);
        const existingIds = new Set(HERO_DATA.map(h => h.id));
        let newHeroesAdded = false;
        data.forEach(apiHero => {
            if (!existingIds.has(apiHero.key)) {
                HERO_DATA.push({
                    id: apiHero.key,
                    name: HERO_NAME_JA[apiHero.key] || apiHero.name,
                    role: apiHero.role,
                    archetype: 'null',
                    matchups: { dive: 2, rush: 2, poke: 2 },
                    antis: {}
                });
                newHeroesAdded = true;
                console.log(`新キャラを追加しました: ${HERO_NAME_JA[apiHero.key] || apiHero.name} (${apiHero.role})`);
            }
        });
        if (newHeroesAdded) saveHeroData();
        return map;
    } catch (e) { return {}; }
}

window.onload = async () => {
    loadSettings();
    loadHeroData();
    apiImages = await syncHeroesFromAPI();
    setTeamSize(teamSize);
    updateRoleQueueUI();
    applyRoleOrderUI();
    changeTab('tank');
    updateUI();
};

function moveRole(role, direction) {
    const idx = roleOrder.indexOf(role);
    const newIdx = idx + direction;
    if (newIdx >= 0 && newIdx < roleOrder.length) {
        [roleOrder[idx], roleOrder[newIdx]] = [roleOrder[newIdx], roleOrder[idx]];
        applyRoleOrderUI();
        saveSettings();
    }
}

function applyRoleOrderUI() {
    roleOrder.forEach((role, index) => {
        const section = document.getElementById(`rank-section-${role}`);
        if (section) section.style.order = index;
    });
}

function setTeamSize(size) {
    teamSize = size;
    document.getElementById('size-5-btn')?.classList.toggle('bg-blue-600', size === 5);
    document.getElementById('size-6-btn')?.classList.toggle('bg-blue-600', size === 6);
    const container = document.getElementById('team-slots');
    if (container) {
        container.className = `grid gap-2 md:gap-4 mb-8 max-w-3xl mx-auto transition-all ${size === 6 ? 'grid-cols-6-fixed' : 'grid-cols-5'}`;
    }
    if (selectedHeroes.length > teamSize) selectedHeroes = selectedHeroes.slice(0, teamSize);
    if (isRoleQueue) applyRoleQueueLimits();
    updateUI();
    saveSettings();
}

function toggleRoleQueue() {
    isRoleQueue = !isRoleQueue;
    if (isRoleQueue) applyRoleQueueLimits();
    updateRoleQueueUI();
    updateUI();
    saveSettings();
}

function updateRoleQueueUI() {
    const toggle = document.getElementById('role-queue-toggle');
    if (toggle) toggle.style.transform = isRoleQueue ? "translateX(1.5rem)" : "translateX(0.25rem)";
}

function applyRoleQueueLimits() {
    const counts = { tank: 0, damage: 0, support: 0 };
    selectedHeroes = selectedHeroes.filter(hero => {
        let limit = (teamSize === 6) ? 2 : (hero.role === 'tank' ? 1 : 2);
        counts[hero.role]++;
        return counts[hero.role] <= limit;
    });
}

function changeTab(role) {
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active-tank', 'active-damage', 'active-support');
    });
    document.getElementById(`tab-${role}`)?.classList.add(`active-${role}`);
    renderHeroGrid(role);
}

function renderHeroGrid(role) {
    const grid = document.getElementById('hero-grid');
    if (!grid) return;
    grid.innerHTML = '';
    HERO_DATA.filter(h => h.role === role).forEach(hero => {
        const isSelected = selectedHeroes.some(h => h.id === hero.id);
        const card = document.createElement('div');
        // 【エフェクト修正】isSelectedの場合に active クラスを付与
        card.className = `hero-card rounded-lg ${isSelected ? 'active' : ''}`;
        card.innerHTML = `
            <div class="badge badge-${hero.archetype}">${hero.archetype}</div>
            <div class="hero-img-container"><img src="${apiImages[hero.id] || `https://static.playoverwatch.com/heroportrait/${hero.id}.png`}" class="hero-img"></div>
            <div class="hero-label">${hero.name}</div>`;
        card.onclick = () => toggleHero(hero);
        grid.appendChild(card);
    });
}

function toggleHero(hero) {
    const idx = selectedHeroes.findIndex(h => h.id === hero.id);
    if (idx >= 0) {
        selectedHeroes.splice(idx, 1);
    } else {
        if (selectedHeroes.length >= teamSize) return;
        if (isRoleQueue) {
            let limit = (teamSize === 6) ? 2 : (hero.role === 'tank' ? 1 : 2);
            if (selectedHeroes.filter(h => h.role === hero.role).length >= limit) return;
        }
        selectedHeroes.push(hero);
    }
    updateUI();
}

function removeHero(hero) {
    selectedHeroes = selectedHeroes.filter(h => h.id !== hero.id);
    updateUI();
}

function updateUI() {
    const container = document.getElementById('team-slots');
    if (!container) return;
    container.innerHTML = '';
    if (isRoleQueue) {
        let roles = (teamSize === 6) ? ['tank', 'tank', 'damage', 'damage', 'support', 'support'] : ['tank', 'damage', 'damage', 'support', 'support'];
        roles.forEach((role, i) => {
            const sameRoleSelected = selectedHeroes.filter(h => h.role === role);
            const roleOccurence = roles.slice(0, i).filter(r => r === role).length;
            const hero = sameRoleSelected[roleOccurence];
            renderSlot(container, hero, role);
        });
    } else {
        for (let i = 0; i < teamSize; i++) renderSlot(container, selectedHeroes[i], null);
    }
    
    // 【エフェクト修正】現在開いているタブのグリッドも再描画して active クラスを反映させる
    const currentTabBtn = document.querySelector('.tab-btn[class*="active"]');
    if (currentTabBtn) {
        const currentTab = currentTabBtn.id.replace('tab-', '');
        renderHeroGrid(currentTab);
    }
    
    calculateTeamAntis();
}

function renderSlot(container, hero, fixedRole) {
    const slot = document.createElement('div');
    // 【エフェクト修正】ロールに応じたネオンボーダーを復活
    const roleColor = hero ? (hero.role === 'tank' ? 'tank' : (hero.role === 'damage' ? 'dps' : 'sup')) : '';
    slot.className = `slot aspect-square rounded-xl ${hero ? 'slot-filled neon-border-' + roleColor : ''}`;
    
    if (hero) {
        slot.onclick = () => removeHero(hero);
        slot.innerHTML = `
            <div class="badge badge-${hero.archetype}">${hero.archetype}</div>
            <div class="hero-img-container"><img src="${apiImages[hero.id] || `https://static.playoverwatch.com/heroportrait/${hero.id}.png`}" class="hero-img"></div>
            <div class="hero-label">${hero.name}</div>`;
    } else {
        const label = fixedRole === 'tank' ? 'タンク' : (fixedRole === 'damage' ? 'ダメージ' : (fixedRole === 'support' ? 'サポート' : '（空き）'));
        slot.innerHTML = `<span class="text-[8px] uppercase text-slate-500 font-black">${label}</span>`;
    }
    container.appendChild(slot);
}

function calculateTeamAntis() {
    const resultsDiv = document.getElementById('analysis-results');
    const placeholder = document.getElementById('analysis-placeholder');
    if (!resultsDiv || !placeholder) return;
    if (selectedHeroes.length === 0) {
        resultsDiv.classList.add('hidden');
        placeholder.classList.remove('hidden');
        return;
    }
    placeholder.classList.add('hidden');
    resultsDiv.classList.remove('hidden');

    const enemyArchTypes = { dive: 0, rush: 0, poke: 0 };
    selectedHeroes.forEach(h => { if(h.archetype !== 'null') enemyArchTypes[h.archetype]++; });

    const scoredHeroes = HERO_DATA.map(h => {
        let antiImpact = 0;
        let advantages = [], disadvantages = [];
        const archImpactMultiplier = h.role === 'support' ? 1.5 : 1.0;

        const selfInEnemyCount = selectedHeroes.filter(enemy => enemy.id === h.id).length;
        const effectiveEnemyArchTypes = { ...enemyArchTypes };
        if (h.archetype !== 'null' && selfInEnemyCount > 0) {
            effectiveEnemyArchTypes[h.archetype] = Math.max(0, effectiveEnemyArchTypes[h.archetype] - selfInEnemyCount);
        }

        Object.entries(effectiveEnemyArchTypes).forEach(([arch, count]) => {
            if (count > 0) {
                const rating = h.matchups[arch] ?? 2;
                antiImpact += (2 - rating) * 5 * count * archImpactMultiplier;
                const labelMap = { dive: 'ダイブ', rush: 'ラッシュ', poke: 'ポーク' };
                if(rating <= 1) advantages.push(`${labelMap[arch]}に強い`);
                else if(rating >= 3) disadvantages.push(`${labelMap[arch]}に弱い`);
            }
        });

        selectedHeroes.forEach(enemy => {
            if (h.id === enemy.id) return;
            const tankMultiplier = (enemy.role === 'tank') ? 1.5 : 1.0;
            if (h.antis[enemy.name]) {
                antiImpact -= (h.antis[enemy.name] * 8 * tankMultiplier);
                disadvantages.push(`${enemy.name}に${h.antis[enemy.name] === 1 ? 'ちょっと' : ''}弱い`);
            }
            if (enemy.antis[h.name]) {
                antiImpact += (enemy.antis[h.name] * 8 * tankMultiplier);
                advantages.push(`${enemy.name}に${enemy.antis[h.name] === 1 ? 'ちょっと' : ''}強い`);
            }
        });

        return { ...h, score: Math.max(10, Math.min(99, 50.0 + antiImpact)), advantages: [...new Set(advantages)], disadvantages: [...new Set(disadvantages)] };
    });

    ['tank', 'damage', 'support'].forEach(role => {
        const topContainer = document.getElementById(`results-${role}`);
        const moreContainer = document.getElementById(`more-${role}`);
        const roleHeroes = scoredHeroes.filter(h => h.role === role).sort((a, b) => b.score - a.score);
        let currentRank = 0, lastScore = -1;
        roleHeroes.forEach(h => { if (h.score !== lastScore) { currentRank++; lastScore = h.score; } h.rank = currentRank; });

        const renderHeroRow = (h) => {
            const displayScore = Math.round(h.score * 10) / 10;
            const color = role === 'tank' ? '#3b82f6' : (role === 'damage' ? '#ef4444' : '#22c55e');
            return `
                <div class="rank-card role-${role} ${h.rank <= 3 ? 'rank-'+h.rank : ''} p-2 rounded flex items-center gap-3" 
                     onclick="this.classList.toggle('is-expanded')" style="color: ${color}">
                    <div class="rank-number">${h.rank}</div>
                    <div class="w-10 h-10 rounded bg-slate-900 overflow-hidden flex-shrink-0 p-0.5"><img src="${apiImages[h.id] || `https://static.playoverwatch.com/heroportrait/${h.id}.png`}" class="w-full h-full object-contain"></div>
                    <div class="flex-grow min-w-0">
                        <div class="flex justify-between items-start gap-1"><span class="text-[10px] font-black uppercase text-slate-100 truncate">${h.name}</span><span class="font-black text-[10px] flex-shrink-0">${displayScore}%</span></div>
                        <div class="w-full bg-slate-950 h-1 rounded-full overflow-hidden my-1"><div class="h-full" style="width: ${displayScore}%; background-color:${color}"></div></div>
                        <div class="labels-container">
                            ${h.advantages.map(l => `<span class="label-item bg-blue-500/20 text-blue-300 border-blue-500/30">${l}</span>`).join('')}
                            ${h.disadvantages.map(l => `<span class="label-item bg-red-500/20 text-red-300 border-red-500/30">${l}</span>`).join('')}
                        </div>
                    </div>
                </div>`;
        };
        const topDisplay = roleHeroes.filter(h => h.rank <= 3).length >= 3 ? roleHeroes.filter(h => h.rank <= 3) : roleHeroes.slice(0, 3);
        topContainer.innerHTML = topDisplay.map(h => renderHeroRow(h)).join('');
        moreContainer.innerHTML = roleHeroes.slice(topDisplay.length).map(h => renderHeroRow(h)).join('');
    });
}

function openDbModal() { 
    matchupEditingHeroes = {}; 
    antiDeleteMode = {};
    updateHistoryButtons();
    document.getElementById('db-modal')?.classList.add('open'); 
    renderDbTable(); 
}
function closeDbModal() { document.getElementById('db-modal')?.classList.remove('open'); }

function toggleMatchupEdit(heroId) {
    matchupEditingHeroes[heroId] = !matchupEditingHeroes[heroId];
    renderDbTable();
}

function toggleAntiDeleteMode(heroId) {
    antiDeleteMode[heroId] = !antiDeleteMode[heroId];
    renderDbTable();
}

function updateMatchup(heroId, type, delta) {
    const hero = HERO_DATA.find(h => h.id === heroId);
    if (!hero) return;
    const newVal = (hero.matchups[type] || 2) + delta;
    if (newVal >= 1 && newVal <= 3) {
        saveToHistory();
        hero.matchups[type] = newVal;
        finalizeDataChange(false);
    }
}

function deleteAnti(heroId, antiName) {
    const hero = HERO_DATA.find(h => h.id === heroId);
    if (hero && hero.antis[antiName]) {
        saveToHistory();
        delete hero.antis[antiName];
        finalizeDataChange(false);
    }
}

function openAntiPicker(heroId) {
    currentEditingHeroId = heroId;
    const picker = document.getElementById('anti-picker');
    const grid = document.getElementById('anti-picker-grid');
    if (!picker || !grid) return;
    grid.innerHTML = HERO_DATA.map(h => `
        <div onclick="selectAntiHero('${h.id}')" class="cursor-pointer bg-slate-900 border border-slate-700 rounded p-1 hover:border-amber-500 transition">
            <img src="${apiImages[h.id] || `https://static.playoverwatch.com/heroportrait/${h.id}.png`}" class="w-full aspect-square object-contain">
            <div class="text-[8px] text-center mt-1 truncate">${h.name}</div>
        </div>
    `).join('');
    picker.classList.remove('hidden');
}

function closeAntiPicker() { document.getElementById('anti-picker')?.classList.add('hidden'); }

function selectAntiHero(heroId) {
    currentAddingAntiHero = HERO_DATA.find(h => h.id === heroId);
    closeAntiPicker();
    const display = document.getElementById('selected-anti-display');
    if (display && currentAddingAntiHero) {
        display.innerHTML = `<img src="${apiImages[currentAddingAntiHero.id] || `https://static.playoverwatch.com/heroportrait/${currentAddingAntiHero.id}.png`}" class="w-16 h-16 object-contain mb-2"><div class="text-white font-black">${currentAddingAntiHero.name}</div>`;
    }
    document.getElementById('anti-rating-picker')?.classList.remove('hidden');
}

function closeAntiRatingPicker() { document.getElementById('anti-rating-picker')?.classList.add('hidden'); }

function saveNewAnti(rating) {
    const baseHero = HERO_DATA.find(h => h.id === currentEditingHeroId);
    if (baseHero && currentAddingAntiHero) {
        saveToHistory();
        baseHero.antis[currentAddingAntiHero.name] = rating;
        closeAntiRatingPicker();
        finalizeDataChange(false);
    }
}

function renderDbTable() {
    const container = document.getElementById('db-table-container');
    if (!container) return;
    const sorted = [...HERO_DATA].sort((a, b) => (a.role === b.role) ? a.name.localeCompare(b.name, 'ja') : (a.role === 'tank' ? -1 : b.role === 'tank' ? 1 : a.role === 'damage' ? -1 : 1));
    let html = `<div class="divide-y divide-slate-900">`, currentRole = '';
    
    sorted.forEach(h => {
        if (currentRole !== h.role) {
            currentRole = h.role;
            const colors = h.role === 'tank' ? 'bg-blue-600/10 text-blue-400' : h.role === 'damage' ? 'bg-red-600/10 text-red-400' : 'bg-green-600/10 text-green-400';
            html += `<div class="${colors} pl-4 py-1.5 text-[10px] font-black tracking-widest border-b border-slate-900 uppercase">${h.role==='tank'?'タンク':h.role==='damage'?'ダメージ':'サポート'}</div>`;
        }
        
        const isEditing = matchupEditingHeroes[h.id];
        const isDeleting = antiDeleteMode[h.id];
        const m = h.matchups;
        
        const renderStepper = (type, val) => {
            if (isEditing) {
                return `
                <div class="flex flex-col items-center">
                    <button onclick="updateMatchup('${h.id}', '${type}', 1)" class="stepper-btn">▲</button>
                    <span class="text-[9px] font-black my-0.5 ${val<=1?'text-blue-400':val>=3?'text-red-400':'text-slate-400'}">${val}</span>
                    <button onclick="updateMatchup('${h.id}', '${type}', -1)" class="stepper-btn">▼</button>
                </div>`;
            } else {
                return `<span class="text-[9px] font-black ${val<=1?'text-blue-400':val>=3?'text-red-400':'text-slate-400'}">${val}</span>`;
            }
        };

        html += `<div class="grid grid-cols-12 items-center border-b border-slate-900 hover:bg-slate-900 transition-colors">
            <div class="col-span-3 pl-4 py-3 border-r border-slate-900 flex items-center gap-2">
                <img src="${apiImages[h.id] || `https://static.playoverwatch.com/heroportrait/${h.id}.png`}" class="w-6 h-6 bg-slate-900 rounded p-0.5">
                <span class="font-black text-slate-100 uppercase text-[9px] truncate">${h.name}</span>
            </div>
            <div class="col-span-3 py-2 border-r border-slate-900 flex flex-col items-center justify-center gap-1">
                <div class="flex items-center gap-3">
                    ${renderStepper('dive', m.dive)} ${renderStepper('rush', m.rush)} ${renderStepper('poke', m.poke)}
                </div>
                <button onclick="toggleMatchupEdit('${h.id}')" class="text-[8px] flex items-center gap-1 ${isEditing ? 'text-amber-500 font-bold' : 'text-slate-500 hover:text-slate-300'}">
                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    ${isEditing ? '完了' : '編集'}
                </button>
            </div>
            <div class="col-span-6 pl-3 pr-2 py-3 flex items-center gap-2">
                <div class="flex-grow flex flex-wrap items-center">
                    ${Object.entries(h.antis).map(([k,v])=>`
                        <span class="anti-tag">
                            <span class="text-[8px] text-slate-300">${k}(${v})</span>
                            ${isDeleting ? `<span onclick="deleteAnti('${h.id}', '${k}')" class="anti-del ml-1 text-red-500 font-bold hover:text-red-300">×</span>` : ''}
                        </span>`).join('')}
                    <button onclick="openAntiPicker('${h.id}')" class="add-anti-btn">＋追加</button>
                </div>
                <button onclick="toggleAntiDeleteMode('${h.id}')" class="flex-shrink-0 p-1.5 rounded hover:bg-slate-800 transition-colors ${isDeleting ? 'text-red-500 bg-red-500/10' : 'text-slate-500'}">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </div>
        </div>`;
    });
    container.innerHTML = html + `</div>`;
}

function toggleExpand(role) {
    const moreDiv = document.getElementById(`more-${role}`);
    const arrow = document.querySelector(`#expand-${role} .arrow-icon`);
    if (moreDiv && arrow) {
        const isOpen = moreDiv.classList.toggle('open');
        arrow.classList.toggle('open', isOpen);
    }
}


function clearTeam() { selectedHeroes = []; updateUI(); }
