import express from 'express';
const router = express.Router()// assign the var name to the call 


router.get("/shame", (req, res) => {
    res.json({
        affirmations:
            [
                "I am worthy of love and healing",
                "My past does not define me.",
                "I release the need to hide.",
                "I forgive myself for being human.",
                "I choose compassion over judgment.",
                "I am learning to trust my voice.",
                "I honor my journey, even the shadows.",
                "I am safe to be seen.",
                "I am not my mistakes.",
                "I am reclaiming my dignity."

            ]
    }
    )
})
router.get("grief",(req, res)=> {
    res.json({
        affirmations:
            [
                "I release the burden of guilt.",
                "I forgive myself and others.",
                "I choose grace over punishment.",
                "I am allowed to grow.",
                "I am learning from every experience.",
                "I am free to move forward.",
                "I honor my intentions.",
                "I am not here to suffer.",
                "I deserve peace."
            ]
    })
})




export default router;
