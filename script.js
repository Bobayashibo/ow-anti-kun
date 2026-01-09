let LANGS = [];
let DEFAULT_LANG = "ja";
let STRINGS = {};
let HERO_NAMES = {};
let i18nReady = false;

const LANGUAGE_STORAGE_KEY = "ow-anti-kun-language";
let currentLang = DEFAULT_LANG;

const HERO_DATA = [
    { id: "dva", name: "D.Va", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 1, poke: 3 }, antis: { "ザリア": 3, "シンメトラ": 2, "ブリギッテ": 1, "メイ": 2, "ロードホッグ": 1 } },
    { id: "doomfist", name: "ドゥームフィスト", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "オリーサ": 3, "アナ": 2, "エコー": 2, "トールビョーン": 1, "ブリギッテ": 2, "ファラ": 2, "ロードホッグ": 3, "ソンブラ": 2 } },
    { id: "hazard", name: "ハザード", role: "tank", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 1 }, antis: { "D.Va": 2, "ザリア": 2, "ソンブラ": 2, "ファラ": 2, "エコー": 2, "ゼニヤッタ": 1, "ロードホッグ": 3, "オリーサ": 2 } },
    { id: "junker-queen", name: "ジャンカークイーン", role: "tank", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "キリコ": 2, "アナ": 2, "ジャンクラット": 2, "ルシオ": 2, "ザリア": 3, "モイラ": 1, "ロードホッグ": 2 } },
    { id: "mauga", name: "マウガ", role: "tank", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "D.Va": 1, "リーパー": 3, "ハンゾー": 2, "ソジョーン": 1, "フレイヤ": 1 } },
    { id: "orisa", name: "オリーサ", role: "tank", archetype: 'rush', matchups: { dive: 2, rush: 3, poke: 2 }, antis: { "ザリア": 3, "メイ": 2, "エコー": 1, "ファラ": 2, "シンメトラ": 2 } },
    { id: "ramattra", name: "ラマットラ", role: "tank", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 1 }, antis: { "オリーサ": 2, "ハザード": 2, "ゼニヤッタ": 3 } },
    { id: "reinhardt", name: "ラインハルト", role: "tank", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 1 }, antis: { "シグマ": 1, "オリーサ": 1, "ラマットラ": 3, "ファラ": 2, "エコー": 2, "ルシオ": 1, "バスティオン": 3, "ロードホッグ": 2 } },
    { id: "roadhog", name: "ロードホッグ", role: "tank", archetype: 'null', matchups: { dive: 2, rush: 1, poke: 1 }, antis: { "オリーサ": 3, "マウガ": 2, "ソジョーン": 2, "ハンゾー": 2, "フレイヤ": 1, "アナ": 3 } },
    { id: "sigma", name: "シグマ", role: "tank", archetype: 'poke', matchups: { dive: 1, rush: 1, poke: 3 }, antis: { "ラインハルト": 1, "ラマットラ": 2, "ドゥームフィスト": 2, "ベンチャー": 1, "メイ": 2, "ウィンストン": 3, "ゲンジ": 2, "ソンブラ": 3 } },
    { id: "winston", name: "ウィンストン", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 1, poke: 3 }, antis: { "D.Va": 3, "キャスディ": 3, "ジャンカークイーン": 3, "トールビョーン": 3, "ブリギッテ": 2, "リーパー": 4, "ロードホッグ": 2 } },
    { id: "wrecking-ball", name: "レッキング・ボール", role: "tank", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "マウガ": 2, "キャスディ": 2, "ロードホッグ": 2, "トレーサー": 2, "ソンブラ": 3 } },
    { id: "zarya", name: "ザリア", role: "tank", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "ウィンストン": 1, "メイ": 2, "ファラ": 2, "ラマットラ": 2, "ライフウィーバー": 1, "エコー": 2, "ラインハルト": 2 } },
    { id: "ashe", name: "アッシュ", role: "damage", archetype: 'poke', matchups: { dive: 1, rush: 3, poke: 3 }, antis: { "ハザード": 2, "D.Va": 3, "レッキング・ボール": 2, "ウィドウメイカー": 1, "ソンブラ": 2, "ベンチャー": 2, "ウィンストン": 3 } },
    { id: "bastion", name: "バスティオン", role: "damage", archetype: 'poke', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "トレーサー": 3, "ゲンジ": 2, "D.Va": 2, "オリーサ": 1, "アッシュ": 1, "フレイヤ": 2, "シグマ": 3 } },
    { id: "cassidy", name: "キャスディ", role: "damage", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 1 }, antis: { "ソジョーン": 2, "アナ": 1, "ウィドウメイカー": 2 } },
    { id: "echo", name: "エコー", role: "damage", archetype: 'null', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "トレーサー": 2, "ウィドウメイカー": 2, "アッシュ": 2, "キャスディ": 2, "D.Va": 3, "アナ": 2, "ジュノ": 2, "イラリー": 2, "バティスト": 3 } },
    { id: "freja", name: "フレイヤ", role: "damage", archetype: 'poke', matchups: { dive: 2, rush: 3, poke: 3 }, antis: { "D.Va": 2, "ウィドウメイカー": 3, "ソルジャー": 2, "バティスト": 3, "ウィンストン": 3, "レッキング・ボール": 2, "トレーサー": 2 } },
    { id: "genji", name: "ゲンジ", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 1, poke: 3 }, antis: { "トールビョーン": 3, "ザリア": 3, "ウィンストン": 2, "モイラ": 2, "シンメトラ": 2, "ファラ": 2, "ブリギッテ": 2, "ルシオ": 3, "メイ": 3 } },
    { id: "hanzo", name: "ハンゾー", role: "damage", archetype: 'poke', matchups: { dive: 1, rush: 1, poke: 3 }, antis: { "レッキング・ボール": 3, "ファラ": 2, "エコー": 2, "ドゥームフィスト": 2, "ウィンストン": 3, "ゲンジ": 3 } },
    { id: "junkrat", name: "ジャンクラット", role: "damage", archetype: 'null', matchups: { dive: 1, rush: 2, poke: 1 }, antis: { "ザリア": 1, "フレイヤ": 2, "ジュノ": 2, "バティスト": 2, "ソジョーン": 1, "ファラ": 3, "エコー": 3 } },
    { id: "mei", name: "メイ", role: "damage", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 2 }, antis: { "ファラ": 3, "エコー": 3 } },
    { id: "pharah", name: "ファラ", role: "damage", archetype: 'poke', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "エコー": 3, "ウィドウメイカー": 2, "キャスディ": 2, "ソルジャー": 2, "イラリー": 2, "バティスト": 2, "アナ": 1, "D.Va": 3 } },
    { id: "reaper", name: "リーパー", role: "damage", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "キャスディ": 3, "ウィドウメイカー": 1, "エコー": 2, "シグマ": 3, "アナ": 1, "イラリー": 1, "ルシオ": 1, "ファラ": 3 } },
    { id: "sojourn", name: "ソジョーン", role: "damage", archetype: 'poke', matchups: { dive: 2, rush: 1, poke: 2 }, antis: { "レッキング・ボール": 2, "ハザード": 1, "ウィンストン": 2, "ゲンジ": 2, "トレーサー": 1, "ソンブラ": 2, "D.Va": 2, "ベンチャー": 1 } },
    { id: "soldier-76", name: "ソルジャー76", role: "damage", archetype: 'poke', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "ウィンストン": 2, "レッキング・ボール": 3, "ゲンジ": 3, "ドゥームフィスト": 3, "トレーサー": 1, "ベンチャー": 2 } },
    { id: "sombra", name: "ソンブラ", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "キャスディ": 1, "キリコ": 3, "ブリギッテ": 3, "ファラ": 2, "エコー": 1, "トールビョーン": 2 } },
    { id: "symmetra", name: "シンメトラ", role: "damage", archetype: 'rush', matchups: { dive: 2, rush: 1, poke: 1 }, antis: { "アッシュ": 2, "ウィドウメイカー": 1, "ソジョーン": 2, "バティスト": 1, "ファラ": 3, "エコー": 2, "フレイヤ": 2 } },
    { id: "torbjorn", name: "トールビョーン", role: "damage", archetype: 'poke', matchups: { dive: 3, rush: 2, poke: 1 }, antis: { "ファラ": 3, "オリーサ": 1, "ザリア": 2, "シグマ": 3, "ソジョーン": 2, "フレイヤ": 3, "ゼニヤッタ": 1, "エコー": 2 } },
    { id: "tracer", name: "トレーサー", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "ソンブラ": 1, "キャスディ": 3, "トールビョーン": 3 } },
    { id: "vendetta", name: "ヴェンデッタ", role: "damage", archetype: 'dive', matchups: { dive: 2, rush: 1, poke: 3 }, antis: { "ロードホッグ": 3, "トールビョーン": 2, "フレイヤ": 1, "ファラ": 1, "エコー": 1 } },
    { id: "venture", name: "ベンチャー", role: "damage", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 1 }, antis: { "ファラ": 2, "エコー": 2, "トールビョーン": 2, "キャスディ": 3, "ロードホッグ": 1, "メイ": 2, "リーパー": 2, "モイラ": 1, "ブリギッテ": 3 } },
    { id: "widowmaker", name: "ウィドウメイカー", role: "damage", archetype: 'poke', matchups: { dive: 0, rush: 1, poke: 3 }, antis: { "レッキング・ボール": 3, "ドゥームフィスト": 3, "ソンブラ": 4, "ゲンジ": 2, "トレーサー": 2, "ウィンストン": 3 } },
    { id: "ana", name: "アナ", role: "support", archetype: 'poke', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "ゲンジ": 2, "トレーサー": 1, "キリコ": 2, "ソンブラ": 2, "ウィンストン": 3 } },
    { id: "baptiste", name: "バティスト", role: "support", archetype: 'poke', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "ウィンストン": 3, "レッキング・ボール": 3, "D.Va": 1, "ゲンジ": 2, "ソンブラ": 2, "トレーサー": 2, "ウィドウメイカー": 2, "ベンチャー": 3, "ハザード": 2 } },
    { id: "brigitte", name: "ブリギッテ", role: "support", archetype: 'rush', matchups: { dive: 3, rush: 1, poke: 1 }, antis: { "ファラ": 2, "エコー": 2, "フレイヤ": 2 } },
    { id: "illari", name: "イラリー", role: "support", archetype: 'poke', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "ハザード": 2, "D.Va": 3, "ゲンジ": 2, "トレーサー": 1, "ソンブラ": 1, "ウィンストン": 2, "レッキング・ボール": 3 } },
    { id: "juno", name: "ジュノ", role: "support", archetype: 'rush', matchups: { dive: 1, rush: 2, poke: 1 }, antis: { "ウィンストン": 3, "レッキング・ボール": 2, "ウィドウメイカー": 1, "ジャンカークイーン": 1, "ゲンジ": 1, "トレーサー": 2 } },
    { id: "kiriko", name: "キリコ", role: "support", archetype: 'dive', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "ウィンストン": 2, "ゲンジ": 1, "ファラ": 2, "エコー": 2 } },
    { id: "lifeweaver", name: "ライフウィーバー", role: "support", archetype: 'poke', matchups: { dive: 2, rush: 1, poke: 1 }, antis: { "ソンブラ": 2, "レッキング・ボール": 2, "ウィンストン": 3, "ベンチャー": 2, "ハザード": 1 } },
    { id: "lucio", name: "ルシオ", role: "support", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "ソンブラ": 2, "モイラ": 1, "キャスディ": 2 } },
    { id: "mercy", name: "マーシー", role: "support", archetype: 'poke', matchups: { dive: 1, rush: 1, poke: 1 }, antis: { "バティスト": 2, "ジュノ": 1, "ウィンストン": 1, "D.Va": 1, "ウィドウメイカー": 2, "キャスディ": 2, "ソルジャー76": 3, "アッシュ": 2, "アナ": 2 } },
    { id: "moira", name: "モイラ", role: "support", archetype: 'rush', matchups: { dive: 3, rush: 2, poke: 2 }, antis: { "D.Va": 2, "ロードホッグ": 1, "キャスディ": 2, "ファラ": 1 } },
    { id: "wuyang", name: "ウーヤン", role: "support", archetype: 'rush', matchups: { dive: 2, rush: 2, poke: 3 }, antis: { "D.Va": 2, "トレーサー": 3, "ゲンジ": 2, "ソンブラ": 1 } },
    { id: "zenyatta", name: "ゼニヤッタ", role: "support", archetype: 'poke', matchups: { dive: 1, rush: 2, poke: 2 }, antis: { "レッキング・ボール": 2, "ドゥームフィスト": 2, "ジャンカークイーン": 1, "D.Va": 2, "ベンチャー": 3, "ソンブラ": 2, "トレーサー": 3, "ゲンジ": 3 } }
];

