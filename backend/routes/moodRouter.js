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

router.get("/grief", (req, res) => {
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
      "I am grounded in love.",
    ],
  });
});

router.get("/desire", (req, res) => {
  res.json({
    affirmations: [
      "I release attachment and welcome flow.",
      "I am whole without needing more.",
      "I choose aligned action over craving.",
      "I am enough as I am.",
      "I trust divine timing.",
      "I let go with grace.",
      "I am fulfilled from within.",
      "I honor my desires without clinging.",
      "I am open to receive.",
      "I choose presence over pursuit",
    ],
  });
});

router.get("/anger", (req, res) => {
  res.json({
    affirmations: [
      "I channel my fire into purpose.",
      "I honor my boundaries.",
      "I speak my truth with clarity.",
      "I transform rage into resolve.",
      "I am safe to feel.",
      "I choose justice over vengeance.",
      "I am powerful and grounded.",
      "I release what no longer serves.",
      "I am not my anger. I am its alchemist.",
      "I rise with integrity.",
    ],
  });
});

router.get("/pride", (req, res) => {
  res.json({
    affirmations: [
      "I release the need to prove.",
      "I am enough without comparison.",
      "I choose humility and grace.",
      "I honor others’ light as I honor mine.",
      "I am open to learning.",
      "I lead with heart, not ego.",
      "I am secure in my truth.",
      "I grow through vulnerability.",
      "I am not above or below. I am.",
      "I choose connection over superiority.",
    ],
  });
});

router.get("/courage", (req, res) => {
  res.json({
    affirmations: [
      "I am brave enough to begin.",
      "I honor my growth.",
      "I choose action over fear.",
      "I am building resilience.",
      "I trust my ability to adapt.",
      "I am proud of my progress.",
      "I am worthy of success.",
      "I am learning through experience.",
      "I am stronger every day.",
      "I am becoming who I’m meant to be",
    ],
  });
});

router.get("/neutrality", (req, res) => {
  res.json({
    affirmations: [
      "I release the need to judge.",
      "I allow life to unfold.",
      "I am open to all outcomes.",
      "I choose peace over control.",
      "I am free from attachment.",
      "I trust the process.",
      "I am centered in balance.",
      "I allow others to be themselves.",
      "I am enough as I am.",
      "I welcome flow",
    ],
  });
});

router.get("/willingness", (req, res) => {
  res.json({
    affirmations: [
      "I am ready to grow.",
      "I welcome new challenges.",
      "I am open to learning.",
      "I choose progress over perfection.",
      "I am willing to change.",
      "I embrace discomfort as growth.",
      "I am committed to my path.",
      "I say yes to life.",
      "I am expanding with grace.",
      "I am becoming more myself.",
    ],
  });
});

router.get("/acceptance", (req, res) => {
  res.json({
    affirmations: [
      "I accept myself fully.",
      "I honor what is.",
      "I release resistance.",
      "I embrace my truth.",
      "I am at peace with my past.",
      "I allow healing to unfold.",
      "I trust life’s timing.",
      "I am whole in every moment.",
      "I welcome all parts of me.",
      "I am free to be.",
    ],
  });
});
router.get("/reason", (req, res) => {
  res.json({
    affirmations: [
      "I seek truth with clarity.",
      "I honor logic and intuition.",
      "I am open to new understanding.",
      "I question with compassion.",
      "I align thought with heart.",
      "I choose wisdom over reaction.",
      "I am a student of life.",
      "I refine my beliefs with grace.",
      "I value clarity over certainty.",
      "I think with love.",
    ],
  });
});
router.get("/love", (req, res) => {
  res.json({
    affirmations: [
      "I am love embodied.",
      "I radiate compassion.",
      "I forgive with ease.",
      "I choose kindness.",
      "I see the divine in all.",
      "I am a vessel of grace.",
      " I love without condition.",
      "I am connected to all beings.",
      "I speak from the heart.",
      "I am love, and I am loved.",
    ],
  });
});
router.get("/joy", (req, res) => {
  res.json({
    affirmations: [
        "I radiate joy from within.",
"I celebrate the now.",
"I am a vessel of delight.",
"I choose play and wonder.",
"I laugh with my whole being.",
"I am grateful for this breath.",
"I dance with life.",
"I see beauty everywhere.",
"I am joy embodied.",
"I share my light freely."

    ],
  });
});
router.get("/peace", (req, res) => {
  res.json({
    affirmations: [
        "I am stillness in motion.",
"I rest in divine trust.",
"I am one with all.",
"I release all resistance.",
"I am the breath between thoughts.",
"I surrender to grace.",
"I am whole, here and now.",
"I dwell in serenity.",
"I am peace beyond understanding.",
"I am the quiet center of the storm."

    ],
  });
});
router.get("/enlightenment", (req, res) => {
  res.json({
    affirmations: [	
      "I am the witness of all things.",
	"I rest in the stillness beneath thought.",
	"I am not the body, not the mind—I am.",
	"I surrender all striving.",
	"I am the light behind the eyes.",
	"I dwell in the eternal now.",
	"I am one with all that is.",
	"I release all identification.",
	"I am the silence between breaths.",
	"I am the source and the reflection."
],
  });
});
export default router;
