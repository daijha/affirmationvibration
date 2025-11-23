import express from "express";
const router = express.Router(); // assign the var name to the call

router.get("/shame", (req, res) => {
    res.json({
        affirmations: [
            "I am worthy of love and healing",
            "My past does not define me.",
            "I release the need to hide.",
            "I forgive myself for being human.",
            "I choose compassion over judgment.",
            "I am learning to trust my voice.",
            "I honor my journey, even the shadows.",
            "I am safe to be seen.",
            "I am not my mistakes.",
            "I am reclaiming my dignity.",
        ],
    });
});

router.get("/guilt", (req, res) => {
    res.json({
        affirmations: [
            "I release the burden of guilt.",
            "I forgive myself and others.",
            "I choose grace over punishment.",
            "I am allowed to grow.",
            "I am learning from every experience.",
            "I am free to move forward.",
            "I honor my intentions.",
            "I am not here to suffer.",
            "I deserve peace.",
        ],
    });
});

router.get("/apathy", (req, res) => {
    res.json({
        affirmations: [
            "I am awakening to possibility.",
            "My energy is returning.",
            "I am allowed to care again.",
            "I choose gentle momentum.",
            "I am not stuck, I am resting.",
            "I am reconnecting with purpose.",
            "I am open to new meaning.",
            "I am worthy of vitality.",
            "I am safe to feel again.",
            "I am rising.",
        ],
    });
});

router.get("/ grief", (req, res) => {
    res.json({
        affirmations: [
            "I honor my loss with love.",
            "My tears are sacred.",
            "I am healing at my own pace.",
            "I carry love forward.",
            "I am not alone in this.",
            "I allow joy to return.",
            "I am safe to feel deeply.",
            "I release what no longer serves.",
            "I am transforming sorrow into strength.",
            "I am whole, even in mourning.",
        ],
    });
    router.get("/fear", (req, res) => {
        res.json({
            affirmations: [
                "I am safe in this moment.",
                "I trust my inner wisdom.",
                "I release what I cannot control.",
                "I choose courage over avoidance.",
                "I am stronger than I think.",
                "I am supported by life.",
                "I breathe through uncertainty.",
                "I am learning to trust again.",
                "I am protected.",
                "I am grounded in love."

            ]
        })

    })
    export default router;