const HERO_IDS = new Set(HERO_DATA.map(hero => hero.id));
const HERO_ID_TO_NAME = Object.fromEntries(HERO_DATA.map(hero => [hero.id, hero.name]));
const HERO_NAME_TO_ID = {};
const HERO_NAME_TO_ID_LOOSE = {};
const FALLBACK_STRINGS = {
    roles: {
        tank: "タンク",
        damage: "ダメージ",
        support: "サポート",
        empty: "（空き）"
    },
    archetypes: {
        dive: "ダイブ",
        rush: "ラッシュ",
        poke: "ポーク",
        null: "null"
    },
    labels: {
        strongVs: "{archetype}に強い",
        weakVs: "{archetype}に弱い",
        strongAgainst: "{name}に強い",
        slightStrongAgainst: "{name}にちょっと強い",
        weakAgainst: "{name}に弱い",
        slightWeakAgainst: "{name}にちょっと弱い"
    }
};

function normalizeNameKey(name) {
    return name.toLowerCase().replace(/[\s:'.・\-]/g, "");
}

function resetMap(map) {
    Object.keys(map).forEach(key => delete map[key]);
}

function rebuildNameMaps() {
    resetMap(HERO_NAME_TO_ID);
    resetMap(HERO_NAME_TO_ID_LOOSE);
    const sources = [];
    if (HERO_NAMES && typeof HERO_NAMES === "object") {
        if (HERO_NAMES.ja) sources.push(HERO_NAMES.ja);
        if (HERO_NAMES.en) sources.push(HERO_NAMES.en);
    }
    sources.push(HERO_ID_TO_NAME);
    sources.forEach(map => {
        Object.entries(map).forEach(([id, name]) => {
            if (!HERO_IDS.has(id)) return;
            HERO_NAME_TO_ID[name] = id;
            HERO_NAME_TO_ID_LOOSE[normalizeNameKey(name)] = id;
        });
    });
    HERO_NAME_TO_ID["ソルジャー"] = "soldier-76";
    HERO_NAME_TO_ID_LOOSE[normalizeNameKey("ソルジャー")] = "soldier-76";
}

function applyI18n(i18n) {
    if (i18n && typeof i18n === "object") {
        LANGS = Array.isArray(i18n.LANGS) ? i18n.LANGS : [];
        DEFAULT_LANG = i18n.DEFAULT_LANG || "ja";
        STRINGS = i18n.STRINGS || {};
        HERO_NAMES = i18n.HERO_NAMES || {};
        i18nReady = true;
    } else {
        LANGS = [{ code: "ja", label: "日本語" }];
        DEFAULT_LANG = "ja";
        STRINGS = {};
        HERO_NAMES = {};
        i18nReady = false;
    }
    rebuildNameMaps();
}

function ensureI18n() {
    if (window.I18N) {
        applyI18n(window.I18N);
        return Promise.resolve();
    }
    return new Promise(resolve => {
        const script = document.createElement("script");
        script.src = "i18n.js";
        script.async = true;
        script.onload = () => {
            applyI18n(window.I18N);
            resolve();
        };
        script.onerror = () => {
            applyI18n(null);
            resolve();
        };
        document.head.appendChild(script);
    });
}

function normalizeAntis(antis, ownerId) {
    const normalized = {};
    const unknown = [];
    Object.entries(antis).forEach(([name, value]) => {
        const id = HERO_NAME_TO_ID[name]
            || HERO_NAME_TO_ID_LOOSE[normalizeNameKey(name)]
            || (HERO_IDS.has(name) ? name : null);
        if (!id) {
            unknown.push(name);
            return;
        }
        normalized[id] = value;
    });
    if (unknown.length) {
        console.warn(`[i18n] Unmapped antis entries for ${ownerId}: ${unknown.join(", ")}`);
    }
    return normalized;
}

function getNestedValue(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function t(key) {
    const primary = getNestedValue(STRINGS[currentLang], key);
    if (primary !== undefined) return primary;
    const fallback = getNestedValue(STRINGS[DEFAULT_LANG], key);
    if (fallback !== undefined) return fallback;
    const localFallback = getNestedValue(FALLBACK_STRINGS, key);
    if (localFallback !== undefined) return localFallback;
    return key;
}

function format(template, vars) {
    return template.replace(/\{(\w+)\}/g, (_, key) => (vars[key] !== undefined ? vars[key] : ""));
}

function heroName(id) {
    const names = HERO_NAMES[currentLang] || {};
    const fallback = HERO_NAMES[DEFAULT_LANG] || {};
    return names[id] || fallback[id] || HERO_ID_TO_NAME[id] || id;
}

function archetypeLabel(archetype) {
    return t(`archetypes.${archetype}`) || archetype;
}

function safeStorageGet(key) {
    try {
        return localStorage.getItem(key);
    } catch (e) {
        return null;
    }
}

function safeStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        // Ignore storage errors (private mode, blocked, etc).
    }
}

function isSupportedLanguage(lang) {
    return LANGS.some(({ code }) => code === lang);
}

function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    const storedLang = safeStorageGet(LANGUAGE_STORAGE_KEY);
    const navLang = ((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase().split("-")[0];
    return [urlLang, storedLang, navLang, DEFAULT_LANG].find(isSupportedLanguage) || DEFAULT_LANG;
}

function applyTranslations() {
    if (!i18nReady) return;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const value = t(key);
        if (typeof value === "string") {
            el.textContent = value;
        }
    });
    document.documentElement.lang = currentLang;
    document.title = t("ui.title");
}

