(() => {
const LANGS = [
    { code: "ja", label: "日本語" },
    { code: "en", label: "English" }
];

const DEFAULT_LANG = "ja";

const STRINGS = {
    ja: {
        ui: {
            title: "OWアンチくん",
            roleQueue: "ロールキュー(5vs5)",
            languageLabel: "言語"
        },
        tabs: {
            tank: "タンク",
            damage: "ダメージ",
            support: "サポート"
        },
        roles: {
            tank: "タンク",
            damage: "ダメージ",
            support: "サポート",
            empty: "（空き）"
        },
        analysis: {
            title: "推奨アンチピック",
            placeholder: "敵ヒーローを選択してください"
        },
        buttons: {
            db: "データベースを閲覧",
            reset: "リセット"
        },
        db: {
            title: "ヒーロー相性データベース",
            colHero: "ヒーロー",
            colComp: "各構成への耐性",
            colBad: "苦手な相手(影響度)"
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
    },
    en: {
        ui: {
            title: "OW Anti-kun",
            roleQueue: "Role Queue (5v5)",
            languageLabel: "Language"
        },
        tabs: {
            tank: "Tank",
            damage: "Damage",
            support: "Support"
        },
        roles: {
            tank: "Tank",
            damage: "Damage",
            support: "Support",
            empty: "(Empty)"
        },
        analysis: {
            title: "Recommended Counterpicks",
            placeholder: "Select enemy heroes"
        },
        buttons: {
            db: "View Database",
            reset: "Reset"
        },
        db: {
            title: "Hero Matchup Database",
            colHero: "Hero",
            colComp: "Composition Matchups",
            colBad: "Difficult Matchups (Impact)"
        },
        archetypes: {
            dive: "Dive",
            rush: "Rush",
            poke: "Poke",
            null: "Null"
        },
        labels: {
            strongVs: "Strong vs {archetype}",
            weakVs: "Weak vs {archetype}",
            strongAgainst: "Strong vs {name}",
            slightStrongAgainst: "Slightly strong vs {name}",
            weakAgainst: "Weak vs {name}",
            slightWeakAgainst: "Slightly weak vs {name}"
        }
    }
};

const HERO_NAMES = {
    ja: {
        "dva": "D.Va",
        "doomfist": "ドゥームフィスト",
        "hazard": "ハザード",
        "junker-queen": "ジャンカークイーン",
        "mauga": "マウガ",
        "orisa": "オリーサ",
        "ramattra": "ラマットラ",
        "reinhardt": "ラインハルト",
        "roadhog": "ロードホッグ",
        "sigma": "シグマ",
        "winston": "ウィンストン",
        "wrecking-ball": "レッキング・ボール",
        "zarya": "ザリア",
        "ashe": "アッシュ",
        "bastion": "バスティオン",
        "cassidy": "キャスディ",
        "echo": "エコー",
        "freja": "フレイヤ",
        "genji": "ゲンジ",
        "hanzo": "ハンゾー",
        "junkrat": "ジャンクラット",
        "mei": "メイ",
        "pharah": "ファラ",
        "reaper": "リーパー",
        "sojourn": "ソジョーン",
        "soldier-76": "ソルジャー76",
        "sombra": "ソンブラ",
        "symmetra": "シンメトラ",
        "torbjorn": "トールビョーン",
        "tracer": "トレーサー",
        "vendetta": "ヴェンデッタ",
        "venture": "ベンチャー",
        "widowmaker": "ウィドウメイカー",
        "ana": "アナ",
        "baptiste": "バティスト",
        "brigitte": "ブリギッテ",
        "illari": "イラリー",
        "juno": "ジュノ",
        "kiriko": "キリコ",
        "lifeweaver": "ライフウィーバー",
        "lucio": "ルシオ",
        "mercy": "マーシー",
        "moira": "モイラ",
        "wuyang": "ウーヤン",
        "zenyatta": "ゼニヤッタ"
    },
    en: {
        "dva": "D.Va",
        "doomfist": "Doomfist",
        "hazard": "Hazard",
        "junker-queen": "Junker Queen",
        "mauga": "Mauga",
        "orisa": "Orisa",
        "ramattra": "Ramattra",
        "reinhardt": "Reinhardt",
        "roadhog": "Roadhog",
        "sigma": "Sigma",
        "winston": "Winston",
        "wrecking-ball": "Wrecking Ball",
        "zarya": "Zarya",
        "ashe": "Ashe",
        "bastion": "Bastion",
        "cassidy": "Cassidy",
        "echo": "Echo",
        "freja": "Freja",
        "genji": "Genji",
        "hanzo": "Hanzo",
        "junkrat": "Junkrat",
        "mei": "Mei",
        "pharah": "Pharah",
        "reaper": "Reaper",
        "sojourn": "Sojourn",
        "soldier-76": "Soldier: 76",
        "sombra": "Sombra",
        "symmetra": "Symmetra",
        "torbjorn": "Torbjorn",
        "tracer": "Tracer",
        "vendetta": "Vendetta",
        "venture": "Venture",
        "widowmaker": "Widowmaker",
        "ana": "Ana",
        "baptiste": "Baptiste",
        "brigitte": "Brigitte",
        "illari": "Illari",
        "juno": "Juno",
        "kiriko": "Kiriko",
        "lifeweaver": "Lifeweaver",
        "lucio": "Lucio",
        "mercy": "Mercy",
        "moira": "Moira",
        "wuyang": "Wuyang",
        "zenyatta": "Zenyatta"
    }
};

window.I18N = { LANGS, DEFAULT_LANG, STRINGS, HERO_NAMES };
})();