function setupLanguageSelector() {
    const select = document.getElementById("language-select");
    if (!select) return;
    select.innerHTML = LANGS.map(({ code, label }) => `<option value="${code}">${label}</option>`).join("");
    select.addEventListener("change", event => setLanguage(event.target.value));
}

function setLanguage(lang, { save = true } = {}) {
    const nextLang = isSupportedLanguage(lang) ? lang : DEFAULT_LANG;
    currentLang = nextLang;
    if (save) safeStorageSet(LANGUAGE_STORAGE_KEY, nextLang);
    const select = document.getElementById("language-select");
    if (select) select.value = nextLang;
    applyTranslations();
    updateUI();
    if (document.getElementById("db-modal")?.classList.contains("open")) {
        renderDbTable();
    }
}

let antisNormalized = false;
function normalizeAllAntis() {
    if (antisNormalized) return;
    HERO_DATA.forEach(hero => {
        hero.antis = normalizeAntis(hero.antis, hero.id);
    });
    antisNormalized = true;
}

let selectedHeroes = [];
let isRoleQueue = true;
let apiImages = {};

async function fetchImages() {
    try {
        const res = await fetch('https://overfast-api.tekrop.fr/heroes');
        const data = await res.json();
        const map = {};
        data.forEach(h => map[h.key] = h.portrait);
        return map;
    } catch (e) { return {}; }
}

async function init() {
    await ensureI18n();
    normalizeAllAntis();
    setupLanguageSelector();
    setLanguage(detectLanguage(), { save: false });
    apiImages = await fetchImages();
    updateUI();
}

window.addEventListener("load", init);

function toggleRoleQueue() {
    isRoleQueue = !isRoleQueue;
    if (isRoleQueue) {
        const counts = { tank: 0, damage: 0, support: 0 };
        selectedHeroes = selectedHeroes.filter(hero => {
            const limit = hero.role === 'tank' ? 1 : 2;
            counts[hero.role]++;
            return counts[hero.role] <= limit;
        });
    }
    const toggle = document.getElementById('role-queue-toggle');
    if (toggle) toggle.style.transform = isRoleQueue ? "translateX(1.5rem)" : "translateX(0.25rem)";
    const btn = document.getElementById('role-queue-btn');
    if (btn) {
        btn.classList.toggle('bg-blue-600', isRoleQueue);
        btn.classList.toggle('bg-slate-600', !isRoleQueue);
    }
    updateUI();
}

function changeTab(role) {
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active-tank', 'active-damage', 'active-support');
    });
    const activeBtn = document.getElementById(`tab-${role}`);
    if (activeBtn) activeBtn.classList.add(`active-${role}`);
    renderHeroGrid(role);
}

function renderHeroGrid(role) {
    const grid = document.getElementById('hero-grid');
    if (!grid) return;
    grid.innerHTML = '';
    HERO_DATA.filter(h => h.role === role).forEach(hero => {
        const isSelected = selectedHeroes.some(h => h.id === hero.id);
        const card = document.createElement('div');
        card.className = `hero-card rounded-lg ${isSelected ? 'active' : ''}`;
        card.innerHTML = `
            <div class="badge badge-${hero.archetype}">${archetypeLabel(hero.archetype)}</div>
            <div class="hero-img-container"><img src="${apiImages[hero.id] || `https://static.playoverwatch.com/heroportrait/${hero.id}.png`}" class="hero-img"></div>
            <div class="hero-label">${heroName(hero.id)}</div>
        `;
        card.onclick = () => toggleHero(hero);
        grid.appendChild(card);
    });
}

function toggleHero(hero) {
    const idx = selectedHeroes.findIndex(h => h.id === hero.id);
    if (idx >= 0) {
        selectedHeroes.splice(idx, 1);
    } else {
        if (selectedHeroes.length >= 5) return;
        if (isRoleQueue) {
            const limit = hero.role === 'tank' ? 1 : 2;
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

function toggleExpand(role) {
    const moreDiv = document.getElementById(`more-${role}`);
    const arrow = document.querySelector(`#expand-${role} .arrow-icon`);
    if (moreDiv && arrow) {
        const isOpen = moreDiv.classList.toggle('open');
        arrow.classList.toggle('open', isOpen);
    }
}

function updateUI() {
    const container = document.getElementById('team-slots');
    if (!container) return;
    container.innerHTML = '';
    if (isRoleQueue) {
        const roles = ['tank', 'damage', 'damage', 'support', 'support'];
        roles.forEach((role, i) => {
            const sameRoleSelected = selectedHeroes.filter(h => h.role === role);
            const roleOccurence = roles.slice(0, i).filter(r => r === role).length;
            const hero = sameRoleSelected[roleOccurence];
            renderSlot(container, hero, role);
        });
    } else {
        for (let i = 0; i < 5; i++) {
            renderSlot(container, selectedHeroes[i], null);
        }
    }
    const currentTabBtn = document.querySelector('.tab-btn[class*="active"]');
    if (currentTabBtn) {
        const currentTab = currentTabBtn.id.replace('tab-', '');
        renderHeroGrid(currentTab);
    } else {
        changeTab("tank");
    }
    calculateTeamAntis();
}

function renderSlot(container, hero, fixedRole) {
    const slot = document.createElement('div');
    const roleColor = hero ? (hero.role === 'tank' ? 'tank' : (hero.role === 'damage' ? 'dps' : 'sup')) : '';
    slot.className = `slot aspect-square rounded-xl ${hero ? 'slot-filled neon-border-' + roleColor : ''}`;
    if (hero) {
        slot.onclick = () => removeHero(hero);
        slot.innerHTML = `
            <div class="badge badge-${hero.archetype}">${archetypeLabel(hero.archetype)}</div>
            <div class="hero-img-container"><img src="${apiImages[hero.id] || `https://static.playoverwatch.com/heroportrait/${hero.id}.png`}" class="hero-img"></div>
            <div class="hero-label">${heroName(hero.id)}</div>`;
    } else {
        const label = fixedRole === "tank" ? t("roles.tank") : (fixedRole === "damage" ? t("roles.damage") : (fixedRole === "support" ? t("roles.support") : t("roles.empty")));
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
        let base = 50.0;
        let antiImpact = 0;
        let advantageList = []; 
        let disadvantageList = []; 

        const archImpactMultiplier = h.role === 'support' ? 1.5 : 1.0;

        Object.entries(enemyArchTypes).forEach(([arch, count]) => {
            if (count > 0) {
                const rating = h.matchups[arch] ?? 2;
                const scoreDelta = (rating - 2) * 5 * count * archImpactMultiplier;
                const archetype = archetypeLabel(arch);
                antiImpact += scoreDelta;
                if (rating >= 3) advantageList.push(format(t("labels.strongVs"), { archetype }));
                else if (rating <= 1) disadvantageList.push(format(t("labels.weakVs"), { archetype }));
            }
        });

        selectedHeroes.forEach(enemy => {
            const tankMultiplier = (enemy.role === 'tank') ? 1.5 : 1.0;
            if (h.antis[enemy.id]) {
                const impactVal = h.antis[enemy.id];
                antiImpact -= (impactVal * 8 * tankMultiplier);
                const labelKey = impactVal === 1 ? "labels.slightWeakAgainst" : "labels.weakAgainst";
                disadvantageList.push(format(t(labelKey), { name: heroName(enemy.id) }));
            }
            if (enemy.antis[h.id]) {
                const impactVal = enemy.antis[h.id];
                antiImpact += (impactVal * 8 * tankMultiplier);
                const labelKey = impactVal === 1 ? "labels.slightStrongAgainst" : "labels.strongAgainst";
                advantageList.push(format(t(labelKey), { name: heroName(enemy.id) }));
            }
        });

        let finalScore = base + antiImpact;
        finalScore = Math.max(10, Math.min(99, finalScore));
        
        return { ...h, score: finalScore, advantages: Array.from(new Set(advantageList)), disadvantages: Array.from(new Set(disadvantageList)) };
    });

    ['tank', 'damage', 'support'].forEach(role => {
        const topContainer = document.getElementById(`results-${role}`);
        const moreContainer = document.getElementById(`more-${role}`);
        if (!topContainer || !moreContainer) return;

        const roleHeroes = scoredHeroes.filter(h => h.role === role).sort((a, b) => b.score - a.score);
        
        let currentRank = 0;
        let lastScore = -1;
        roleHeroes.forEach((h, i) => {
            if (h.score !== lastScore) {
                currentRank++;
                lastScore = h.score;
            }
            h.rank = currentRank;
        });

        const renderHeroRow = (h) => {
            const displayScore = Math.round(h.score * 10) / 10;
            const color = role === 'tank' ? '#3b82f6' : (role === 'damage' ? '#ef4444' : '#22c55e');
            const roleClass = role === 'tank' ? 'role-tank' : (role === 'damage' ? 'role-damage' : 'role-support');
            const labels = displayScore >= 50 ? h.advantages : h.disadvantages;
            const labelStyle = displayScore >= 50 ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : "bg-red-500/20 text-red-300 border-red-500/30";
            const rankClass = h.rank <= 3 ? `rank-${h.rank}` : '';

            return `
                <div class="rank-card ${roleClass} ${rankClass} p-2 rounded flex items-center gap-3" style="color: ${color}">
                    <div class="w-10 h-10 rounded bg-slate-900 overflow-hidden flex-shrink-0 p-0.5">
                        <img src="${apiImages[h.id] || `https://static.playoverwatch.com/heroportrait/${h.id}.png`}" class="w-full h-full object-contain">
                    </div>
                    <div class="flex-grow min-w-0">
                        <div class="flex justify-between items-start gap-1">
                            <span class="text-[10px] font-black uppercase text-slate-100 truncate">${heroName(h.id)}</span>
                            <span class="font-black text-[10px] flex-shrink-0">${displayScore}%</span>
                        </div>
                        <div class="w-full bg-slate-950 h-1 rounded-full overflow-hidden my-1">
                            <div class="h-full" style="width: ${displayScore}%; background-color:${color}"></div>
                        </div>
                        <div class="labels-container">
                            ${labels.map(l => `<span class="label-item ${labelStyle}">${l}</span>`).join('')}
                        </div>
                    </div>
                </div>`;
        };

        const topHeroes = roleHeroes.filter(h => h.rank <= 3);
        const topDisplay = topHeroes.length >= 3 ? topHeroes : roleHeroes.slice(0, 3);
        const moreDisplay = roleHeroes.slice(topDisplay.length);

        topContainer.innerHTML = topDisplay.map(h => renderHeroRow(h)).join('');
        moreContainer.innerHTML = moreDisplay.map(h => renderHeroRow(h)).join('');
    });
}

function openDbModal() { 
    const modal = document.getElementById('db-modal');
    if (modal) { modal.classList.add('open'); renderDbTable(); }
}
function closeDbModal() { 
    const modal = document.getElementById('db-modal');
    if (modal) modal.classList.remove('open'); 
}

function renderDbTable() {
    const container = document.getElementById('db-table-container');
    if (!container) return;
    const roleOrder = { tank: 1, damage: 2, support: 3 };
    const sorted = [...HERO_DATA].sort((a, b) => {
        if (roleOrder[a.role] !== roleOrder[b.role]) return roleOrder[a.role] - roleOrder[b.role];
        return heroName(a.id).localeCompare(heroName(b.id), currentLang);
    });
    
    let html = `<div class="divide-y divide-slate-900">`;
    
    let currentRole = '';
    sorted.forEach(h => {
        if (currentRole !== h.role) {
            currentRole = h.role;
            const roleLabel = h.role === "tank" ? t("roles.tank") : (h.role === "damage" ? t("roles.damage") : t("roles.support"));
            const roleBg = h.role === 'tank' ? 'bg-blue-600/10' : (h.role === 'damage' ? 'bg-red-600/10' : 'bg-green-600/10');
            const roleText = h.role === 'tank' ? 'text-blue-400' : (h.role === 'damage' ? 'text-red-400' : 'text-green-400');
            // ロール見出し：pl-4 (左端から16px)
            html += `<div class="${roleBg} pl-4 py-1.5 text-[10px] font-black tracking-widest ${roleText} border-b border-slate-900/50 uppercase"> ${roleLabel} </div>`;
        }

        const isTank = h.role === 'tank';
        const isDps = h.role === 'damage';
        const rowBg = isTank ? 'bg-blue-950/5' : (isDps ? 'bg-red-950/5' : 'bg-green-950/5');
        
        const sortedAntis = Object.entries(h.antis).sort(([aId], [bId]) => heroName(aId).localeCompare(heroName(bId), currentLang));
        const antisStr = sortedAntis.map(([id, v]) => `${heroName(id)}<span class="${v>=4?'text-red-500 font-bold':'text-slate-500'}">(${v})</span>`).join(', ');
        const m = h.matchups;
        const getScoreColor = (s) => s >= 3 ? 'text-blue-400' : (s === 1 ? 'text-red-400' : (s === 0 ? 'text-red-600 font-bold' : 'text-slate-500'));
        const matchupHtml = `<div class="flex gap-1 justify-center font-mono text-[9px]"><span class="${getScoreColor(m.dive)}">D:${m.dive}</span><span class="${getScoreColor(m.rush)}">R:${m.rush}</span><span class="${getScoreColor(m.poke)}">P:${m.poke}</span></div>`;
        
        // データ行：pl-4 (左端から16px) で、ヘッダー・タイトルと完全に一直線になる
        html += `<div class="grid grid-cols-12 ${rowBg} hover:bg-slate-900/80 transition-colors items-center border-b border-slate-900">
            <div class="col-span-4 pl-4 py-3 border-r border-slate-900 flex items-center gap-2">
                <div class="w-6 h-6 bg-slate-900 rounded p-0.5 flex-shrink-0">
                    <img src="${apiImages[h.id] || `https://static.playoverwatch.com/heroportrait/${h.id}.png`}" class="w-full h-full object-contain">
                </div>
                <span class="font-black text-slate-100 uppercase text-[10px] truncate">${heroName(h.id)}</span>
            </div>
            <div class="col-span-3 py-2 text-center border-r border-slate-900">${matchupHtml}</div>
            <div class="col-span-5 pl-4 py-3 text-slate-300 text-[10px] leading-relaxed font-medium">${antisStr || '-'}</div>
        </div>`;
    });
    container.innerHTML = html + `</div>`;
}
function clearTeam() { selectedHeroes = []; updateUI(); }

window.toggleRoleQueue = toggleRoleQueue;
window.changeTab = changeTab;
window.openDbModal = openDbModal;
window.closeDbModal = closeDbModal;
window.toggleExpand = toggleExpand;
window.clearTeam = clearTeam;
